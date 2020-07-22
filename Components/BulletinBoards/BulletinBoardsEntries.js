/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 목록 엔트리 컴포넌트입니다. (게시판 목록의 한 칸 한 칸들)
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Dimensions, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions, withNavigation } from 'react-navigation';
import {TouchableRipple} from 'react-native-paper'
import PostMenu from '../Tools/PostMenu';
import ConsoleLog from '../Tools/ConsoleLog';


class BulletinBoardsEntries extends Component{
    static defaultProps = {
        navigation: null,
        boardid: 0,
        entryid: 0,
        userid: 0,
        username: '',
        profile: '',
        likes: 0,
        date: '2019-01-01',
        ismine: false,
        title: '',
        contents: '',
        
        _refresherBulletinBoards: () => {}
    }

    constructor(props){
        super(props)
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid, 
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            likes: this.props.likes,
            date: this.props.date,
            ismine: this.props.ismine,
            title: this.props.title,
            contents: this.props.contents,
            isDev: this.props.isDev,

            _refresherBulletinBoards: this.props._refresherBulletinBoards,
        }
    }

    _onSetStateBoardsEntries = (state) => {
        console.log(state)
        this.setState({
            ...state
        })
    }

    // 렌더 함수
    render(){        
        return(
            <TouchableRipple
                key={this.state.entryid}
                onPress={() => this.props.navigation.navigate('Post', { 
                    boardid: this.state.boardid,
                    entryid: this.state.entryid,
                    userid: this.state.userid,
                    username: this.state.username,
                    profile: this.state.profile,
                    likes: this.state.likes,
                    date: this.state.date,
                    ismine: this.state.ismine,
                    title: this.state.title,
                    contents: this.state.contents,
                    pictures: this.state.pictures,
                    isDev: this.state.isDev,
                    
                    _refresherBulletinBoards: this.state._refresherBulletinBoards})}>
                <View style={styles.BulletinBoardsEntries}>
                    <Text 
                        style={styles.BulletinBoardsEntriesTitle}
                        numberOfLines= {3}
                        ellipsizeMode= {'tail'}>{this.state.title}</Text> 
                    <Text 
                        style={styles.BulletinBoardsEntriesContents}
                        numberOfLines = {5}
                        ellipsizeMode = 'tail'>{this.state.contents}</Text>
                    <Text style={styles.BulletinBoardsEntriesMetadata}> written by {this.state.username} at {this.state.date}, {this.state.likes} Likes</Text>
                    <PostMenu 
                        ismine = {this.state.ismine}
                        boardid = {this.state.boardid}
                        entryid = {this.state.entryid}
                        title = {this.state.title}
                        contents = {this.state.contents}
                        style = {styles.PostMenu}
                        
                        isBoardRoot = {true}
                        _onSetStateBoardsEntries = {this._onSetStateBoardsEntries}
                        _refresherBulletinBoards= {this.state._refresherBulletinBoards}/>
                </View>
            </TouchableRipple>
        );
    }
}


navigateToSettings = () => {

  }
BulletinBoardsEntries.propTypes = {
    
  };

const styles = StyleSheet.create({
    BulletinBoardsEntries: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 15,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#d4d4d4',
    },
    BulletinBoardsEntriesTitle:{
        display: 'flex',
        width: '80%',
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    BulletinBoardsEntriesContents:{
        fontSize: 14,
        width: '95%',
        paddingLeft: 2,
        paddingBottom: 10
    },
    BulletinBoardsEntriesMetadata:{
        fontSize: 12,
        color: 'gray',
        textAlign: "right",
        paddingBottom: 5,
    },
    PostMenu:{
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    }
});

export default withNavigation(BulletinBoardsEntries);