import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config'; 

export default _handleAuthLogin = async(state, _onSetState) => {
             
    var url = server.serverURL + '/users/checknicknm'; 
    
    _onSetState({
        //isLoading: true,
        isError: false
    });  
    
    await axios.post(url, {nickNm: state.nicknm}) 
        .then((response) => {       
            _onSetState({
            isLoading: false,
            permittednickNm: response.data.permittednickNm 
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