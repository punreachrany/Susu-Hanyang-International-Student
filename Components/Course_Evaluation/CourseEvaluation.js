import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EvaluationScreen from './screen/EvaluationScreen';
import EvaluationInput from './screen/EvaluationInput';
import EvaluationList from './screen/EvaluationList';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'


class CourseEvaluation extends Component{
  render(){
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  EvaluationList : EvaluationList,
  EvaluationScreen :  EvaluationScreen,
  EvaluationInput : EvaluationInput,
})

const AppContainer = createAppContainer(AppStackNavigator)

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
