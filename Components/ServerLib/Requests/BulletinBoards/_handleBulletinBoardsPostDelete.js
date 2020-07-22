import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleBulletinBoardsPostDelete = async(state, _onSetState) => {
    var url = server.serverURL + '/bulletinboards/deleteentry';
    _onSetState({
        isLoading: true,
        isError: false,
        isDeleted: false,
    }) 
    await axios.post(url, {userid: state.currentuserid, boardid: state.boardid,
        entryid: state.entryid, title: state.title, contents: state.contents}) 
        .then((response) => {
            _onSetState({
                isDeleted: true,
            })
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
            _onSetState({
                isError: true,
            })
        });    
}   



/*  2019-09-21 response.data.msg 출력 확인 완료한 코드 

_handleBulletinBoardsPostDelete = async(tate, _onSetState) => {
    var url = server.serverURL + '/DeleteEntry';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url, {userid: "5d5373177443381df03f3040", boardid: "board2",
        entryid: "5d818aca77ad92357c860bf9"}) 
        .then((response) => { 
          alert(response.data.msg)
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
            _onSetState({
                isError: true
            })
        });     
      }








*/