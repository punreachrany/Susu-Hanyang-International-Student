import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, deviceStorage} from '../../config';

export default _handleLikeIncrease = async(state, _onSetState) => {
    
    const url = server.serverURL + '/bulletinboards/fliplikeentry';
      
    _onSetState({
        isLoading: true,
        isError: false
    })  
    var jwt = await deviceStorage.getJWT();
    await axios.post(url, {boardid: state.boardid, entryid: state.entryid, replyid: state.replyid, jwt: jwt}) 
        .then((response) => {       
            _onSetState({
            isLoading: false,
            likespressed: response.data.likesinfo[0].likespressed,
            likes: response.data.likesinfo[0].likes 
            }) 
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
        });    
}     

/*  
설명 및 요구사항

//////////////////////////////////////////////////////////////////////////////////////////
설명

이 파일에서는 오류를 방지하고자

let isentry = true;
let likespressed = false;

로 지정하였지만, 상황에 따라 true /false 값이 바뀌어야 한다.

if(replyid == 0) => 게시글에서 좋아요 / 좋아요 취소를 요청한 것으로 간주. 
if(replyid != 0) => 댓글에서 좋아요 / 좋아요 취소를 요청한 것으로 간주. 

_onGetBulletinBoardsPost / _onGetBulletinBoardsReplies 를 통하여 해당 사용자가 
각 게시글 / 댓글마다 좋아요를 표시했는 지의 여부를 나타내는 'likespressed' (response.data.likespressed)를 반환한다. 

if(likespressed == true) => 이미 좋아요를 표시한 게시글 혹은 댓글을 대상으로 하므로 '좋아요 취소' 함수를 호출한다.  
if(likespressed == false) => 아직 좋아요를 표시하지 않은 게시글 혹은 댓글을 대상으로 하므로 '좋아요 증가' 함수를 호출한다.

반환값 

response.data.msg => 사용자 조회 실패, 게시글 조회 실패, 댓글 조회 실패에 따른 메시지 
response.data.likespressed => 4개 함수를 실행하기 전의 'likespressed' 값의 not을 반환한다. 에러, 사용자 조회 실패, 게시글 조회 실패, 댓글 조회 실패 시 원래 likespressed 값을 반환한다. 
response.data.likes => 함수 실행 결과로 계산되는 likes 의 값 

ex. 좋아요 증가 함수 실행 전: likespressed == false => 실행 후: likespressed == true  


////////////////////////////////////////////////////////////////////////////////////////// 

//////////////////////////////////////////////////////////////////////////////////////////
요구사항

replyid: state.replyid, 
userid: state.userid
위의 두 변수가 추가적으로 필요하다. 

if(replyid == 0 && likespressed==false) => 해당 게시판의 좋아요 증가 함수 호출  (url = server.serverURL + '/IncreLikeEntry') 
if(replyid == 0 && likespressed==true) => 해당 게시판의 좋아요 취소 함수 호출  (url = server.serverURL + '/DecreLikeEntry')
if(replyid != 0 && likespressed==false) => 해당 댓글의 좋아요 증가 함수 호출  (url = server.serverURL + '/IncreLikeComment')
if(replyid == 0 && likespressed==false) => 해당 댓글의 좋아요 취소 함수 호출  (url = server.serverURL + '/DecreLikeComment') 
//////////////////////////////////////////////////////////////////////////////////////////
*/


