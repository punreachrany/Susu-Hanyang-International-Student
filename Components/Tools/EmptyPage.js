/*
작성자 : 추헌남
최초작성일 : 2019/09/17
설명 : 비어있는 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    없음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ContentMedium, TitleBold, MetaLight } from '../Theming/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';

class ErrorPage extends Component{
    static defaultProps = {
        What : '',
        Message : '',
        DeleteDescription: false,
    }

    constructor(props){
        super(props);
        this.state = {
            What : this.props.What,
            Message : this.props.Message,
            DeleteDescription : this.props.DeleteDescription,
        }
    }

    render(){
        return(
            <View style={styles.ErrorView}>
                <View style={styles.Header}>
                    <Icon name="mood" size={110} color="#a1a1a1" />
                    <TitleBold style={{fontSize:30}}>{this.state.What === ''? 'Nothing ' : 'No ' + this.state.What + ' '}here.</TitleBold>
                </View>
                <View style={styles.Body}>
                    {this.state.DeleteDescription? 
                        <View></View> :
                        <View>
                            <ContentMedium style={{fontSize:20}}>Be the first person to leave</ContentMedium>
                            <ContentMedium style={{fontSize:20, textAlign: 'center'}}>{this.state.what === ''? '': this.state.What + ' '}here!</ContentMedium>
                        </View>
                    }
                    <ContentMedium style={{fontSize:20, textAlign: 'center'}}>{this.state.Message}</ContentMedium>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ErrorView: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 40,
    },
    Header: {
        justifyContent: 'flex-end',
        paddingBottom: 15,
        alignItems: 'center'
    },
    Body: {
    }
})

export default ErrorPage;