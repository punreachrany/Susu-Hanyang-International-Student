import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, auth, deviceStorage} from '../../config'; 

export default _handleAuthDeleteAccount = async(state, _onSetState) => {
     
    var url = server.serverURL + '/users/deleteaccount'; 
    
    _onSetState({
        isLoading: true,
        isError: false
    });   
    var jwt;
    while(true){
        jwt = await deviceStorage.getJWT() 
        if(jwt != null){
            break;
        }
    }
    console.log("jwt: ", jwt)
    await axios.post(url, {jwt: jwt}) 
        .then(async (response) => {       
            _onSetState({
                isLoading: false
            });   
            await auth.logout()
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