import React, { Component } from 'react';
import {  View } from 'react-native';
import {} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import HistoryScreen from './screens/HistoryScreen';
import MonthlyViewScreen from './screens/MonthlyViewScreen';


const Stack = createStackNavigator();


export default class App extends Component {

   constructor(props) {
    super()
    this.state = {
    }

  }
  render() {
    return (
      
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} /> 
       <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
       <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

        <Stack.Screen name="AddExpenseScreen" component={AddExpenseScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="MonthlyViewScreen" component={MonthlyViewScreen} options={{ headerShown: false }}/>

       </Stack.Navigator>
    </NavigationContainer>
    )
  }
}


