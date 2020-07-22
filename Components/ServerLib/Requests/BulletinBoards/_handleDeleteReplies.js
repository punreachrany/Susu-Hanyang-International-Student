import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleDeleteReplies = async(state, _onSetState) => {
    var url = server.serverURL + '/bulletinboards/deletecomment';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url, { boardid: state.boardid, entryid: state.entryid, replyid: state.replyid}) 
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