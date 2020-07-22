/*
courseID : 각각 강의를 식별하는 ID. EvaluationInput, EvaluationList, EvaluationScreen 파일에 필요함. integer,
professorID : Foreign Key. 각각 교수님을 식별하는 id. 강의평가 데이터에 반복해도 됨. 왜냐하면 한 사람이 2수업을 가르칠 수도 있어서.
              EvaluationInput, EvaluationList, EvaluationScreen 파일에 필요함. integer,
subject : 강의 이름. string,
professor : 교수님 이름 string,
overallRating : 여러 평가를 모아서 평균 rating를 계산하는 변수. integer (0-5). 반올림
exam : 여러 시험수를 모아서 제일 많이 나타나는 number를 선택. 
        (예시 : 0,1,2,3,more 4 중에 3가 많이 나오면 3 선택) string,
assignment : 여러 과제수를 모아서 제일 많이 나타나는 number를 선택. 
        (예시 : 0,1,2,3,more 4 중에 3가 많이 나오면 3 선택)string,
difficulty : 여러 수준을 모아서 제일 많이 나타나는 수준을 선택.
        (예시 : Average이 많이 입력되면 difficulty = 'Average' : string,
grade : 여러 학점을 모아서 제일 많이 나타나는 학점을 선택. 
        (예시 : A0이 많이 입력되면 difficulty = 'Average' : string,
위 데이터들이 다 UnifiedEntries.js의 CourseRatingEntries_Mock에 있음
rating,difficulty, exam: 최빈값 
user가 이미 comment를 썼다면 입력하지 않도록 
teaching skill은 무시. 
과목 리스트는 입력 안 되게. 
댓글들은 수정, 삭제 되게끔. 내용 없이 입력하면 no comment 넣기 
same class name & different professor: 다른 수업. 
profile: 교수명, 과목 리스트(courseid, coursebane, school 이름) 
*** Comment Part ***
commenterID : 각각 댓글 넘긴 사람의 ID. Foreign Key. integer
commenterName : string
comment : 댓글 : String.
commenterCourseID : 강의의 id: Foreign key. integer
commenterExam : commenter가 입력한 시험수. String
commenterAssignment : commenter가 입력한 과제수. String
commenterGrade : commenter가 입력한 학점. String
commenterDifficulty : commenter가 입력한 수준. String
rating : commenter가 입력한 rating. number (0-5)
위 comment 데이터들이 아직 없음 
*/


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
  Alert,
} from 'react-native';
import propTypes from 'prop-types';
import { Button,ListItem,SearchBar } from 'react-native-elements';
import { Container, Header, Item, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox'
import FixedRatingStar from '../components/fixed_RatingStar'
import EvaluationScreen from './EvaluationScreen';
import LoadingScreen from './LoadingScreen';  

import {CourseRatingEntries_Mock} from '../../../Mockup_Datas/UnifiedEntries'; 

//related to data transfer - start
import axios from 'axios'; 
import {server} from '../../ServerLib/config' 
//related to data transfer - end

//loading page from 헌남 
import LoadingPage from '../../Tools/LoadingPage';

class EvaluationList extends Component {
  
    state = {
        search: '',  
      };
      
    
    updateSearch = search => {
        this.setState({ search });
    };
    
    //Initiate variables that is used in data transfer  
    constructor(props){
      super(props); 
       // To indicate the start/end index of array that includes courseslist. 
       // CommentslistAmount: Amount of courses that will be shown in one screen  
        // At first, the server is requested to send 20 courses that written most recent time. 
        this.state = {
          CourseslistStartIndex: 0, 
          CourseslistEndIndex: 19,  
          CourseslistAmount: 20,
          courseslist: CourseRatingEntries_Mock, 
          isLoading: true, 
         
        };
    }


  //data request function - start 
  // 1. Get 20 elements from 'courseslist' array whoose start/end indexes are courseliststartindex/courselistendindex
    
  render() { 
    const { search } = this.state;
    
    return (
        <View>
          
            <SearchBar
                lightTheme round
                platform = "ios"
                containerStyle = {{backgroundColor : '#ffffff', borderColor : '#ffffff'}}
                inputContainerStyle = {{backgroundColor : '#ecf0f1'}}
                placeholderTextColor = 'black'
                inputStyle = {{color : 'black'}}
                placeholder="Search Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
            <ScrollView>
            { 
            //Wait until get data from 'componentDidMount'  
            
            
            this.state.courseslist.map((l, i) => (
            <ListItem
                rounded
                key={i}
                containerStyle = {{borderTopColor : '#ecf0f1', borderTopWidth : 1, borderBottomColor : '#ecf0f1', borderBottomWidth : 1, }}
                title={l.subject}
                rightSubtitle={l.professor}
                rightSubtitleStyle={{textAlign:'center',alignSelf:'center'}}
                subtitle = {<FixedRatingStar 
                    ratingSize = {10}
                    onPress_status = {true}
                    value = {l.overallRating}
                />}
                onPress = {() => this.props.navigation.navigate('EvaluationScreen', {
                  itemID : l.courseID,
                  SubjectName : l.subject,
                  ProfessorName : l.professor,
                  ExamNumber : l.exam,
                  Assignment : l.assignment,
                  Star : l.overallRating,
                  Difficulty : l.difficulty,
                  Grade : l.grade,

                  //more
                }
                
                )}          
            />
            ))
            
        }
        <ListItem
                rounded
                //Empty Space
                title=''
                subtitle=''
            />
        </ScrollView>
        </View>
    );
  }
}

const RootNavigator = createSwitchNavigator({
  EvaluationList: EvaluationList,
  LoadingScreen: LoadingScreen
}, {
  initialRouteName: 'LoadingScreen'
});

export default createAppContainer(RootNavigator);

EvaluationList.propTypes = {

}

const styles = StyleSheet.create({
    
});