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
''
const STAR_IMAGE = require( '../img/airbnb-star.png' );
const STAR_SELECTED_IMAGE = require( '../img/airbnb-star-selected.png' );

export default class RatingStar extends Component{
    constructor(){
        super()
        this.state = {
        
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            value : 3
        }
        this.updateStar_1 = this.updateStar_1.bind(this)
        //this.handleNextButton = this.handleNextButton.bind(this);
    }
    
    updateStar_1(status) {
            if(status){this.setState({
                SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
                SOURCE_IMAGE_2 : STAR_IMAGE,
                SOURCE_IMAGE_3 : STAR_IMAGE,
                SOURCE_IMAGE_4 : STAR_IMAGE,
                SOURCE_IMAGE_5 : STAR_IMAGE,
                value : 1,
            })}
    }
    updateStar_2(status) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_IMAGE,
            SOURCE_IMAGE_4 : STAR_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            value : 2,
        })}
    }
    updateStar_3(status) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            value : 3,
        })}
    }
    updateStar_4(status) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_5 : STAR_IMAGE,
            value : 4
        })}
    }
    updateStar_5(status) {
        if(status){this.setState({
            SOURCE_IMAGE_1 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_2 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_3 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_4 : STAR_SELECTED_IMAGE,
            SOURCE_IMAGE_5 : STAR_SELECTED_IMAGE,
            value : 5

        })}
    }
    

    render(){
        const {ratingSize, ratingText, onPress_status} = this.props;
        const size = ratingSize || 30;
        const status = onPress_status || false;
        return(
            <View style={styles.wrapper}>
                <Text style={[{fontSize : size, paddingTop : size, paddingBottom : size, paddingLeft : size/2, paddingRight : size/2}, styles.attributeText]}>{ratingText}</Text>
                
                <TouchableOpacity style={{paddingTop : 22, paddingBottom : 21, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_1(status)}><Animated.Image source={this.state.SOURCE_IMAGE_1} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : 22, paddingBottom : 21, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_2(status)}><Animated.Image source={this.state.SOURCE_IMAGE_2} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : 22, paddingBottom : 21, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_3(status)}><Animated.Image source={this.state.SOURCE_IMAGE_3} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : 22, paddingBottom : 21, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_4(status)}><Animated.Image source={this.state.SOURCE_IMAGE_4} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                <TouchableOpacity style={{paddingTop : 22, paddingBottom : 21, paddingRight : size/2, zIndex: 1,}} onPress = {() => this.updateStar_5(status)}><Animated.Image source={this.state.SOURCE_IMAGE_5} style={{width : size*1.5, height : size*1.5}}/></TouchableOpacity>
                
            </View>
            
        )
    }
}

RatingStar.propTypes = {
    ratingText : propTypes.string,
    ratingSize : propTypes.number,
    onPress_status : propTypes.bool,
}

const styles = StyleSheet.create({
    wrapper : {
        flexDirection : 'row',
        
    },
    attributeText : {
        fontWeight : 'bold',
    },
})