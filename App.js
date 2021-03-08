import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageComponent, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { ScreenContainer } from 'react-native-screens';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'


export default function App() {
  return (
    <AppContainer/>
  );
}
const tabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen}
},
{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ({})=>{
    if(navigation.state.routeName==="WriteStory"){
      return(
        <Image source={require("./assets/write.png")} style={{width: 40, height: 40}}/>
      )
    }
    else if(navigation.state.routeName==="ReadStory"){
      return(
        <Image source={require("./assets/read.png")} style={{width: 40, height: 40}}/>
      )
    }
  }
})});

const AppContainer = createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});