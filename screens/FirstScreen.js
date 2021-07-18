import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import WelcomeScreen from './WelcomeScreen';

/* const {navigate} = this.props.navigation;
setTimeout(() => {
    navigate('Login'); //this.props.navigation.navigate('Login')
}, 5000);  //5000 milliseconds */

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
        // Add your logic for the transition
        this.props.navigation.navigate('WelcomeScreen') // what to push here?
    }, 7000);
}

/* componentDidMount(){
    setTimeOut( () => {
        NavigationActions.navigate('WelcomeScreen');
    }, 5000 );
} */

/* componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
} */

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}> RichCash </Text>
        <Text style={styles.text2}>Save more...Spend less...</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({

    text1:{
        color:'white',
        alignSelf:'center',
        paddingTop:300,
        fontSize:20
    },
    text2:{
        color:'white',
        alignSelf:'center',
        //paddingTop:300,
        fontSize:15
    },
    container:{
        flex:1,  
        backgroundColor:'#4cd137',
        //backgroundColor:' #44bd32'  
    }

})