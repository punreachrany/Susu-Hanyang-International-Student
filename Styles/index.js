/*
작성자 : 추헌남
최초작성일 : 2019/08/13
설명 : 폰트와 관련된 컴포넌트들입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술):
    안받습니다.
*/
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../Styles/style'

class b extends Component{
    render(){
        return(
            this.props.children
        );
    }
}

export default CHANGE_HERE;