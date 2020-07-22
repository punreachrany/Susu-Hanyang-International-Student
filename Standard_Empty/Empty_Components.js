/*
작성자 : XXX
최초작성일 : 201X/XX/XX
설명 : XXX
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class CHANGE_HERE extends Component{
    render(){
        return(
            <View>RETURN_SOMETHING_HERE</View>
        );
    }
}

CHANGE_HERE.propTypes = {
    name: PropTypes.string
  };

export default CHANGE_HERE;