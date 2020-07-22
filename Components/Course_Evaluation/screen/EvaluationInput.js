
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ListView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Picker
} from 'react-native';
import propTypes from 'prop-types';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, Header} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import RatingStar_Without_TextBox from '../components/RatingStar_Without_TextBox';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox' 

//related to data transfer - start
import axios from 'axios'; 
import {server} from '../../ServerLib/config'; 
axios.defaults.timeout = 5000;
//related to data transfer - end

export default class EvaluationInput extends Component {
  constructor () {
    super()
    this.state = {
      skill : 5,
      difficulty : 4,
      assignment : 2,
      exam : 2,
      grade : 8,
      rate : 5, 
      Difficulty_Array: ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard'],
      Grade_Array: ['F', 'E', 'D','C0','C+','B0','B+','A0','A+']
    };

  }

  static defaultProps = {
    contents: ''
}

  onPressMinus_Skill = () => {
    if(this.state.skill > 0){
      this.setState({
        skill: this.state.skill-1
      })
    }
  }
  onPressPlus_Skill = () => {
    if(this.state.skill < 5){
      this.setState({
        skill: this.state.skill+1
      })
    }
  }

  onPressMinus_Diffculty = () => {
    if(this.state.difficulty > 0){
      this.setState({
        difficulty: this.state.difficulty-1
      })
    }
  }
  onPressPlus_Diffculty = () => {
    if(this.state.difficulty < 4){
      this.setState({
        difficulty: this.state.difficulty+1
      })
    }
  }

  onPressMinus_Assignment = () => {
    if(this.state.assignment > 0){
      this.setState({
        assignment: this.state.assignment-1
      })
    }
  }
  onPressPlus_Assignment = () => {
    if(this.state.assignment < 5){
      this.setState({
        assignment: this.state.assignment+1
      })
    }
  }

  onPressMinus_Exam = () => {
    if(this.state.exam > 0){
      this.setState({
        exam: this.state.exam-1
      })
    }
  }
  onPressPlus_Exam = () => {
    if(this.state.exam < 5){
      this.setState({
        exam: this.state.exam+1
      })
    }
  }

  onPressMinus_Grade = () => {
    if(this.state.grade > 0){
      this.setState({
        grade: this.state.grade-1
      })
    }
  }
  onPressPlus_Grade = () => {
    if(this.state.grade < 8){
      this.setState({
        grade: this.state.grade+1
      })
    }
  }

  onPressMinus_Rate = () => {
    if(this.state.rate > 0){
      this.setState({
        rate: this.state.rate-1
      })
    }
  }
  onPressPlus_Rate = () => {
    if(this.state.rate < 5){
      this.setState({
        rate: this.state.rate+1
      })
    }
  }

/*
  data request function - start
  1. Add a reply to the server  
  
  You need to pass to me:
    courseid: specifies current courseid. located: 'this.state.courseid' in EvaluationScreen 
    userid: specifies current userid. located: x. (헌남 also didn't do this part.)  
    contents: contents of the comments that user is writing in this component.   

*/
_handleAddComment = async () => {
  var url = server.serverURL + '/process/CourseEvaluation/AddComment';  
  
  await this.setState({
    isLoading: true
  });
  await axios.post(url, {
    courseid: "5d7b68b52ec3549472239b79",  
    userid: "5d5373177443381df03f3040",  
    contents: "So funny", 
    exam: this.state.exam,
    assignment: this.state.assignment,
    grade: this.state.Grade_Array[this.state.grade], 
    difficulty: this.state.Difficulty_Array[this.state.difficulty],
    rating: this.state.rate
    }) 
      .then((response) => {       
          this.setState({ 
            isLoading: false
          });  
      }) 
      .catch(( err ) => {
          Alert.alert(
              'Cannot connect to the server. Falling back to default option.',
              'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
              [{text: 'OK'}]
          ); 
      });    
  }
//data request function - end
  
  render() { 
    const {navigation} = this.props
    const SubjectName = navigation.getParam('SubjectName', 'NO-ID') || 'React Native'
    const ProfessorName = navigation.getParam('ProfessorName', 'NO-ID') || "Punreach RANY" 

    const Institution = "Hanyang University"

    var Difficulty_Array = ['Very Easy', 'Easy', 'Average', 'Hard', 'Very Hard'];
    var Grade_Array  = ['F', 'E', 'D','C0','C+','B0','B+','A0','A+'];
   
    
    

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} keyboardVerticalOffset = {Header.HEIGHT + 20}>
      <ScrollView style={styles.scroll}>
 
          <View style={styles.topBlock}>
            <Text style={{fontSize:30, fontWeight:'400'}}>Rate your professor.</Text>
            <Text style={{fontSize:30, fontWeight:'400'}}>See other's ratings</Text>
            <Text style={{fontSize:15, fontWeight:'200', color : 'red'}}>Rating your professor and see what other people are talking about their professor</Text>
          </View>

          <View style={styles.bottomBlock}>
            <View style={[styles.cellOne, styles.base]}>
              <View style={{justifyContent: 'center',alignContent : 'center', alignSelf : 'center'}}>
                  <Text style={{fontSize:30, fontWeight:'400', textDecorationLine : 'underline',}}>{ProfessorName}</Text>
              </View>
              <View style={{justifyContent: 'center',alignContent : 'center',alignSelf : 'center'}}>
                  <Text style={{borderTopWidth : 5 , borderTopColor : '#e67e22', width  : 100}}></Text>
              </View>
              <View style={{justifyContent: 'center',alignContent : 'center',alignSelf : 'center', paddingTop : 5}}>
                  <Text style={{fontSize:15, fontWeight:'200', color : '#000000', marginTop : -30}}>{SubjectName}</Text>
              </View>
            </View>

