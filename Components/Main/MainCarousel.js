/*
작성자 : 추헌남
최초작성일 : 2019/09/26
설명 : 
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/



import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import MainCard from './MainCard';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { _onGetBulletinBoardsPost } from '../ServerLib/ServerRequest'
import LoadingPage from '../Tools/LoadingPage';
import ErrorPage from '../Tools/ErrorPage';
import { Button, Surface, Text } from 'react-native-paper';
import { Dimensions } from "react-native";
import { TitleBold, ContentMedium, MetaLight } from '../Theming/Theme';

class MainCarousel extends Component{
  static defaultProps = {
    currentuserid : 0,
    userid: 0,
    boardid: 0,
    entrieslist: [{}, {}, {},],
    activeSlide: 0,

    isLoading: true,
    isError: false,
    isSearching: false,
  }

  constructor(props){
    super(props);
    this.state = {
      currentuserid : "5d5373177443381df03f3040",
      userid: '5d5373177443381df03f3040',
      boardid : 'mainboards',
      entrieslist: [{}, {}, {},],
      activeSlide: 0,

      isLoading: true,
      isError: false,
    }
  }
  
  //자식 컴포넌트에게 내려보낼 onSetState 컴포넌트
  _onSetStateCarousel = (state) => {
    this.setState({
      ...state
    })
  }

  componentDidMount = async () => {
    await _onGetBulletinBoardsPost({...this.state}, this._onSetStateCarousel, false, '', '', true);
  }

  _renderItem = ({ item }) => { 
    return(
      <MainCard
        title = {item.title}
        contents = {item.contents}
        pictures = {item.pictures}
        date = {item.date} 
        isLoading = {this.state.isLoading}
        isError = {this.state.isError}
        _onGetBulletinBoardsPost = {_onGetBulletinBoardsPost} />
    )
};
  get pagination () {
    const screenWidth = Dimensions.get('window').width;
    const { entrieslist, activeSlide } = this.state;
    return (
          <Pagination
            dotsLength={entrieslist.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(255,255,255,1)' }}
            dotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                marginHorizontal: 4,
                backgroundColor: '#4f4f4f'
            }}
            inactiveDotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                marginHorizontal: 4,
                backgroundColor: '#bdbdbd'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}

          />
    );
  }
  
  _keyExtractor = (item, index) => item.entryid.toString();

    render(){
      const screenWidth = Dimensions.get('window').width;
          return(
            <View style={styles.container}>
              <Carousel
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                data={this.state.entrieslist}
                renderItem={this._renderItem}
                extraData = {this.state}
                sliderWidth={screenWidth}
                itemWidth={320}
                loop={true}
              />
              { this.pagination }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 15,
    },
    cards:{
      justifyContent: 'center',
    },
    Card: {
      display: 'flex',
      maxHeight: 500,
      height: '100%',
      width: 320,
      justifyContent : 'center',
      alignContent: 'center',
      paddingLeft: 10,
    },
    surface: {
        height: 180,
        width: 300,
        borderWidth: 0.5,
        borderColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 8,
    },
  });

export default MainCarousel;