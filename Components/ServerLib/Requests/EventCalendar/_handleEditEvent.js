import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleEditEvent = async(state, _onSetState) => {
    var url = server.serverURL + '/eventcalendars/editevent';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url,{eventid: "5d8d5074e168223dea014a1e", title: "Official& type1 test title3", contents: "Official& type1 test contents3", startdate: "2019-09-01", enddate: "2019-09-10"})  
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

/*  

Edit an event whose id is 'eventid' in line 11. 
It doesn't check whether requested user is qualified to edit. 
Since, I thouth the menu would be different depending on accessed user is admin or not and user is qualified to edit the event or not  
*/
