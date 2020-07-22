
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ListView,
  FlatList
} from 'react-native';
import RatingStar from './RatingStar';
import Comment from './Comment';
import TextBox from './TextBox'

export default class ProfileView extends Component {

  render() {
    const ProfessorName = "Punreach RANY"
    const Institution = "Hanyang University"
    const ExamNumber = 2
    const Assignment = 2
    const Grade = 'A+'
    const Again = 'Yes'


    return (
      <ScrollView style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>React Native</Text>
            </View>
          </View>


          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <View>
                <Text style={styles.profileText}>Taught by </Text>  
                <Text style={styles.profileText}>Institution </Text>
                <Text style={styles.profileText}>Rating</Text>
                <Text style={styles.profileText}>Level of Difficulty </Text>
                <Text style={styles.profileText}>Number of Exam </Text>
                <Text style={styles.profileText}>Number of Assignment </Text>
                <Text style={styles.profileText}>Grade most people got </Text>
                <Text style={styles.profileText}>Would like to take it again </Text>
                <TextBox 
                    Level = "Evaluate"
                    boxColor = 'green'
                    textBoxSize = {20}
                />
              </View>
              <View>
                <Text style={styles.profileText}>:</Text>  
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                
              </View>
              <View style={{alignItems : 'center'}}>
                <Text style={styles.profileText}>{ProfessorName}</Text>  
                <Text style={styles.profileText}>{Institution}</Text>  
                <RatingStar 
                    ratingSize = {20}
                    onPress_status = {true}
                />
                <RatingStar 
                    ratingSize = {20}
                    onPress_status = {true}
                />
                <Text style={styles.profileText}>{ExamNumber}</Text>
                <Text style={styles.profileText}>{Assignment}</Text>
                <Text style={styles.profileText}>{Grade}</Text>
                <Text style={styles.profileText}>{Again}</Text>
                
              </View>
              
            </View>
            
            
          </View>

          <View style={styles.body}>
            
            <View style={styles.bodyContent}>
              <View style={styles.commentTitle}><Text style={{fontSize : 20, fontWeight:'bold'}}>Comments</Text></View>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <View style={styles.bottomPart}>
                
              <TextBox 
                    Level = "Next"
                    boxColor = 'green'
                    textBoxSize = {20}
                />
                
                
              </View>
              
              
            </View>
         </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        height : '100%',
        width : '100%'
    },
    bottomPart : { 
      width : '100%',
      flexDirection : 'row',
      padding : 15,      
    },
    profileText : {
      fontSize : 20,
      fontWeight : 'bold',
      paddingBottom : 20,
      paddingLeft : 10,
      paddingRight : 10,
      paddingTop : 20,
    } ,
  header:{
    backgroundColor: "#00CED1",
    height : 200,
    alignContent : 'center',
    alignItems : 'center'
    //zIndex : 2,
  },
  headerContent:{
    
    alignItems: 'center',
    //zIndex : 2,
  },

  profileDetail:{
    flex : 1,
    width : "95%",
    alignSelf: 'center',
    marginTop: -70,
    alignItems: 'center',
    flexDirection: 'row',
    //position:'absolute',
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: '#d6d7da',
    borderRadius : 10,
    zIndex : 1,
    alignContent : 'center'
    
  },
  detailContent:{
    flex : 1,
    justifyContent: 'space-between',
    width : "98%",
    margin: "1%",
    flexDirection : 'row',
    alignItems: 'flex-start',
    alignContent : 'center',
    alignSelf : 'center',
    //borderWidth: 0.5,
    //borderColor: '#d6d7da',
    //borderRadius : 10,
   
    //zIndex : 1,
  },
  body : {
    //zIndex : 1,
    //height : '100%',
    alignItems : 'center'
    
  },
  bodyContent: {
    width : '95%',
    flex: 1,
    alignItems: 'flex-start',
    //padding:30,
    marginTop:10,
    borderWidth: 2,
    borderColor: '#d6d7da',
    borderRadius : 10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:50,
    color:"#FFFFFF",
    fontWeight:'600',
    paddingTop:'5%',
    zIndex : 2,
  },
  commentTitle : {
    alignSelf : 'center',
    padding : 15,
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  
  count:{
    fontSize:18,
  },
 
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "black",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "black",
    marginTop:10,
    textAlign: 'center'
  },
});