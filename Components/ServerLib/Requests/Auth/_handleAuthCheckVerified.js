/* 
현재 접속한 사용자의 계정이 verify를 마쳤는 지의 여부를 나타냄. 
*/


import { Alert } from 'react-native';
import axios from 'axios'; 
import {server, deviceStorage} from '../../config'; 

export default _handleAuthCheckVerified = async(state, _onSetState) => {
             
    var url = server.serverURL + '/users/checkverified'; 
    
    _onSetState({
        isLoading: true,
        isError: false
    });

    await axios.post(url, {jwt: state.jwt}) 
        .then((response) => {       
            _onSetState({
            isLoading: false,
            isverified: response.data.isverified 
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
            isError: true
        })
    
}