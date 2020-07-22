/*
작성자 : XXX
최초작성일 : 201X/XX/XX
설명 : XXX
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Surface, IconButton, Colors } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { TitleBold, ContentMedium, MetaLight } from '../Theming/Theme';

class MainGuides extends Component{
    render(){
        return(
            <View style={styles.containerParent}>
                <Surface style={styles.container}>
                    <View style={styles.cardcontents}>
                        <View style={styles.cardiconsbar}>
                            <View style={styles.cardicons}>
                                <Icon1 name="home" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Homepage</MetaLight>
                            </View>
                            <View style={styles.cardicons}>
                                <Icon1 name="edit" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Studyroom</MetaLight>
                            </View>
                            <View style={styles.cardicons}>
                                <Icon1 name="layout" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Portal</MetaLight>
                            </View>
                            <View style={styles.cardicons}>
                                <Icon1 name="notification" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Notice</MetaLight>
                            </View>
                        </View>
                        <View style={styles.cardiconsbar}>
                            <View style={styles.cardicons}>
                                <Icon1 name="bars" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Schedules</MetaLight>
                            </View>
                            <View style={styles.cardicons}>
                                <Icon1 name="book" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Library</MetaLight>
                            </View>
                            <View style={styles.cardicons}>
                                <Icon1 name="mail" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>WebMail</MetaLight>
                            </View>
                            <View style={styles.cardicons}>
                                <Icon2 name="silverware-fork-knife" size={40} color="#a1a1a1" />
                                <MetaLight fontSize={10} style={{textAlign: 'center'}}>Menu</MetaLight>
                            </View>
                        </View>
                    </View>
                </Surface>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerParent: {
        height: 180,
        width: '90%',
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#c4c4c4',
        borderRadius: 20,
        elevation: 5,

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    cardcontents: {
        display: "flex",
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    cardiconsbar:{
        display: "flex",
        flexDirection: 'row',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    cardicons: {
        alignContent: 'center'
    },
  });

export default MainGuides;