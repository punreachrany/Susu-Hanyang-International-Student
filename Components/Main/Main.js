/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 추헌남
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    받지 않습니다. (아직까진)
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import MainCarousel from './MainCarousel';
import MainGuides from './MainGuides';
import ButtonBlock from './ButtonBlock';
import { TitleBold } from '../Theming/Theme'; 
import {_handleGetCurrentUserName} from '../ServerLib/ServerRequest'; 

export default class Main extends Component{
    static navigationOptions = {
        title: 'Main Page',
      };
    
    static defaultProps = {
      currentuserid : 0,
      userid: 0,
      boardid: 0,
      entrieslist: [],

      isLoading: true,
      isError: false,
      isSearching: false,
    }

    constructor(props){
      super(props);
      this.state = {
        boardid : 'board1',
        entrieslist: [],
        name: "user",
        isLoading: true,
      }
    }

    _onSetState = (state) => {
      this.setState({
        ...state
      });
    }

    _onMain = (state) => {
      this.setState({
          ...state
      })
    } 

  //render 되기 전 현재 로그인 한 사용자의 ID를 불러온다.
   async componentWillMount(){
    await _handleGetCurrentUserName({...this.state}, this._onMain);
  }
  

    render(){
        return (
            <ScrollView>
              <View style={styles.container}>
                <TitleBold>Welcome, {this.state.name}!</TitleBold>
                <ButtonBlock/>
                
              </View>
            </ScrollView>
          );
        }
      };
      
  
  const styles = StyleSheet.create({
    container: {

      flexDirection: 'column',
      paddingTop: 15,
      alignItems: "center",
    },
    cards:{
      justifyContent: 'center',
    }
  });

Main.propTypes = {
    
  };
