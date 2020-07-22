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
    Picker,
    UIManager, 
    findNodeHandle,
} from 'react-native';

import propTypes from 'prop-types';
import RatingStar from './RatingStar';
import RatingStar_Without_TextBox from './RatingStar_Without_TextBox'
import Icon from 'react-native-vector-icons/FontAwesome';
import FixedRatingStar from './fixed_RatingStar';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'

//const {likeNumber} = this.props;
//const NumberLike = 0;

export default class CommentTest extends Component{
    
    constructor(props){
        super(props)
        this.state = { 
            NumberLike : this.props.NumberLike,
            ismineLike : false,
            ismineComment : false,
        }
        
    }


    
    render(){
        console.log(this.props)
        const {person, cmtText, Star} = this.props;

        const CommentStar = Star || 3

        const CommentPerson = person || "Punreach RANY"
        const CommentText = cmtText || "This is my comment"
        const TopRight = [];
        const Like = [];

        //const a = 1;
        
        if(this.state.ismineComment) {
            
            TopRight.push(
                <View key={0} style={styles.TopRightView}>
                        <TouchableOpacity style={[{paddingRight : 10, borderRadius : 10},styles.personName]}>
                            <View style={{flexDirection : 'row'}}>
                
                            <Text style={{fontSize : 20}}>   Report</Text>
                            </View>
                        </TouchableOpacity>
                        
                        
                        
                </View>
                
            )
        } else {
            TopRight.push(
                <View key={0} style={styles.TopRightView}>
                        <TouchableOpacity style={[{paddingRight : 10, borderRadius : 10},styles.personName]}>
                            <View style={{flexDirection : 'row'}}>
                
                                <Text style={{fontSize : 20}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{paddingRight : 10, borderRadius : 10},styles.personName]}>
                            <View style={{flexDirection : 'row'}}>
                                <Text style={{fontSize : 20}}>Delete</Text>
                            </View>
                        </TouchableOpacity>         
                </View>    
            )
        }
        Like.push(
            <View key={0} style={styles.TopRightView}>
                        <View style={{flexDirection : 'row'}}>
                             <Text style={{fontSize : 20}}>{this.state.NumberLike}</Text>
                        </View>

                        <TouchableOpacity style={[{paddingRight : 10, borderRadius : 10},styles.personName]} onPress={() => {
                                    this.setState({ NumberLike : this.state.NumberLike+1});
                                }}>
                            <View style={{flexDirection : 'row'}}>
                
                                <Text style={{fontSize : 20}}>Like</Text>
                            </View>
                        </TouchableOpacity>      
            </View> 
        )

        return(         
            <View style={styles.wrapper}>
                <View style={{flex : 1, flexDirection : 'row'}}>
                    <View style={styles.personView}>
                        <Text style={styles.personName}>{CommentPerson[0]+"*****"}</Text>
                        <FixedRatingStar 
                            ratingSize = {10}
                            onPress_status = {false}
                            value ={CommentStar}
                        />
                        
                    </View>
                    {TopRight}
                </View>    

                <View style={{flex : 1, flexDirection : 'row'}}>
                    <View style={styles.CommentView}><Text>{CommentText}</Text></View>
                </View>

                <View style={{flex : 1, flexDirection : 'row'}}>
                    {Like}
                </View>
                    
            </View>    
        )
    }
}

CommentTest.propTypes = {
    NumberLike : propTypes.number,
    person : propTypes.string,
    cmtText : propTypes.string,
    Star : propTypes.number,
}
const styles = StyleSheet.create({
    wrapper : { 
        flex : 1,
        width : '100%',
        flexDirection : 'column',
        
        padding : 10,
    },
    personName : {
        alignSelf : 'center',
        fontSize : 15,
        fontWeight : 'bold',
        //paddingTop : 10,
        paddingLeft : 10,
        //paddingBottom : 10,
    },
    CommentView : {
        flex : 1,
        width : '100%',
        padding : 15,
        fontSize : 15,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        //borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10,
        backgroundColor : '#bdc3c7',
    },
    TopRightView : {
        flex : 1,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'flex-end',

        //alignContent : 'flex-end',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    },

    personView : {
        flex : 1.2,
        width : '100%',
        flexDirection : 'row',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    }
})