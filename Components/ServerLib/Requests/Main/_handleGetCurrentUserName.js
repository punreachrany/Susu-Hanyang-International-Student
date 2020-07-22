import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, deviceStorage} from '../../config'; 

export default _handleGetCurrentUserName = async(state, _onSetState) => {
     
    var url = server.serverURL + '/users/getcurrentusername'; 
    
    _onSetState({
        isLoading: true,
        isError: false
    });  
    var jwt = await deviceStorage.getJWT(); 
    await axios.post(url, {jwt: jwt}) 
        .then((response) => {       
            _onSetState({
            isLoading: false,
            name: response.data.name
            });  
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