import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleGetRequestedEventsList = async(state, _onSetState) => {
    var url = server.serverURL + '/eventcalendarrequests/showeventslist';  
    _onSetState({
      isLoading: true,
      isError: false
    })

    await axios.post(url, {
      startday: '2019-09-01', days: 10, type: ["Official"], userid: "5d5373177443381df03f3040", search: " "}) 
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
Get 'Requested events' which means events that are requested to be registered but still not. 
Admin can see all events that matches: startday ~ startday+days-1, type, filter condition and whose indexs are between startindex and endindex 

user can only see events that he requested. 

You may not send: startday, days, startindex,endindex,type, filter. 

If you don't send startday => then server will set the first day of system date. 
ex. user executed this function at 10/21 withour 'startday' => then startday will be: 10/1
*/  


