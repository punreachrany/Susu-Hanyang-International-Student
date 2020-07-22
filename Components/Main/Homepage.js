import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'

const { height, width } = Dimensions.get('window')

class Homepage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Welcome to Hanyang Su Su!',
      });

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../../assets/university.jpg')}
                                        name="University"
                                    />
                                    <Category imageUri={require('../../assets/announcement.jpg')}
                                        name="Important"
                                    />
                                    <Category imageUri={require('../../assets/activity.jpg')}
                                        name="Activity"
                                    />
                                    <Category imageUri={require('../../assets/food.jpg')}
                                        name="Foods"
                                    />
                                    <Category imageUri={require('../../assets/developer.jpg')}
                                        name="About Us"
                                    />
                                    <View style={{paddingLeft:10}}></View>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Su Su
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A mobile platform helping international student in Hanyang University

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../../assets/developer.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});