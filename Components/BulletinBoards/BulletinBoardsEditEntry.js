/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글, 댓글을 수정하거나 새로운 글을 업로드할 수 있는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음 

추: BulletinBoards.js의 boardid와 entryid를 constructor에서 받기 바람.
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { withNavigation, NavigationEvents } from 'react-navigation'; 
import axios from 'axios'; 
import {server} from '../ServerLib/config';
import ConsoleLog from '../Tools/ConsoleLog';
import LoadingPage from '../Tools/LoadingPage';
import { _handleBulletinBoardsPostSubmit } from '../ServerLib/ServerRequest'

class BulletinBoardsEditEntry extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        profile: '',
        likes: 0,
        date: '',
        ismine: false,
        title: '',
        contents: '',
        pictures: '',

        isUploadDone : false,
        isEditing: false,
        isBoardRoot: true,
        isLoading: false,

        _refresherBulletinBoards: () => {},
        _onSetState: () => {},
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.navigation.getParam('boardid', 0),
            entryid: this.props.navigation.getParam('entryid', 0),
            replyid: this.props.navigation.getParam('entryid', 0),
            profile: this.props.navigation.getParam('profile', ''),
            likes: this.props.navigation.getParam('likes', 0),
            date: this.props.navigation.getParam('date', ''),
            ismine: this.props.navigation.getParam('ismine', false),
            title: this.props.navigation.getParam('title', ''),
            contents: this.props.navigation.getParam('contents', ''),
            pictures: this.props.navigation.getParam('pictures', ''),

            _refresherBulletinBoards : this.props.navigation.getParam('_refresherBulletinBoards', () => {}),
            _onSetStateBoardsContent: this.props.navigation.getParam('_onSetStateBoardsContent', () => {}),
            _onSetStatePostMenu: this.props.navigation.getParam('_onSetStatePostMenu', () => {}),
            isEditing: this.props.navigation.getParam('isEditing', false),
            isBoardRoot: this.props.navigation.getParam('isBoardRoot', true),
            isLoading: false,
        }
    }

    // 데이터 요청 함수
    // 0. 함수로 내려보낼 SetState
    _onSetStateEditEntry = (state) => {
        this.setState({
            ...state
        })
    }

    //1. 게시글 수정 및 등록에 대한 처리 함수
    _onPress = async () => {
        await _handleBulletinBoardsPostSubmit({...this.state}, this._onSetStateEditEntry)
        // 수정 모드가 아니고 새로운 글을 작성했을 때 등록이 완료된 경우
        if(!this.state.isEditing && this.state.isUploadDone){
            await this.state._refresherBulletinBoards();    
            this.props.navigation.goBack();}

        // 수정 모드인데 새로운 글을 작성했을 때 등록이 완료되고,
        if(this.state.isEditing && this.state.isUploadDone)

            // 게시판에서 수정했을 경우
            if(this.state.isBoardRoot)
                await this.state._refresherBulletinBoards();

            // 게시글 내부에서 수정했을 경우
            else {
                await this.state._refresherBulletinBoards();
                await this.state._onSetStatePostMenu({
                    boardid: this.state.boardid,
                    entryid: this.state.entryid,
                    profile: this.state.profile,
                    ismine: this.state.ismine,
                    title: this.state.title,
                    contents: this.state.contents,
                    pictures: this.state.pictures,
                })
                await this.state._onSetStateBoardsContent({
                    boardid: this.state.boardid,
                    entryid: this.state.entryid,
                    profile: this.state.profile,
                    ismine: this.state.ismine,
                    title: this.state.title,
                    contents: this.state.contents,
                    pictures: this.state.pictures,
            });}
            this.props.navigation.goBack();
    }

    // 렌더 함수   
    render() {
        return(
            <View>
                {this.state.isLoading? 
                    <View>
                    <LoadingPage/>
                    </View> :
                    <View>
                        <TextInput
                            placeholder='An awesome Title'
                            value = {this.state.title}
                            onChangeText={title => this.setState({ title })}/>
                        <TextInput
                            placeholder='Cool text for post (Optional)'
                            value = {this.state.contents}
                            onChangeText={contents => this.setState({ contents })}/>
                        <Button onPress={this._onPress}>Submit</Button>
                        <View>
                        </View>
                    </View>
                    }
            </View>
        );
    }
}

BulletinBoardsEditEntry.propTypes = {
    name: PropTypes.string
};

export default withNavigation(BulletinBoardsEditEntry);