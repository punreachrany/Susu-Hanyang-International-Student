import { Alert } from 'react-native';
import { BulletinBoardsEntries_Mock } from '../../../../Mockup_Datas/UnifiedEntries'
import axios from 'axios'; 
import {server, deviceStorage} from '../../config'; 

export default _onGetBulletinBoardsPost = async (state,_onSetState, isRefresh = false, searchquery = "", language = "", isMain = false) => {   
    
    var url = server.serverURL + '/bulletinboards/showbulletinboard';

    // 새로고침인 경우 isLoading 활성화 후 모든 목록 다시 받기
    if(isRefresh){
        postStartIndex= 0;
        postEndIndex= 19;
        _onSetState({
            isLoading: true,
            isError: false,
            // 검색 기능용 state
            isSearching: true,
        }) 
    }
    
    // 메인 스크린일 경우 5개만 가져오기
    else if(isMain) {
        state.entrieslist.splice(0, state.entrieslist.length)
        state.entrieslist.push({isLoading: true, isError: false})
        state.entrieslist.push({isLoading: true, isError: false})
        state.entrieslist.push({isLoading: true, isError: false})
        postStartIndex= 0;
        postEndIndex= 4;
    }

    // 새로고침이 아닌 경우 isLoadingMore 활성화 후 일부 목록만 추가로 이어 받기
    else{
        if(state.entrieslist.length == 0)
            postStartIndex= 0;
        else
            postStartIndex= state.entrieslist.length - 1;
        postEndIndex= postStartIndex + 19;
        _onSetState({
            isLoadingMore: true,
            isError: false,
        }) 
    } 

    var jwt = await deviceStorage.getJWT();

    await axios.post(url, {jwt: jwt, boardid: state.boardid, 
        postStartIndex: postStartIndex, postEndIndex: postEndIndex, search: searchquery, language: language})
        .then((response) => {
            // 새로고침시 목록 다 지우고 게시글 목록 새로 받기
            if(isRefresh){
                state.entrieslist.splice(0, state.entrieslist.length)    
                state.entrieslist.push(...response.data.postslist)
            }
            // 새로고침이 아닌 경우
            else{
                state.entrieslist.splice(state.entrieslist.findIndex((element) => {return element.entryid == 'lastlastlast'}), 1)
                state.entrieslist.push(...response.data.postslist)
            }

            if(isMain){
                _onSetState({
                    entrieslist: state.entrieslist,
                    isLoading: false,
                    isError: false,
                })
            }
            else{
                    {response.data.postslist.length != 0 && state.entrieslist.length % 20 == 0 ? // % 20으로 나눈 이유는 왜 인지 알 거 같지?
                        // 게시글 개수가 20개가 꽉 찼을 떄 Load More 버튼 표시 (이후 반환받는 Entry가 비어있을 때에는 다음 처리)
                        state.entrieslist.push({lastElement:true, okToShow: true, entryid: 'lastlastlast'}) :
                        // 게시글 개수가 20개가 안될 떄
                        state.entrieslist.push({lastElement:true, okToShow: false, entryid: 'lastlastlast'})
                    }
                    _onSetState({ 
                        entrieslist: state.entrieslist,
                        isLoading: false,
                        isLoadingMore: false,
                        // 검색 기능용
                        isSearching: false,
                        isSearched: true,
                        isEmpty: state.entrieslist.length == 1? true : false,
                    }) ; }
    }) 
    .catch(( err ) => {
        _onSetState({
            isError: true,
            isLoading: false,
        })

        if(isMain){
            state.entrieslist.splice(0, state.entrieslist.length)
            state.entrieslist.push({isLoading: true, isError: false})
            state.entrieslist.push({isLoading: true, isError: false})
            state.entrieslist.push({isLoading: true, isError: false})
            _onSetState({
                entrieslist: state.entrieslist,
            })
        }
    });    
}

/* 
27번 줄 search: search 에서 search에 string 값을 입력하면 
해당 문자열과 일치하거나 해당 문자열을 포함하는 게시글 제목/내용/사용자 명 검색. 대소문자 무관. 아무런 값도 없을 시 전체 목록 전달

language: 공지사항의 제목 및 내용을 사용자가 요청한 언어(영어, 중국어)로 번역한다. 
빈 값일 경우 한국어 공지사항이 나오고, 

27번 줄에서 
영어로 요청 시: language: "en" 
중국어로 요청 시: language: "zh" 
로 작성하면 된다.
*/

