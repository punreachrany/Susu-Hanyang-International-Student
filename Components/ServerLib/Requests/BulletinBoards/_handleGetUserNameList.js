import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleGetUserNameList = async(state, _onSetState) => {
    var url = server.serverURL + '/bulletinboards/showusernamelist';
    
    _onSetState({
        isLoading: true,
        isError: false
    }); 
  
    await axios.post(url,{search: "ad"}) 
        .then((response) => {       
            this.setState({ 
              isLoading: false,
              usernamelist: response.data.usernamelist
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
설명
모든 사용자의 이름 혹은 검색어 입력 시(search에 값을 넣을 시) 해당 검색 조건을 만족하는 username 만을 반환하는 함수 
*/