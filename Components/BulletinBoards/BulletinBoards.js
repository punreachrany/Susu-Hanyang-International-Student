/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 자유게시판 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert, Image } from 'react-native';
import { FAB, ActivityIndicator, Colors, Button, IconButton } from 'react-native-paper'
import PropTypes from 'prop-types';
import BulletinBoardsEntries from './BulletinBoardsEntries';
import { BulletinBoardsEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'
import { navigation, withNavigation } from 'react-navigation'; 
import axios from 'axios'; 
import {server} from '../ServerLib/config';
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'
import ErrorPage from '../Tools/ErrorPage';
import LoadingPage from '../Tools/LoadingPage'
import EmptyPage from '../Tools/EmptyPage'
import { stringify } from 'querystring';
import ConsoleLog from '../Tools/ConsoleLog';
import { _onGetBulletinBoardsPost } from '../ServerLib/ServerRequest'

axios.defaults.timeout = 5000;

class BulletinBoards extends Component{
    // 네비게이션 옵션
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.boardname}`,
        headerRight: navigation.state.params ? navigation.state.params.headerRight : null,
      });
    
    static defaultProp = {
        boardid: 0,
        boardname: '',
        entrieslist: [],
        isLoading: false,
        isLoadingMore: false,
        isError: false,
        isDev: false,
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.navigation.getParam('boardid'),
            boardname: this.props.navigation.getParam('boardname'),
            entrieslist: [],
            isLoading: false,
            isLoadingMore: false,
            isError: false,
            isDev: this.props.navigation.getParam('isDev'), 
        }
    }
    
    // 데이터 요청 함수
    // 0. 함수로 내려보낼 SetState
    _onSetStateBulletinBoards = (state) => {
        this.setState({
            ...state
        })
    }

    // 1. BulletinBoardsEntries, BulletinBoardsEditEntry로 내려보낼 _refresher
    _refresherBulletinBoards = async () => {
        await _onGetBulletinBoardsPost({...this.state}, this._onSetStateBulletinBoards, true);
    }

    //컴포넌트 마운트 시
    async componentDidMount(){
        // Set route params
        this.props.navigation.setParams({
            headerRight: (
                <IconButton
                    icon = 'search'
                    size={30}
                    onPress={() => {this.props.navigation.navigate('Search', {
                        boardid: this.state.boardid,
                        boardname: this.state.boardname,
                    });}} />
            )
        })

        // 일반 사용자 모드일 때 게시글 목록 불러오기
        if(!this.state.isDev)
            await _onGetBulletinBoardsPost({...this.state}, this._onSetStateBulletinBoards, true);
    }

    // Flatlist RenderItem 함수
    _renderItem = ({ item }) => {
        if(item.lastElement){
            if(item.okToShow)
                return(
                    <View style={{paddingTop: 10, paddingBottom: 10}}>
                        {this.state.isLoadingMore?
                                <ActivityIndicator animating= 'true' size = {30} /> :
                            <Button onPress={() => _onGetBulletinBoardsPost({...this.state}, this._onSetStateBulletinBoards)}>Load More...</Button>}
                    </View>
                )
            else
                return(<View></View>)
        }
        else
            return(
                <BulletinBoardsEntries
                    key = {item.entryid}
                    boardid = {item.boardid}
                    entryid = {item.entryid}
                    username = {item.username}
                    profile = {item.profile}
                    likes = {item.likes}
                    date = {item.date}
                    ismine = {item.ismine}
                    title = {item.title}
                    contents = {item.contents}

                    _refresherBulletinBoards = {this._refresherBulletinBoards}
                    isDev = {this.state.isDev}/>
            )
    };

    // Flatlist keyExtractor 함수
    _keyExtractor = (item, index) => item.entryid.toString();

    
    // 렌더 함수
    render(){ 
        return(
            // 게시판의 게시글들을 목록으로 보여주는 함수임.
            <View>
            {
                this.state.isDev ? 
                // 개발자 모드일 때
                <View>
                    <FlatList 
                        data = {BulletinBoardsEntries_Mock}
                        renderItem = {this._renderItem}
                        keyExtractor = {this._keyExtractor}
                        onRefresh = {() => {}}
                        refreshing = {this.state.isLoading}/> 
                    <FAB
                        style={styles.Floating}
                        icon='add'
                        onPress={() => this.props.navigation.navigate('EntryEdit', { 
                            boardid: this.state.boardid,
                            profile: this.state.profile})} />   
                </View>:
                this.state.isError ?
                // 에러발생 했을 때
                    <View>
                        <ErrorPage/>
                        <Button onPress={() => _onGetBulletinBoardsPost({...this.state}, this._onSetStateBulletinBoards, true)}>Refresh</Button> 
                    </View> :
                this.state.isLoading?
                // 로딩중일 때
                    <LoadingPage What='Threads'/>:
                this.state.entrieslist.length === 1?
                // 게시글이 없을 때
                    <View style={{width:'100%', height:'100%'}}>
                        <EmptyPage What='Threads' /> 
                        <FAB
                        style={styles.Floating}
                        icon='add'
                        onPress={() => this.props.navigation.navigate('EntryEdit', { 
                            boardid: this.state.boardid,
                            profile: this.state.profile,
                            
                            _refresherBulletinBoards: this._refresherBulletinBoards})} />
                    </View>:
                // 게시판 목록을 보여줄 때, FlatList와 FAB 컴포넌트로 구성되어 있음
                <View>
                    <View style={{width: '100%', height: '100%'}}>
                        <FlatList 
                                data = {this.state.entrieslist}
                                extraData = {this.state}
                                renderItem = {this._renderItem}
                                keyExtractor = {this._keyExtractor}
                                onRefresh = {() => _onGetBulletinBoardsPost({...this.state}, this._onSetStateBulletinBoards, true)}
                                refreshing = {this.state.isLoading}
                        />
                        <FAB
                            style={styles.Floating}
                            icon='add'
                            onPress={() => this.props.navigation.navigate('EntryEdit', { 
                                boardid: this.state.boardid,
                                profile: this.state.profile,
                                
                                _refresherBulletinBoards: this._refresherBulletinBoards})} />        
                    </View>
                </View>

            }</View>)
    }
}


BulletinBoards.propTypes = {
  };

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%'
    },
    BulletinBoards: {
        flexDirection: 'column',
    },
    Floating: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    LoadingScreen: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    LoadingScreen01: {
        flex: 5,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    LoadingScreen02: {
        flex: 5,
        justifyContent: 'flex-start',
        textAlign: 'center'
    }
});

export default withNavigation(BulletinBoards);
