import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleDeleteRequestedEvent = async(state, _onSetState) => {
    var url = server.serverURL + '/eventcalendarrequests/deleteevent';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url,{
        eventid: "5d8f2b789dea3b7a808ff3e8", 
        })   
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