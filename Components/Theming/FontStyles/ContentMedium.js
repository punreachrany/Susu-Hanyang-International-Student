/*
작성자 : 추헌남
최초작성일 : 2019/09/02
설명 : 앱의 테마를 따르는 타이틀 굵게 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    fontSize = 기본값은 14입니다. 크기를 변경합니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class ContentMedium extends Component{
    static defaultProps={
        fontSize: 16,
        color: '#262626',
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
            <View>
                {typeof this.props.numberOfLines === 'undefined'? 
                    //numberOfLines가 정의되지 않았을 떄
                    <Text style={{
                        fontSize: this.state.fontSize,
                        color: this.state.color,
                        ...this.state.style}}>{this.props.children}</Text> :
                    //numberOfLines가 정의되었을 떄
                    <Text style={{
                        fontSize: this.state.fontSize,
                        color: this.state.color,
                        ...this.state.style}}
                        numberOfLines = {this.props.numberOfLines}
                        ellipsizeMode = {this.props.ellipsizeMode}>{this.props.children}</Text>}
            </View>
        );
    }
}

ContentMedium.propTypes = {
    name: PropTypes.string
};

export default ContentMedium;