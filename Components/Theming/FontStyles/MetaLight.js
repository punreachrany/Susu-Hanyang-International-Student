/*
작성자 : 추헌남
최초작성일 : 2019/09/02
설명 : 테마에 맞게 메타 정보 (유저명, 작성일, 추천수 같은 것들)를 
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    fontSize - 글자 크기를 정합니다. 기본값은 12
    color - 글자 색을 정합니다. 기본값은 회색
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class MetaLight extends Component{
    static defaultProps={
        fontSize: 12,
        color: 'gray',
        style: null
    }

    constructor(props){
        super(props);
        this.state={
            fontSize: this.props.fontSize,
            color: this.props.color,
            style: this.props.style
        }
    }

    render(){
        return(
            <Text style={{
                fontSize: this.state.fontSize,
                color: this.state.color,
                ...this.state.style}}>{this.props.children}</Text>
        );
    }
}

MetaLight.propTypes = {
    name: PropTypes.string
};

export default MetaLight;