            <View style={[styles.cellTwo, styles.base]}>
              <View style={styles.boxOne}><Text style={styles.boxText}>Teaching Skill</Text></View>
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={this.onPressMinus_Skill}>
                  <Icon name = 'minus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
                <Text style = {[styles.boxText,{width:100, textAlign:'center'}]}>{this.state.skill} Star</Text>
                <TouchableOpacity onPress={this.onPressPlus_Skill}>
                  <Icon name = 'plus-square' size={25} type='font-awesome' color = '#bdc3c7'/> 
                </TouchableOpacity>
              </View> 
            </View>

            <View style={[styles.cellTwo, styles.base]}>
              <View style={styles.boxOne}><Text style={styles.boxText}>Level of difficulty</Text></View>
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={this.onPressMinus_Diffculty} >
                  <Icon name = 'minus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
                <Text style = {[styles.boxText,{width:100, textAlign:'center'}]}>{Difficulty_Array[this.state.difficulty]}</Text>
                <TouchableOpacity onPress={this.onPressPlus_Diffculty}>
                  <Icon name = 'plus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.cellTwo, styles.base]}>
              <View style={styles.boxOne}><Text style={styles.boxText}>Assignment</Text></View>
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={this.onPressMinus_Assignment}>
                  <Icon name = 'minus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
                <Text style = {[styles.boxText,{width:100, textAlign:'center'}]}>{this.state.assignment}</Text>
                <TouchableOpacity onPress={this.onPressPlus_Assignment} >
                  <Icon name = 'plus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.cellTwo, styles.base]}>
              <View style={styles.boxOne}><Text style={styles.boxText}>Exam</Text></View>
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={this.onPressMinus_Exam}>
                  <Icon name = 'minus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
                <Text style = {[styles.boxText,{width:100, textAlign:'center'}]}>{this.state.exam}</Text>
                <TouchableOpacity onPress={this.onPressPlus_Exam}>
                  <Icon name = 'plus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.cellTwo, styles.base]}>
              <View style={styles.boxOne}><Text style={styles.boxText}>Your Grade</Text></View>
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={this.onPressMinus_Grade} >
                  <Icon name = 'minus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
                <Text style = {[styles.boxText,{width:100, textAlign:'center'}]}>{Grade_Array[this.state.grade]}</Text>
                <TouchableOpacity onPress={this.onPressPlus_Grade}>
                  <Icon name = 'plus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.cellTwo, styles.base]}>
              <View style={styles.boxOne}><Text style={styles.boxText}>Overall Rate</Text></View>
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={this.onPressMinus_Rate}>
                  <Icon name = 'minus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
                <Text style = {[styles.boxText,{width:100, textAlign:'center'}]}>{this.state.rate} Star</Text>
                <TouchableOpacity onPress={this.onPressPlus_Rate} >
                  <Icon name = 'plus-square' size={25} type='font-awesome' color = '#bdc3c7'/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.cellTwo, {paddingBottom : 10}]}>
              <Input
                label = 'Comment'
                placeholder='Enter to leave a comment!'
                //shake={true}
                multiline
              />   
            </View>
            <View style={[styles.cellTwo, styles.base]}>
              <Button 
                title="Post" 
                onPress={this._handleAddComment.bind(this)}
              />
            </View>

          </View>


      </ScrollView>
    </KeyboardAvoidingView>

    );
  }
}
const styles = StyleSheet.create({
  container : {
    flexDirection : 'column',
    flex : 1,
    //position : 'absolute',
  },
  scroll : {
    height : '100%',
    marginBottom : 10, 
  },
  keyboard :{
    height : '10%',
    borderWidth: 2,
    borderColor: '#000000',
  },
  separate : {
    height : '2%',
    backgroundColor : 'green'
  },
  topBlock : {
    alignContent : 'flex-start',
    alignItems : 'flex-start',
    padding : 20,
    alignItems: 'flex-start',
  },
  bottomBlock : {
    flex : 3,
    borderWidth: 2,
    borderColor: '#d6d7da',
    borderRadius : 10,
    marginLeft : 10,
    marginRight : 10,
    alignContent : 'center',
    justifyContent: 'center',

  },
  base : {
    padding : 10,
  },

  cellOne : {
    flex : 12,
    flexDirection : 'column',

    justifyContent: 'center',
  },
  cellTwo : {
    flex : 2,
    flexDirection : 'row',
    alignContent : 'center'
  },
  cellThree : {
    flex : 12,
    flexDirection : 'row',
    alignContent : 'center'
  },

  boxOne : {
    flex : 1,

    alignContent : 'center'
  },
  
  boxTwo : {
    flex : 1,
    flexDirection : 'row',
    alignContent : 'center',
    alignItems : 'center',
    justifyContent: 'center',
    borderRadius : 10,

    
  },
  boxText : {
    fontSize:20, 
    fontWeight:'400',
  },

  name:{
    fontSize:20,
    fontWeight:'600',
  },
});