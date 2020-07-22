/*
작성자 : 김창희
최초작성일 : 2019/11/18
설명 : 로그인 여부에 따라 Main, Login, Notverified으로 갈지 결정하는 컴포넌트입니다. 
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { withNavigation, NavigationEvents, navigation } from 'react-navigation';
import ConsoleLog from '../Tools/ConsoleLog';
import LoadingPage from '../Tools/LoadingPage';
import { _handleAuthCheckVerified } from '../ServerLib/ServerRequest'; 
import {auth, deviceStorage} from "../ServerLib/config";

export default class AuthScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false, 
            isverified: false, 
        }
    } 

    _onAuth = (state) => {
        this.setState({
            ...state
        })
    }     
    async componentWillMount() {
        const { navigation } = this.props; 
       
        //await auth.logout()     
        if (await auth.checkauth()) {  
                navigation.navigate("Main");  
            
        } else {
            navigation.navigate("Login"); 
        }      
    }
           
    // 렌더 함수   
    render() {
        return(
            <View>
                <LoadingPage/>
            </View>
        );
    }
}