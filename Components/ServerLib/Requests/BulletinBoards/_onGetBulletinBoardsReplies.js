import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, deviceStorage} from '../../config';

export default _onGetBulletinBoardsReplies = async (state,_onSetState, isRefresh = false) => {   
    var url = server.serverURL + '/bulletinboards/showcomments';

    // 새로고침인 경우 isLoading 활성화 후 모든 목록 다시 받기
    if(isRefresh){
        commentstartindex= 0;
        commentendindex= 19;
        _onSetState({
            isLoading: true,
            isError: false,
        }) 
    }

    // 새로고침이 아닌 경우 isLoadingMore 활성화 후 일부 목록만 추가로 이어 받기
    else{
        if(state.commentslist.length == 0)
            commentstartindex= 0;
        else
            commentstartindex= state.commentslist.length - 1;
        commentendindex= commentstartindex + 19;
        _onSetState({
            isLoadingMore: true,
            isError: false,
        }) 
    }
    var jwt = await deviceStorage.getJWT();
    await axios.post(url, {jwt: jwt, boardid: state.boardid, entryid: state.entryid,
        commentstartindex: commentstartindex, commentendindex: commentendindex})
        .then((response) => {
            // 새로고침시 목록 다 지우고 게시글 목록 새로 받기
            if(isRefresh){
                state.commentslist.splice(0, state.commentslist.length)    
                state.commentslist.push(...response.data.commentslist)
            }
            // 새로고침이 아닌 경우
            else{
                state.commentslist.splice(state.commentslist.findIndex((element) => {return element.entryid == 'lastlastlast'}), 1)
                state.commentslist.push(...response.data.commentslist)
            }

            {response.data.commentslist.length != 0 && state.commentslist.length % 20 == 0 ? // % 20으로 나눈 이유는 왜 인지 알 거 같지?
                // 게시글 개수가 20개가 꽉 찼을 떄 Load More 버튼 표시 (이후 반환받는 Entry가 비어있을 때에는 다음 처리)
                state.commentslist.push({lastElement:true, okToShow: true, replyid: 'lastlastlast'}) :
                // 게시글 개수가 20개가 안될 떄
                state.commentslist.push({lastElement:true, okToShow: false, replyid: 'lastlastlast'})
            }
            _onSetState({ 
                commentslist: state.commentslist,
                isLoading: false,
                isLoadingMore: false,
                isEmpty: state.commentslist.length == 1? true : false,
            }) ; 
    }) 
    .catch(( err ) => {
        Alert.alert(
            'Cannot connect to the server.',
            'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
            [{text: 'OK'}]
          );
        _onSetState({
            isError: true,
            isLoading: false,
        })
    });    
}