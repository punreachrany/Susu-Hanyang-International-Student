import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, deviceStorage} from '../../config';

export default _handleAddReport = async(state, _onSetState) => {
    var url = server.serverURL + '/bulletinboards/addreport';
    _onSetState({
        isLoading: true,
        isError: false
    })  
    var jwt = await deviceStorage.getJWT();
    await axios.post(url, {title: state.title, contents: state.contents, jwt: jwt, boardid: state.boardid, 
        entryid: state.entryid, commentid: state.replyid, parentcommentid: state.parentreplyid }) 
        .then((response) => {       
            _onSetState({
            isLoading: false
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