/*
작성자 : 추헌남
최초작성일 : 2019/08/26
설명 : 각 게시글에 대한 상세 메뉴입니다. ismine prop을 체크해 내 게시글인 경우 수정, 삭제하는 메뉴를 추가합니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, Menu, Divider, IconButton, Colors } from 'react-native-paper';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'; 
import axios from 'axios';
import {server} from '../ServerLib/config';
import BulletinBoardsContext from '../BulletinBoards/BulletinBoardsContext'; 
import ConsoleLog from './ConsoleLog';
import { _handleBulletinBoardsPostDelete, _handleDeleteReplies, _handleAddReport, _handleLikeIncrease } from '../ServerLib/ServerRequest'

class PostMenu extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        //currentuserid: 0,
        //username: '',
        profile: '',
        likes: 0,
        date: '2019-01-01',
        ismine: false,
        title: '',
        contents: '',
        pictures: '',

        admin: false,
        visible: false,
        style: {},

        isBoardRoot: true,
        isDeleted: false,

        _refresherBulletinBoards: () => {},
        _refresherReplies: () => {},
        _onSetStateBoardsContent: () => {},
        _onSetStateBoardsEntries : () => {},
        _onSetStateRepliesEntries: () => {},
    }
    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            //currentuserid: this.props.currentuserid,
            //username: this.props.username,
            profile: this.props.profile,
            likes: this.props.likes,
            date: this.props.date,
            ismine: this.props.ismine,
            title: this.props.title,
            contents: this.props.contents,
            pictures: this.props.pictures,

            admin: this.props.admin,
            visible: false,
            style: this.props.style,

            isBoardRoot: this.props.isBoardRoot,
            isDeleted: false,

            _refresherBulletinBoards: this.props._refresherBulletinBoards,
            _refresherReplies: this.props._refresherReplies,
            _onSetStateBoardsContent: this.props._onSetStateBoardsContent,
            _onSetStateBoardsEntries : this.props._onSetStateBoardsEntries,
            _onSetStateRepliesEntries : this.props._onSetStateRepliesEntries
        }
    }

    static contextType = BulletinBoardsContext;

    // 메뉴 버튼을 토글하는 함수들
    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false }); 

    // 데이터 요청 함수
    // 0. 내려보내기 위한 _onSetState 함수
    _onSetStatePostMenu = (state) => {
        this.setState(state)
    }

    // 1. 게시글 제거 함수
    _handleDeletePost = async () => {
        await _handleBulletinBoardsPostDelete({...this.state}, this._onSetStatePostMenu)
        if(this.state.isDeleted){
            // 게시글이 게시판 목록에서 출력중일 때
            if(this.state.isBoardRoot)
                this.state._refresherBulletinBoards();           
                                
            // 게시글이 Contents 내부에서 출력중일 때
            else{
                await this.state._refresherBulletinBoards();
                this.props.navigation.goBack();}
        }
    }

    // 2. 댓글 제거 함수
    _onDeleteReplies = async () => {       
        await _handleDeleteReplies({
            boardid : this.state.boardid,
            entryid : this.state.entryid,
            replyid : this.state.replyid,
        }, this.state._onSetStateBoardsContent)
        this.state._refresherReplies()
    }
    
    // 렌더 함수 시작
    render(){ 
        //내 글이거나 관리자 모드일 때
        if(this.state.ismine || this.state.admin){
            return (
                <View style={this.state.style}>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                    <IconButton
                        icon='more-vert'
                        size={20}
                        onPress={this._openMenu}
                    />
                    }
                >
                    <Menu.Item onPress={() => {
                        this._closeMenu()
                        //게시글 삭제
                        { this.state.replyid == 0?
                            //게시글일 때
                            this._handleDeletePost() :
                            //댓글일 때
                            this._onDeleteReplies()}}} title="Delete" />
        
                    <Menu.Item onPress={() => {
                        //글 수정
                        this._closeMenu();
                        // 게시글 수정, 댓글 수정 기능을 서로 분리 (예정) 
                        {   this.state.replyid == 0 ?
                            // 게시글 수정
                            this.props.navigation.navigate('EntryEdit', {
                                boardid: this.state.boardid,
                                entryid: this.state.entryid,
                                replyid: this.state.replyid,
                                userid: this.state.userid,
                                currentuserid: this.state.currentuserid,
                                username: this.state.username,
                                profile: this.state.profile,
                                likes: this.state.likes,
                                date: this.state.date,
                                ismine: this.state.ismine,
                                title: this.state.title,
                                contents: this.state.contents,
                                pictures: this.state.pictures,
                                
                                //isBoardRoot는 해당 게시글이 게시판 목록에 있는지, 글 보기 상태에 있는지 알려줌
                                isBoardRoot: this.state.isBoardRoot,
                                isEditing: true,
                                _refresherBulletinBoards: this.state._refresherBulletinBoards,
                                _refresherReplies: this.state._refresherReplies,
                                _onSetStateBoardsContent: this.state._onSetStateBoardsContent,
                                _onSetStatePostMenu: this._onSetStatePostMenu,}, 500) :
                            // 댓글 수정
                                this.context.BulletinBoards._setContextState({isReplyEditMode : true, currentReplyEditId : this.state.replyid})
                            }
                        }
                    } title="Modify" />

                    <Menu.Item onPress={ () =>{
                        //신고
                        this._closeMenu();
                        _handleAddReport({...this.state}, this._onSetStatePostMenu);
                    }} title="Report" />

                    <Divider />

                    <Menu.Item onPress={ async () =>{
                        // 좋아요
                        this._closeMenu();
                        await _handleLikeIncrease({...this.state}, this._onSetStatePostMenu);
                        if(this.state.replyid == 0){
                            // 게시글이 게시판 목록에서 출력중일 때
                            if(this.state.isBoardRoot)
                                this.state._onSetStateBoardsEntries({
                                    boardid: this.state.boardid,
                                    entryid: this.state.entryid,
                                    //currentuserid: this.state.currentuserid,
                                    profile: this.state.profile,
                                    ismine: this.state.ismine,
                                    title: this.state.title,
                                    contents: this.state.contents,
                                    pictures: this.state.pictures,
                                    likes: this.state.likes
                                })      
                                                
                            // 게시글이 Contents 내부에서 출력중일 때
                            else{
                                this.state._onSetStateBoardsContent({
                                    boardid: this.state.boardid,
                                    entryid: this.state.entryid,
                                    //currentuserid: this.state.currentuserid,
                                    profile: this.state.profile,
                                    ismine: this.state.ismine,
                                    title: this.state.title,
                                    contents: this.state.contents,
                                    pictures: this.state.pictures,
                                    likes: this.state.likes
                                })
                                await this.state._refresherBulletinBoards();
                            }
                        }
                        else{
                            this.state._onSetStateRepliesEntries(
                                {
                                    boardid: this.state.boardid,
                                    entryid: this.state.entryid,
                                    //currentuserid: this.state.currentuserid,
                                    profile: this.state.profile,
                                    ismine: this.state.ismine,
                                    title: this.state.title,
                                    contents: this.state.contents,
                                    pictures: this.state.pictures,
                                    likes: this.state.likes
                                }
                            )
                        }
                    }} title="Like!" />
                </Menu>
            </View>);
        }
        else{ 
            //내 글이 아닐 때 (아직 작업 안함)
            return (
                <View style={this.state.style}>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                    <IconButton
                        icon="more-vert"
                        size={20}
                        onPress={this._openMenu}
                    />
                    }
                >
                    <Menu.Item onPress={() => this._handleAddReport({...this.state}, this._onSetStatePostMenu)} title="Report" />
                    <Divider />
                    <Menu.Item onPress={() => _handleLikeIncrease({...this.state}, this._onSetStatePostMenu)} title="Like this!" />
                </Menu>
            </View>);
        }
    }
}


PostMenu.propTypes = {
};

export default withNavigation(PostMenu);