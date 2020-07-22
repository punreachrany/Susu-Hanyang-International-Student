/*
작성자 : 김창희
최초작성일 : 2019/11/18
설명 : 이메일을 통한 인증을 마치지 않은 사용자가 앱에 접속하는 것을 방지하는 컴포넌트입니다. 
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native'; 
import { withNavigation} from 'react-navigation';
import LoadingPage from '../Tools/LoadingPage';

class NotverifiedScreen extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    // 렌더 함수   
    render() {
        return(  
            
            <View style={{ paddingTop: 250}}>   
                <Text style={{fontSize:20, color:'black',fontWeight:'bold', alignSelf:'center'}}>
                    Turn off this app and check your HYU email to verify your account!</Text>    
            </View>   
        );
    }
}
export default withNavigation(NotverifiedScreen);