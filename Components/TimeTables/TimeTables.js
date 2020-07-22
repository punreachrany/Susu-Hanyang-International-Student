/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 시간표 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class TimeTables extends Component{
    static navigationOptions = {
        title: 'TimeTables Page',
      };

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    시간표 (창희의 레이아웃 대로 만들겠음. 그림 그려주시길)
                </Text>
            </View>
        );
    }
}

TimeTables.propTypes = {
  };

export default TimeTables;