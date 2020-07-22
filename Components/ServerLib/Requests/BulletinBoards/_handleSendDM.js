import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleSendDM = async(state, _onSetState) => {
    var url = server.serverURL + '/bulletinboards/senddm';  

    _onSetState({
        isLoading: true,
        isError: false
    });

    await axios.post(url, {
      receivername: "admin", 
      senderid: "5d5374268c9da625c018277e",
      title: "title4",
      contents: "contents4"
      }) 
        .then((response) => {       
            this.setState({ 
              isLoading: false
            });  
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
메모: receivername이 Admin 이런식으로 한 글자라도 틀리게 되면 수신자를 조회할 수 없다. 따라서 모든 사용자의 username을 조회하는 함수가 필요할 것 같다 
*/