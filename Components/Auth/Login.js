/*
작성자 : 김창희
최초작성일 : 2019/11/18
설명 : 로그인을 위해 아이디와 비밀번호를 입력하는 컴포넌트입니다. 
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { withNavigation, NavigationEvents, navigation } from 'react-navigation';
import ConsoleLog from '../Tools/ConsoleLog';
import LoadingPage from '../Tools/LoadingPage';
import { _handleAuthLogin } from '../ServerLib/ServerRequest'

class LoginScreen extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    _onLogin = (state) => {
        this.setState({
            ...state
        })
    }
    //1. 로그인 처리 함수. 추 후 수정 요망
    _onPress = async () => {
        await _handleAuthLogin({...this.state}, this._onLogin); 
        this.props.navigation.navigate('Auth');
        } //_onPress 종료
                
    // 렌더 함수   
    render() {
        return(  
            <View> 
                {this.state.isLoading?
                     <View>
                     <LoadingPage/>
                     </View> : 
                        <View style={{ paddingTop: 250}}>   
                            <Text style={{fontSize:20, color:'black',fontWeight:'bold', alignSelf:'center'}}>Login{"\n"}</Text>
                            <TextInput
                                placeholder='Your HYU email'
                                value = {this.state.loginid}
                                onChangeText={loginid => this.setState({ loginid })}/>
                            <TextInput
                                placeholder='Your password'
                                value = {this.state.password} 
                                secureTextEntry={true} //입력 값 안 보이게
                                onChangeText={password => this.setState({ password })}/>
                            
                            <Button onPress={this._onPress}>Login</Button>
                <Text style = {{alignSelf:'center'}}>{"\n"}Press here to signup:{" "}   
                                <Text style={{color: 'blue',textDecorationLine: 'underline'}}
                                onPress={() => this.props.navigation.navigate('Signup')}>Signup</Text> 
                            </Text> 
                    </View>
                } 
                </View>   
        );
    }
}
export default withNavigation(LoginScreen);