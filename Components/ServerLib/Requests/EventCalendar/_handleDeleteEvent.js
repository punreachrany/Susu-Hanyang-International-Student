import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleDeleteEvent = async(state, _onSetState) => {
    var url = server.serverURL + '/eventcalendars/deleteevent';  
    _onSetState({
      isLoading: true,
      isError: false
    })

    await axios.post(url, {eventid: "5d8d5074e168223dea014a1e"}) 
        .then((response) => {       
          _onSetState({
            isLoading: false
            })  
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            ); 
        });    
    } 

/* 
Delete an event whose eventid(EventID) is requested. In this code, an event whose id is "5d8d5074e168223dea014a1e" 
will be deleted  
It doesn't check whether requested user is qualified to delete. 
Since, I thouth the menu would be different depending on accessed user is admin or not and user is qualified to delete the event or not  
*/