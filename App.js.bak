import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SettingsScreen from "./Components/Settings/Settings"
import MainScreen from "./Components/Main/Main"
import TimeTables from "./Components/TimeTables/TimeTables"
import BulletinBoards from "./Components/BulletinBoards/BulletinBoards"
import BulletinBoardsContent from "./Components/BulletinBoards/BulletinBoardsContent"
import BulletinBoardsEditEntry from "./Components/BulletinBoards/BulletinBoardsEditEntry";
import BulletinBoardsLists from "./Components/BulletinBoards/BulletinBoardsLists";
import CourseEvaluation from './Components/Course_Evaluation/CourseEvaluation';
import CalendarScreen from './Components/EventCalendar/EventCalendar'
import BulletinBoardsMain from "./Components/BulletinBoards/BulletinBoardsMain";
import BulletinBoardsSearch from "./Components/BulletinBoards/BulletinBoardsSearch";

import  Test from './Components/Course_Evaluation/screen/Test'


const MainStack = createStackNavigator({
  Main: MainScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

const BulletinBoardsStack = createStackNavigator({
  BulletinBoardsMain: BulletinBoardsMain,
  BulletinBoardsLists: BulletinBoardsLists,
  BulletinBoards: BulletinBoards,
  Post: BulletinBoardsContent,
  EntryEdit: BulletinBoardsEditEntry,
  Search: BulletinBoardsSearch,
});

const TimeTablesStack = createStackNavigator({
  TimeTables: TimeTables,
});

const TabNavigator = createBottomTabNavigator(
  {
    
    Main : {
      screen : MainStack,
      navigationOptions : {
        tabBarLabel : 'Main',
        tabBarIcon : ({tintColor}) => (<Icon name="home" color={tintColor} size = {20}/>)
      }
    },
    BulletinBoards : {
      screen : BulletinBoardsStack,
      navigationOptions : {
        tabBarLabel : 'BulletinBoards',
        tabBarIcon : ({tintColor}) => (<Icon name="list" color={tintColor} size = {20}/>)
      }
    },
    CalendarScreen : {
      screen : CalendarScreen,
      navigationOptions : {
        tabBarLabel : 'CalendarScreen',
        tabBarIcon : ({tintColor}) => (<Icon name="calendar" color={tintColor} size = {20}/>)
      }
    },
    Settings : {
      screen : SettingsStack,
      navigationOptions : {
        tabBarLabel : 'Settings',
        tabBarIcon : ({tintColor}) => (<Icon name="cog" color={tintColor} size = {20}/>)
      }
    },
    CourseEvaluation : {
      screen : CourseEvaluation,
      navigationOptions : {
        tabBarLabel : 'CourseEvaluation',
        tabBarIcon : ({tintColor}) => (<Icon name="star" color={tintColor} size = {20}/>)
      }
    },
    Test : {
      screen : Test,
      navigationOptions : {
        tabBarLabel : 'Test',
        tabBarIcon : ({tintColor}) => (<Icon name="star" color={tintColor} size = {20}/>)
      }
    },
  }
);

/*
const TabNavigator = createBottomTabNavigator(
  {
    Main: MainStack,
    BulletinBoards: BulletinBoardsStack,
    TimeTables : TimeTablesStack,
    Settings: SettingsStack,
    CourseEvaluation : CourseEvaluation,
  }
);
*/

const AppContainer = createAppContainer(TabNavigator);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
