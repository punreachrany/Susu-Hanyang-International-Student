import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Agenda from './CalendarSourceCode/agenda/index';
import {EventEntries} from './CalendarEventEntries'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {_handleGetEventsList} from '../ServerLib/Requests/EventCalendar/_handleGetEvents';


export default class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {EventEntries},
      EventEntries : null,

    };
  }


// 컴포넌트 마운트 시


  render() {
    
    return (


      
      <Agenda
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }

  loadItems(day) {
    
    setTimeout(() => {
      
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        for (let m = 0; m < EventEntries.length; m++) {
          if(strTime == EventEntries[m].Date){
            this.state.items[strTime] = [];
            for (let j = 0; j < EventEntries[m].Events.length; j++) {
              this.state.items[strTime].push({
                name : EventEntries[m].Events[j].title,
                eventDate : EventEntries[m].Date,
                distributor : EventEntries[m].Events[j].distributor,
                isAdmin : EventEntries[m].isAdmin,
                time : EventEntries[m].Events[j].time,
                place : EventEntries[m].Events[j].place,
                
                height: Math.max(50, Math.floor(Math.random() * 150))
              });
            }
          }
        }
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          
        }
      }

      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }


  renderItem(item) {
    return (
      <View style={[styles.item,]}>
        <Text style={{fontSize : 20, paddingTop : 10, paddingLeft : 10}}>{item.time}</Text>
        <Text style={{fontSize : 25, paddingTop : 10, paddingBottom : 5, paddingLeft : 10}}>{item.name} </Text>
        <Text style={{fontSize : 15, paddingLeft : 10}}>Location : {item.place}</Text>
        <Text style={{fontSize : 15, paddingLeft : 10}}>Distributor : {item.distributor}</Text>
        <TouchableOpacity onPress={() => alert(item.name)}><Text style={{fontSize : 15, paddingTop : 10, paddingLeft : 10, color : 'blue'}}>See more info</Text></TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    height : 250,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 40,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  eventText : {
 
  },
  fabStyle:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 15,
  },
});