import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated, 
    TouchableOpacity,
    TouchableNativeFeedback,
    Image,
} from 'react-native';
import TextBox from './TextBox';
import propTypes from 'prop-types';

const STAR_IMAGE = require( '../img/airbnb-star.png' );
const STAR_SELECTED_IMAGE = require( '../img/airbnb-star-selected.png' );


export default class RatingStar extends Component{
    constructor(){
        super()
        this.state = {
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            LevelStar : "Good",
            textColor : '#3498db'
        }
    }
    
    updateStar_1(status,list,listColor) {
            if(status){this.setState({
                SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
                SOURCE_IMAGE_2 : STAR_IMAGE,
                SOURCE_IMAGE_3 : STAR_IMAGE,
                SOURCE_IMAGE_4 : STAR_IMAGE,
                SOURCE_IMAGE_5 : STAR_IMAGE,
                LevelStar : list[0],
                textColor : listColor[0]
            })}
    }
    updateStar_2(status,list,listColor) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_IMAGE,
            SOURCE_IMAGE_4 : STAR_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            LevelStar : list[1],
            textColor : listColor[1]
        })}
    }
    updateStar_3(status,list,listColor) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            LevelStar : list[2],
            textColor : listColor[2]
        })}
    }
    updateStar_4(status,list,listColor) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            LevelStar : list[3],
            textColor : listColor[3]
        })}
    }
    updateStar_5(status,list,listColor) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_5 : STAR_SELECTED_IMAGE,
            LevelStar : list[4],
            textColor : listColor[4]

        })}
    }
    

    render(){
        const {ratingSize, ratingText, onPress_status, starText,color} = this.props;
        const size = ratingSize || 30;
        const status = onPress_status || false;
        var list = starText || ["Bad","Okay", "Average","Good","Awesome"];
        var listColor = color || ["red","#e67e22","#f1c40f","#3498db","#2ecc71"]
        return(
            <View style={styles.wrapper}>
            <View style={styles.wrapper}>
                <Text style={[{fontSize : size, paddingTop : size, paddingBottom : size, paddingLeft : size/2}, styles.attributeText]}>{ratingText}</Text>
                
                <TouchableOpacity style={{paddingTop : size, paddingBottom : size, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_1(status,list,listColor)}><Animated.Image source={this.state.SOURCE_IMAGE_1} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : size, paddingBottom : size, paddingLeft : size/2, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_2(status,list,listColor)}><Animated.Image source={this.state.SOURCE_IMAGE_2} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : size, paddingBottom : size, paddingLeft : size/2, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_3(status,list,listColor)}><Animated.Image source={this.state.SOURCE_IMAGE_3} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : size, paddingBottom : size, paddingLeft : size/2, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_4(status,list,listColor)}><Animated.Image source={this.state.SOURCE_IMAGE_4} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : size, paddingBottom : size, paddingLeft : size/2, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_5(status,list,listColor)}><Animated.Image source={this.state.SOURCE_IMAGE_5} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <TouchableHighlight
                    style={[{backgroundColor: this.state.textColor }, styles.TextBox]}
                    underlayColor='#fff'>
                    <Text style={styles.innerText}>{this.state.LevelStar}</Text>
                </TouchableHighlight>   
            </View>
            </View>
            
        )
    }
}

RatingStar.propTypes = {
    ratingText : propTypes.string,
    ratingSize : propTypes.number,
    onPress_status : propTypes.bool,
    starText : propTypes.array,
    color : propTypes.array,
    value : propTypes.number,
}

const styles = StyleSheet.create({
    TextBox :{
        //backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width : 150,
    },
    innerText:{
        color:'#fff',
        textAlign:'center',
        padding : 20,
        fontSize : 20,
        fontWeight : 'bold'
    },
    wrapper : {
        flexDirection : 'row',
        
    },
    attributeText : {
        fontWeight : 'bold',
    },
})