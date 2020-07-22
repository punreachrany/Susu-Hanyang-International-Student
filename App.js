import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SettingsScreen from "./Components/Settings/Settings"
//import MainScreen from "./Components/Main/Main"
import MainScreen from "./Components/Main/Homepage"
import TimeTables from "./Components/TimeTables/TimeTables"
import BulletinBoards from "./Components/BulletinBoards/BulletinBoards"
import BulletinBoardsContent from "./Components/BulletinBoards/BulletinBoardsContent"
import BulletinBoardsEditEntry from "./Components/BulletinBoards/BulletinBoardsEditEntry";
import BulletinBoardsLists from "./Components/BulletinBoards/BulletinBoardsLists";
import CourseEvaluation from './Components/Course_Evaluation/CourseEvaluation';
import CalendarScreen from './Components/EventCalendar/EventCalendar'
import ExpandableCalendarScreen from './Components/EventCalendar/ExpandableEventCalendar'
import BulletinBoardsSearch from "./Components/BulletinBoards/BulletinBoardsSearch";
import BulletinBoardsContext from "./Components/BulletinBoards/BulletinBoardsContext";
import { Input } from "react-native-elements";
//창이 만든 거
import AuthScreen from "./Components/Auth/Auth";
import LoginScreen from "./Components/Auth/Login";
import SignUpScreen from "./Components/Auth/Signup"; 
import NotverifiedScreen from "./Components/Auth/Notverified"

const AuthSwitch = createSwitchNavigator({
  Auth: AuthScreen,
  Login: LoginScreen, 
  Signup: SignUpScreen, 
  Notverified: NotverifiedScreen
  }, 
  {
    initialRouteName: 'Auth'
  });

const MainStack = createStackNavigator({
  Main: MainScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

const BulletinBoardsStack = createStackNavigator({
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
        tabBarLabel : 'Notice',
        tabBarIcon : ({tintColor}) => (<Icon name="list" color={tintColor} size = {20}/>)
      }
    },
    CalendarScreen : {
      screen : CalendarScreen,
      navigationOptions : {
        tabBarLabel : 'Calender',
        tabBarIcon : ({tintColor}) => (<Icon name="calendar" color={tintColor} size = {20}/>)
      }
    },
    CourseEvaluation : {
      screen : CourseEvaluation,
      navigationOptions : {
        tabBarLabel : 'Rating',
        tabBarIcon : ({tintColor}) => (<Icon name="star" color={tintColor} size = {20}/>)
      }
    },
    
  }
);

const AppSwitchNavigator = createSwitchNavigator({ 
  AuthSwitch: {screen: AuthSwitch}, 
  TabNavigator: {screen: TabNavigator}
}, 
{
  initialRouteName: 'TabNavigator'
})

const AppContainer = createAppContainer(AppSwitchNavigator);

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
  constructor(props){
    super(props);
    this.state = {
      BulletinBoards: {
        isDev : false,
        isReplyEditMode : false,
        isReplySubmitted : false,

        // 댓글 관련 context
        boardid: 0,
        entryid: 0,
        replyid: 0,

        // 댓글 수정 중일 때
        currentReplyEditId : '',
        currentReplyEditContents: '',
        
        _toggleDevMode : this._toggleDevMode,
        _setContextState: (input) => { this.setState({BulletinBoards: {...this.state.BulletinBoards, ...input}})},
      },
    }
  }
  render() {
    return (
      <PaperProvider>
        <BulletinBoardsContext.Provider value={this.state}>
          <AppContainer /> 
        </BulletinBoardsContext.Provider>
      </PaperProvider>
    );
  }
}
