/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 내용 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Text, View, Dimensions, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation, Header } from 'react-navigation';
import BulletinBoardsReplies from './Replies/BulletinBoardsReplies';
import PostMenu from '../Tools/PostMenu';
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'
import BulletinBoardsRepliesInput from './Replies/BulletinBoardsRepliesInput'
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';


class BulletinBoardsContent extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        userid: 0,
        currentuserid: 0,
        username: "",
        profile: "",
        likes: 0,
        date: "2019-01-01",
        ismine: false,
        title: "",
        contents: "",
        pictures: "",

        keyboardHeight:0,
        normalHeight: 0,
        shortHeight: 0,
        isDev: false,
        _refresherBulletinBoards: () => {},
        
        replyEditMode: false,
    }
    
    constructor(props){
        super(props)
        this.state = {
            boardid: this.props.navigation.getParam('boardid'),
            entryid: this.props.navigation.getParam('entryid'),
            userid: this.props.navigation.getParam('userid'),
            currentuserid: this.props.navigation.getParam('currentuserid'),
            username: this.props.navigation.getParam('username'),
            profile: this.props.navigation.getParam('profile'),
            likes: this.props.navigation.getParam('likes'),
            date: this.props.navigation.getParam('date'),
            ismine: this.props.navigation.getParam('ismine'),
            title: this.props.navigation.getParam('title'),
            contents: this.props.navigation.getParam('contents'),
            pictures: this.props.navigation.getParam('pictures'),

            keyboardHeight: 0,
            normalHeight: 0,
            shortHeight: 0,
            isDev: this.props.navigation.getParam('isDev'),
            _refresherBulletinBoards: this.props.navigation.getParam('_refresherBulletinBoards'),
        }
    }

    //데이터 요청 시 함수
    //0. 내려보낼 setState 함수
    _onSetStateBoardsContent = (state) => {
        this.setState(state)
    }

    // 렌더 함수
    render(){
        return(
            // 게시글의 상세 내용과 댓글들을 보여주는 컴포넌트. 각 내용의 컴포넌트, BulletinBoardsReplies 컴포넌트, KeyboardAvoidingView 속 댓글 입력 컴포넌트로 구성됨
            <View style={styles.Container}>
                <ScrollView>
                    <View style={styles.EntryTitle}>
                        <TitleBold fontSize={25}>{this.state.title}</TitleBold>
                        <MetaLight>by {this.state.username}, {this.state.date}, {this.state.likes} Likes</MetaLight>
                    </View>
                    <View style={styles.EntryContent}>
                        <ContentMedium>{this.state.contents}</ContentMedium>                        
                    </View>
                    <Divider />
                        <PostMenu
                            boardid = {this.state.boardid}
                            entryid = {this.state.entryid}
                            currentuserid = {this.state.currentuserid}
                            ismine = {this.state.ismine}
                            title = {this.state.title}
                            contents = {this.state.contents}
                            pictures = {this.state.pictures}
                            style = {styles.PostMenu}

                            isBoardRoot = {false}
                            _refresherBulletinBoards = {this.state._refresherBulletinBoards}
                            _onSetStateBoardsContent = {this._onSetStateBoardsContent}
                            />
                    <View style={styles.EntryReplies}>
                        <BulletinBoardsReplies
                            boardid = {this.state.boardid}
                            entryid = {this.state.entryid}
                            currentuserid = {this.state.currentuserid}
                            userid = {this.state.userid}
                            username = {this.state.username}
                            profile = {this.state.profile}
                            
                            isDev = {this.state.isDev}/>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior='padding' 
                    style={styles.container}
                    keyboardVerticalOffset = {Header.HEIGHT + 40}>
                    <BulletinBoardsRepliesInput
                        boardid = {this.state.boardid}
                        entryid = {this.state.entryid}
                        userid = {this.state.userid}
                        currentuserid = {this.state.currentuserid}
                        username = {this.state.username}
                        profile = {this.state.profile}
                        
                        _onGetComments = {this._onGetComments}/>
                </KeyboardAvoidingView>
            </View>
        );
    }
}


BulletinBoardsContent.propTypes = {
    
  };


  const styles = StyleSheet.create({
    PostMenu:{
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    },
    Container:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        padding: 10
    },
    BottomInput: {
        position: 'absolute',
        margin: 0,
        bottom: 0,
    },
    EntryTitle: {
        paddingBottom: 10,
    },
    EntryContent: {
        paddingBottom: 15,
    },
    EntryReplies: {
        paddingTop: 10,
    }
});

export default withNavigation(BulletinBoardsContent);