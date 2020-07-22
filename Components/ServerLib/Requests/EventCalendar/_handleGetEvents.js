import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleGetEventsList = async(state, _onSetState) => {
    var url = server.serverURL + '/eventcalendars/showeventslist';  
    _onSetState({
      isLoading: true,
      isError: false
    })

    await axios.post(url, {
      startday: '2019-09-01', days: 10, type: ["Official"], userid: "5d5373177443381df03f3040", search: " "}) 
        .then((response) => {       
          _onSetState({
            EventEntries : response.data.EventEntries,
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
MOST IMPORTANT THING     
Whenever you send a date it should be like this: "2019-09-28", "YYYY-MM-DD" 
If you are hard to make this form, tell me. Let's solve this problem together. 

Show events between 'startday' and 'startday' + days -1 && that matches type, filter
Ex. startday = 2019-09-01, days = 5, 
Show events in: 2019-09-01, 2019-09-02, 2019-09-03, 2019-09-04 

response.data.isadmin: specifies requested user is admin or not
Events: Every events that in the specified Date from 'response.data.EventEntries'
ismine: specifies if the event is written by requested user 
adminwrote: specifies if teh event is written by an admin.

return:  
 response.data.EventEntries: [{isadmin: boolean, Date: date (ex. 2019-09-01), Events: [Array]}]

 In each 'Events': 
    Events: [{eventID, title, type, contents, ismine}] 

  Ex. There are only 2 events in '2019-09-01'. And user1 wrote 'Event11' only and 'Event12' is written by admin  
      
    Assumption: user1(not admin) requested to see every events in '2019-09-01'      

      Then this function will return: 

      response.data.EventEntries: [{isadmin: false, Date: "2019-09-01", Events: [Array]}] 
      
      Events Array will contain:  
      [
        {EventID: "11", title: "Event11", type: ["Official"], adminwrote: false, ismine: true} 
        {EventID: "12", title: "Event12", type: ["Official"], adminwrote: true, ismine: false}
      ] 
  if there's no matched Events then returns: 
    response.data.EventEntries: { isadmin: boolean, EventEntries: [] }

axios parameter:
  type: Must make sure capitals matches. 
  send type as: 'type: []' => returns all elements without type condition. 
  if you do not send 'type' => returns all elements without type condition.

  filter: Search keyword. Case Insensitive.
  send 'filter: " "' => returns all elements without filter condition. 
  if you do not send 'filter' => returns all elements without filter condition  
*/

