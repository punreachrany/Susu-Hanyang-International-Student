import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated, 
    TouchableOpacity,
    Image,
} from 'react-native';
import propTypes from 'prop-types';

export default class TextBox extends Component{

    handleOnPress(){
        this.props.pressTextBox()
    }
    
    render(){
        
        const {Level, boxColor, textBoxSize, } = this.props
        const size = textBoxSize || 30
        return(
            
            <View >
                <TouchableHighlight 
                    style={[{backgroundColor : boxColor, width : size*3}, styles.TextBox]}
                    onPress= {() => this.handleOnPress()}>
                    <Text style={[{padding: size, fontSize : size}, styles.innerText]}>{Level}</Text>
                </TouchableHighlight>
            </View>
                
        )
    }
}

TextBox.propTypes = {
    Level : propTypes.string,
    boxColor : propTypes.string,
    box_Size : propTypes.number,
    pressTextBox : propTypes.func,
}
const styles = StyleSheet.create({

    TextBox :{
        //backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        
        
    },
    innerText:{
        color:'#fff',
        textAlign:'center',
        fontWeight : 'bold',
    }
})