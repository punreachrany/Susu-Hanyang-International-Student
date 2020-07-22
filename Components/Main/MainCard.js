/*
작성자 : 추헌남
최초작성일 : 2019/09/18
설명 : 메인 컴포넌트의 카드를 구성하는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    picture - 카드에 표시될 사진
    title - 카드의 제목
    contents - 카드의 내용
*/



import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Surface, Text, ActivityIndicator, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { TitleBold, ContentMedium, MetaLight } from '../Theming/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from "react-native";

class MainCard extends Component{
    static defaultProps= {
        title: '',
        contents: '',
        pictures: '',
        date: '',

        isLoading: false,
        isError: false,
    }

    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            contents: this.props.contents,
            pictures: this.props.pictures,
            date: this.props.date,

            isLoading: this.props.isLoading,
            isError: this.props.isError,

            _onGetBulletinBoardsPost: this.props._onGetBulletinBoardsPost
        }
    }


    render(){
        if(this.state.isError){
            return(
            <View style={styles.Card} >        
                <Surface style={styles.surfaceLoading}>
                    <View style= {{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center',}}>
                        <Icon name="error" size={80} color="#a1a1a1" />
                        <MetaLight fontSize = {15} style={{textAlign:'center'}}>
                            Loading Failed.
                        </MetaLight>
                        <MetaLight fontSize = {15} style={{textAlign:'center'}}>
                            Check Your Internet status and refresh it again.
                        </MetaLight>
                        <Button onPress={this.state._onGetBulletinBoardsPost}>REFRESH</Button>
                    </View>
                </Surface>
            </View>
            )
        }

        else if(this.state.isLoading){
            return(
            <View style={styles.Card} >        
                <Surface style={styles.surfaceLoading}>
                    <View style= {{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center',}}>
                        <ActivityIndicator size={40} style={{paddingBottom: 20,}}/>
                        <MetaLight fontSize = {15} style={{textAlign:'center'}}>
                            Loading Cards... 
                        </MetaLight>
                    </View>
                </Surface>
            </View>
            )
        }

        else return(
            <View style={styles.Card} >      
                <Surface style={styles.surface}>
                    <ImageBackground 
                        source={require('../../Mockup_Datas/Images/img01.jpg')} 
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            borderRadius: 10,
                            overflow: 'hidden',
                            height: '100%'}}>
                        <View style={styles.insidesurface}>
                            <Text style={{fontWeight:'bold', fontSize: 10, color:'blue', letterSpacing: 1, paddingBottom: 5,}}>EVENT</Text>
                            <View style= {{paddingLeft: 3, paddingBottom: 5,}}>
                                <TitleBold
                                    fontSize = {20}
                                    numberOfLines = {1}
                                    ellipsizeMode = {'tail'}>{this.state.title}</TitleBold>
                            </View> 
                        </View>
                    </ImageBackground>
                </Surface>
            </View>
        );
    }
}

/*
<Text>{this.state.pictures}</Text>

*/

MainCard.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    Card: {
        display: 'flex',
        maxHeight: 500,
        height: '100%',
        width: '95%',
        justifyContent: 'center',
        paddingBottom: 10,
      },
      surface: {
          height: 220,
          width: '100%',
          borderWidth: 0.5,
          borderColor: '#c4c4c4',
          borderRadius: 20,
          elevation: 5,
      },
      surfaceLoading: {
        height: 220,
        width: '100%',
        borderWidth: 0.5,
        borderStyle: "dashed",
        borderColor: '#c4c4c4',
        borderRadius: 20,
        elevation: 5,
      },
        insidesurface: {
            paddingTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
            width: '100%',
            height: '35%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
  });
export default MainCard;