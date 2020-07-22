import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleAddEvent = async(state, _onSetState) => {
    var url = server.serverURL + '/eventcalendars/addevent';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url,{
            userid: "5d5cac858f549f46e0b2a76f", 
            startdate: '2019-09-25', 
            enddate: '2019-10-03',
            type: ["Ofiifcial"],
            title: "title1"
        })   
        .then((response) => {       
            _onSetState({
            isLoading: false
            }) 
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
        });    
}
