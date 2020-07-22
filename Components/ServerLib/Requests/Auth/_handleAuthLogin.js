import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, deviceStorage} from '../../config'; 

export default _handleAuthLogin = async(state, _onSetState) => {
     
    var url = server.serverURL + '/users/login'; 
    
    _onSetState({
        isLoading: true,
        isError: false
    });  
    
    await axios.post(url, {loginId: state.loginid, password: state.password}) 
        .then((response) => {       
            _onSetState({
            isLoading: false
            });  
            deviceStorage.saveKey("id_token", response.data.accesstoken); 
            if(!response.data.islogin){
                alert(response.data.msg) 
            }
        })
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
        });
        _onSetState({
            isError: true,
        })    
};