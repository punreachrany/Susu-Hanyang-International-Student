/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시판 댓글을 표시하는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper'
import PropTypes from 'prop-types';
import PostMenu from '../../Tools/PostMenu';
import {ContentMedium, MetaLight, TitleBold} from '../../Theming/Theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import ConsoleLog from '../../Tools/ConsoleLog';
import BulletinBoardsContext from '../BulletinBoardsContext';
import ViewMoreText from 'react-native-view-more-text';

class BulletinBoardRepliesEntries extends Component{
    static contextType = BulletinBoardsContext;

    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: "",
        profile: "",
        likes: 0,
        date: "2019-01-01",
        ismine: false,
        title: '',
        contents: "",
        pictures: "",

        replyEditMode: false, //PostMenu 컴포넌트에 있는 replyEditMode를 활용
        _refresherReplies: () => {},
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            likes: this.props.likes,
            date: this.props.date,
            ismine: this.props.ismine,
            title: this.props.title,
            contents: this.props.contents,
            pictures: this.props.pictures,

            replyEditMode: this.props.replyEditMode, 
            _refresherReplies : this.props._refresherReplies,
        }       
    }

    // 0. 하위로 보낼 _onSetStateRepliesEntries
    _onSetStateRepliesEntries = (state) => {
        this.setState({
            ...state
        })
    }

    // 렌더 함수 시작
    render(){
        if(this.context.BulletinBoards.currentReplyEditId == this.state.replyid && this.context.BulletinBoards.isReplyEditMode && this.context.BulletinBoards.currentReplyEditContents == '')
            this.context.BulletinBoards._setContextState({currentReplyEditContents : this.state.contents})

        return(
            // BulletinBoardsContent에서 보여지는 각 댓글 칸의 디자인을 구현
            // 댓글의 내용과 PostMenu 컴포넌트로 구성됨
            // 댓글 수정 기능도 포함되어 있음
            <View key={this.state.replyid}>
                {this.context.BulletinBoards.isReplyEditMode && this.context.BulletinBoards.currentReplyEditId == this.state.replyid ?
                        // 댓글 수정모드일 때
                        <View style={styles.RepliesEntry}>
                            <View style={styles.RepliesEntryContents}>
                            <MetaLight>(You're editing here)</MetaLight>
                            <ContentMedium>{this.state.contents}</ContentMedium>
                            </View>
                            <View style={styles.RepliesEntryMeta}>
                                <MetaLight>by {this.state.username}, {this.state.date}, {this.state.likes} Likes</MetaLight>
                            </View>
                            <IconButton
                                icon="clear"
                                size={18}
                                style = {styles.ClearMenu}
                                onPress={() => this.context.BulletinBoards._setContextState({isReplyEditMode : true, currentReplyEditId : 0, currentReplyEditContents : ''})}
                            />
                        </View>:
                        // 댓글 수정모드가 아닐 때
                        <View 
                        style={styles.RepliesEntry}>
                            <View style={styles.RepliesEntryContents}>
                                <ViewMoreText
                                    numberOfLines = {5}
                                    renderViewMore = {(onPress) => {return (<Text style = {{fontSize: 12, color: 'gray',}} onPress={onPress}>Read More...</Text>)}}
                                    renderViewLess = {(onPress) => {return (<Text style = {{fontSize: 12, color: 'gray',}} onPress={onPress}>Hide</Text>)}}>
                                    {this.state.contents}
                                </ViewMoreText>
                            </View>
                            <View style={styles.RepliesEntryMeta}>
                                <MetaLight>by {this.state.username}, {this.state.date}, {this.state.likes} Likes</MetaLight>
                            </View>
                            <PostMenu
                                ismine = {this.state.ismine}
                                style = {styles.PostMenu}
                                boardid = {this.state.boardid}
                                entryid = {this.state.entryid}
                                replyid = {this.state.replyid}
                                userid = {this.state.userid}
                                username = {this.state.username}
                                profile = {this.state.profile}
                                likes = {this.state.likes}
                                date = {this.state.date}
                                ismine = {this.state.ismine}
                                title = {this.state.title}
                                contents = {this.state.contents}
                                pictures = {this.state.pictures}
                                
                                _onSetStateRepliesEntries = {this._onSetStateRepliesEntries}
                                _refresherBulletinBoards = {this.state._refresherBulletinBoards}
                                _refresherReplies = {this.state._refresherReplies}/>
                        </View>}
            </View>
        );
    }
}

BulletinBoardRepliesEntries.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    PostMenu: {
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    },
    ClearMenu: {
        position: 'absolute',
        margin: 0,
        paddingTop: 10,
        paddingRight: 10,
        right: 5,
        top: 5,
    },
    RepliesEntry: {
        paddingRight: 13,
        paddingBottom: 5
    },
    RepliesEntryContents: {
        paddingTop: 5
    },
    RepliesEntryMeta: {
        paddingTop: 1
    }
});

export default BulletinBoardRepliesEntries;