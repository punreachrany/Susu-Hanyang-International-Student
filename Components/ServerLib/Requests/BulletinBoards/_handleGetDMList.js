import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleGetDMList = async(state, _onSetState) => {
    var url = server.serverURL + '/bulletinboards/showdmlist';  

    _onSetState({
        isLoading: true,
        isError: false
    })  

    await axios.post(url, {
        userid: "5d5373177443381df03f3040",
        DMStartIndex: 0, 
        DMEndIndex: 19
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
   