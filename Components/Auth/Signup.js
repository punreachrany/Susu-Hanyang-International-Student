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
import { _handleAuthSignup } from '../ServerLib/ServerRequest'
import { _handleAuthChecknicknm } from '../ServerLib/ServerRequest'

class SignupScreen extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false, 
            permittednickNm: false,  
            issignup: false
        }
    }
    _onSignup = (state) => {
        this.setState({
            ...state
        })
    }
    //1. 회원가입 처리 함수. 추 후 수정 요망
    _onPress = async () => { 

        if(this.state.permittednickNm == false){
            alert("Check your nick name first") 
            return;
        } 

        //한양대 이메일이 아닌 경우 반환 
        const reg = new RegExp(/^[0-9a-zA-Z]*@hanyang.ac.kr$/); 

        if(!reg.test(this.state.loginid)){ 
            
            alert("Use your HYU email only!"); 
            return;
        } 

        await _handleAuthSignup({...this.state}, this._onSignup);  
        if(this.state.issignup){
            this.props.navigation.navigate('Auth');
        } 
        
        } //_onPress 종료

    //2. 닉네임 가용 여부 체크
    _checknicknm = async () => {
        await _handleAuthChecknicknm({...this.state}, this._onSignup) 
        
        //닉네임을 빈칸으로 제출 시
        if(this.state.nicknm == undefined || this.state.nicknm.trim() == ""){
            alert("Fill your nick name field") 
            return;
        }
        //사용자가 입력한 닉네임을 사용할 수 있는 지의 여부를 나타냄.
        if(this.state.permittednickNm == true){
            alert("You can use the nick name!")
        }  
        else{
            alert("You cannot use the nick name")
        }
        
        }; //_checknm 종료  
    
        _trimnicknm(newString) {
            this.setState({nicknm: newString.trim(), permittednickNm: false});  
        } 
                
    // 렌더 함수   
    render() {
        return(  
            <View> 
                {this.state.isLoading?
                     <View>
                     <LoadingPage/>
                     </View> : 
                        <View style={{ paddingTop: 250}}>   
                            <Text style={{fontSize:20, color:'black', fontWeight:'bold', alignSelf:'center'}}>Sign up{"\n"}</Text>
                            <View style={{ flexDirection:'row'}}>
                                <TextInput
                                    style={{flex: 1 }}
                                    placeholder='Your nickname'
                                    value = {this.state.nicknm}
                                    onChangeText={this._trimnicknm.bind(this)}/> 
                                    <Button onPress={this._checknicknm}>Check</Button> 
                            </View>
                            <TextInput
                                placeholder='Your password'
                                value = {this.state.loginid} 
                                placeholder='Your HYU email'
                                onChangeText={loginid => this.setState({ loginid})}/> 

                            <TextInput
                                placeholder='Your password'
                                value = {this.state.password} 
                                secureTextEntry={true} //입력 값 안 보이게
                                onChangeText={password => this.setState({ password })}/>        
                            
                            <Button onPress={this._onPress}>Sign up</Button>

                            <Text style = {{alignSelf:'center'}}>{"\n"}Press here to Login:{" "}   
                                <Text style={{color: 'blue',textDecorationLine: 'underline'}}
                                onPress={() => this.props.navigation.navigate('Login')}>login</Text> 
                            </Text> 
                    </View>
                } 
                </View>   
        );
    }
}
export default withNavigation(SignupScreen);