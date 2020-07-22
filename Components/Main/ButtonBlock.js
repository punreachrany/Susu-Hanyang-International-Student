import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';



export default class ButtonBlock extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.TopLine}>
                    <TouchableOpacity style={styles.button}>
                        <Text>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.MiddleLine}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Bulletin Board</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Food</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtomLine}>
                    <TouchableOpacity style={styles.button}>
                        <Text>List of Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Volunteer</Text>
                    </TouchableOpacity>
                </View>   
            </View>
          );
        }
      };
      
  
const styles = StyleSheet.create({
    container: {
      
      alignItems: "center",
      backgroundColor : 'green',
    },
    TopLine : {
        flexDirection : 'row',
    },
    MiddleLine : {
        flexDirection : 'row'
    },
    ButtomLine : {
        flexDirection : 'row'
    },
    button : {
        margin : 10,
    }

  });
