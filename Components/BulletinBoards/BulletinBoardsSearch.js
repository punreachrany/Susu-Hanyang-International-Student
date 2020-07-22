/*
작성자 : 추헌남
최초작성일 : 2019/09/20
설명 : 게시판 검색 기능입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { TextInput, Searchbar, IconButton, Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingPage from '../Tools/LoadingPage';
import { ContentMedium, MetaLight, TitleBold } from '../Theming/Theme'
import ErrorPage from '../Tools/ErrorPage';
import EmptyPage from '../Tools/EmptyPage'
import BulletinBoardsEntries from './BulletinBoardsEntries'

class BulletinBoardsSearch extends Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: navigation.state.params ? navigation.state.params.headerTitle : null
      });
    
    static defaultProps = {
        isLoading: true,
        isSearching: false,
        isSearched: false,
        isLoadingMore: false,
        isError: false,
        isDev: false,
        query: '',

        boardid: 0,
        currentuserid: 0,
        boardname: '',
        entrieslist: [],
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            isSearching: false,
            isSearched: false,
            query: '',

            boardid: this.props.navigation.getParam('boardid'),
            currentuserid: this.props.navigation.getParam('currentuserid'),
            boardname: this.props.navigation.getParam('boardname'),
            entrieslist: [],
        }
    }

    componentDidMount() {
    // Set route params
        this.props.navigation.setParams({
            headerTitle: (
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <Searchbar
                        style={{width: '88%'}}
                        placeholder="Title, Contents, Nickname..."
                        onChangeText={(query) => { 
                            // 입력값이 없을 때 기본값 ''로 설정
                            this.setState({ query }); }}
                        onSubmitEditing={this._handleSearch}
                        autoFocus={true}/>
                    <IconButton
                        icon="search"
                        style={{width: '5%', alignSelf: 'flex-end'}}
                        size={20}
                        onPress={this._handleSearch}/>
                </View>
            )
        })
    }

    // 데이터 요청 함수
    // 0. 함수로 내려보낼 SetState
    _onSetStateBoardsSearch = (state) => {
        this.setState({
            ...state
        })
    }

    // 데이터 요청 함수
    // 0. 함수로 내려보낼 SetState (검색페이지에서 사용용으로 Import된 함수)
    _onSetStateBulletinBoards = (state) => {
        this.setState({
            ...state
        })
    }

    // 1. BulletinBoardsEntries, BulletinBoardsEditEntry로 내려보낼 _refresher (검색페이지에서 사용용으로 Import된 함수)
    _refresherBulletinBoards = async () => {
        await _onGetBulletinBoardsPost({...this.state}, this._onSetStateBulletinBoards, true, this.state.query);
    }

    // 2. 검색 처리 함수
    _handleSearch = () => {
        // 검색문의 길이가 0일 때
        if(this.state.query.length === 0){
            Alert.alert(
                '', 'Please enter more than 1 character to search!',
                [{text: 'OK'}]
            );
            return null;}
            /*Alert.alert(
                'Search Keyword should be at least more than 1 character !',
                [{text: 'OK'}]
            );*/
        _onGetBulletinBoardsPost({...this.state}, this._onSetStateBoardsSearch, true, this.state.query)
    }

    // Flatlist RenderItem 함수
        _renderItem = ({ item }) => {
            if(item.lastElement){
                if(item.okToShow)
                    return(
                        <View style={{paddingTop: 10, paddingBottom: 10}}>
                            <Button onPress={() => _onGetBulletinBoardsPost({...this.state}, this._onSetStateBoardsSearch, false, this.state.query)}>Load More...</Button>
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
                        userid = {item.userid}
                        currentuserid = {this.state.currentuserid}
                        entryid = {item.entryid}
                        username = {item.username}
                        profile = {item.profile}
                        likes = {item.likes}
                        date = {item.date}
                        ismine = {item.ismine}
                        title = {item.title}
                        contents = {item.contents}
                        
                        _refresherBulletinBoards = {this._refresherBulletinBoards}/>
                )
        };
    
    // Flatlist keyExtractor 함수
    _keyExtractor = (item, index) => item.entryid.toString();
    
    // 컴포넌트가 모두 로드되는 시간 동안 잠시 대기 처리
    waitAndRun = setTimeout(() => this.setState({isLoading: false}), 1000)

    // 렌더 함수
    render(){
        // 검색 중일 때
        if(this.state.isSearching)
            return(<LoadingPage What='Search Result' />)
            
        // 검색 페이지가 로딩 중일 때
        if(this.state.isLoading)
            return(<LoadingPage What='Search Page' />)

        // 검색 오류 발생 시
        if(this.state.isError)
            return(<ErrorPage />)

        // 검색 결과가 없을 시
        if(this.state.isEmpty)
            return(<EmptyPage DeleteDescription= {true} What='Search results' Message='Try searching with different keywords!' />)
        
        // 검색 페이지 출력
        if(!this.state.isSearched)
            return(
                <View style={styles.SearchView}>
                <View style={styles.Header}>
                    <Icon name="search" size={130} color="#c9c9c9" />
                </View>
                <View style={styles.Body}>
                    <MetaLight style={{fontSize:18}}>Search Everything in this thread.</MetaLight>
                </View>
            </View>
            )
        
        // 검색 결과 출력
        else return(
            <View>
            <View style={{width: '100%', height: '100%'}}>
                <FlatList 
                        data = {this.state.entrieslist}
                        extraData = {this.state}
                        renderItem = {this._renderItem}
                        keyExtractor = {this._keyExtractor}
                        onRefresh = {() => _onGetBulletinBoardsPost({...this.state}, this._onSetStateBoardsSearch, true, this.state.query)}
                        refreshing = {this.state.isLoading}
                />
            </View>
        </View>
        )
    }
}

BulletinBoardsSearch.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    SearchView: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    Body: {
        flex: 0.5,
    }
})

export default withNavigation(BulletinBoardsSearch);