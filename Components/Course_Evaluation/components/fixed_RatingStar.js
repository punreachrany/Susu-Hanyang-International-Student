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

export default class FixedRatingStar extends Component{
    constructor(){
        super()
        this.state = {
            STAR_SELECTED_IMAGE_State : STAR_SELECTED_IMAGE,
            STAR_IMAGE_State : STAR_IMAGE,
        }
    }

    
    

    render(){
        const {ratingSize, ratingText, onPress_status, starText,color,value} = this.props;
        const size = ratingSize || 30;
        const status = onPress_status || false;
        var list = starText || ["Bad","Okay", "Average","Good","Awesome"];
        var listColor = color || ["red","#e67e22","#f1c40f","#3498db","#2ecc71"]
        const numberStar = value || 3
        const star = []

        for(let i = 0 ; i < numberStar ; i++){
            star.push(
                <TouchableOpacity style={{ paddingRight : size/2, zIndex: 1,}} key={i}><Animated.Image source={this.state.STAR_SELECTED_IMAGE_State} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
            )
        }
        for(let j = 5; j>numberStar ; j--){
            star.push(
                <TouchableOpacity style={{paddingRight : size/2, zIndex: 1,}} key={j}><Animated.Image source={this.state.STAR_IMAGE_State} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
            )
        }

        

        return(
            <View style={styles.wrapper}>
            <View style={styles.wrapper}>
                {star}
            </View>
            <View style={styles.wrapper}>
               
            </View>
            </View>
            
        )
    }
}

FixedRatingStar.propTypes = {
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
        padding : 10,
        fontSize : 15,
        fontWeight : 'bold'
    },
    wrapper : {
        flexDirection : 'row',
        paddingTop : 2,
        
    },
    attributeText : {
        fontWeight : 'bold',
    },
})