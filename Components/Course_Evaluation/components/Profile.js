
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import RatingStar from './RatingStar';

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
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.name}>{ProfessorName}</Text>
            </View>
          </View>


          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              
              <Text style={styles.profileText}>Institution :   {Institution}</Text>  
              <RatingStar 
                  ratingText = "Rating :"
                  ratingSize = {20}
                  onPress_status = {true}
              />
              <RatingStar 
                  ratingText = "Level of Difficulty :"
                  ratingSize = {20}
                  onPress_status = {true}
              />
              <Text style={styles.profileText}>Number of Exam :   {ExamNumber}</Text>
              <Text style={styles.profileText}>Number of Assignment :   {Assignment}</Text>
              <Text style={styles.profileText}>Grade you got :   {Grade}</Text>
              <Text style={styles.profileText}>Would you like to take it again? :   {Again}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Option 1</Text>  
              </TouchableOpacity> 
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
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
    //zIndex : 2,
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    //zIndex : 2,
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
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
    zIndex : 2,
  },
  profileDetail:{
    width : "95%",
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderRadius : 10,
    zIndex : 1,
    alignContent : 'center'
    
  },
  detailContent:{
    width : "98%",
    margin: "1%",
    alignItems: 'flex-start',
    alignContent : 'center',
    alignSelf : 'center',
    //borderWidth: 0.5,
    //borderColor: '#d6d7da',
    //borderRadius : 10,
   
    //zIndex : 1,
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  body : {
    
    height : '100%',
    alignItems : 'center'
    
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    width : '95%',
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:520,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderRadius : 10,
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