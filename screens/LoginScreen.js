import React, { Component } from 'react';
import { View, Text,StyleSheet,Alert } from 'react-native';
import {  Button,Header, Input, Item,Image } from 'native-base';
//import { Header } from 'react-native/Libraries/NewAppScreen';

import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


//const image = { uri: "https://reactjs.org/logo-og.png" };

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        nic:'',
        password:'',
    }
    this.getData()
  }

 storeData = async (value) => {
     try{
         await AsyncStorage.setItem('isLogged' , this.state.nic)
         console.log('Store data :'+ value)

     }catch (e) {
        
     }
 } 

 getData = async () => {
    try {
        const value = await AsyncStorage.getItem('isLogged')
        if (value !== null) {
            console.log('getData :' + value)

            this.props.navigation.navigate('LoginScreen', { nic: value })

        } else {
            //Alert.alert(" ")

        }
    } catch (e) {

    }

 }


 removeValue = async () => {
    try {
        await AsyncStorage.removeItem('isLogged')
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}

getUser = () => {
    fetch('http://192.168.1.5:3000/user/getOneUser/' + this.state.nic, { method: 'GET' })
        .then((response) => response.json())
        .then((json) => this.passwordMatch(json.password))

}


passwordMatch(password) {
    if (this.state.password == password) {
        console.log('done')
        this.storeData()
        this.props.navigation.navigate('HomeScreen', { nic: this.state.nic })
    } else {
        console.log('failed')
    }

}


  render() {
    return (
      <View style={styles.screenColor}>

         {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
          </ImageBackground> */}

          <Header style={styles.header}>
              <Text style={styles.headerTxt}>RichCash</Text>
          </Header>

          <Text style={styles.pgeTit}>Login</Text>

            <Item rounded style={styles.input}>
              <Input placeholder="National ID"
              value={this.state.nic}
              type="text"
              name="nic"
              onChangeText={(value) => {
                this.setState({
                    nic: value
                })
            }}
              />
              </Item>

              <Item rounded style={styles.input}>
              <Input placeholder="Password"
              value={this.state.password}
              type="text"
              name="password"
              onChangeText={(value) => {
                  this.setState({
                      password: value
                  })
              }}
              />
              </Item>

              <Button rounded style={styles.btn}
              onPress={this.getUser}
                >
            <Text style={styles.btnTxt}>Login</Text>
            </Button>

            <Text style={styles.forgotpass}>Forgot Password?</Text>


            <Text style={styles.singleTxt}>Create Your Account with Signup</Text>

            <Button rounded style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("SignupScreen")
            
        }}
        ><Text style={styles.btnTxt}>Signup</Text></Button>
        
        <Button rounded style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("WelcomeScreen")
            
        }}
        ><Text style={styles.btnTxt}>Back</Text></Button>

{/* <Button rounded style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("HomeScreen")
            
        }}
        ><Text style={styles.btnTxt}>home</Text></Button> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
    
    btn: {
        alignSelf:'center',
        backgroundColor: "#4cd137",
       
        padding:10,
        marginTop:10,
        marginBottom:10,
        width:200
      },
      btnTxt:{
        marginLeft:65,
        color:'white',
      },
      header:{
        backgroundColor:"#4cd137",
        marginBottom:30
        
      },
      headerTxt:{
        alignSelf:'center',
        fontSize:20,
        color:'white',
       //backgroundColor:'#e84393',
        fontWeight:'bold',
        //fontStyle:'italic',
        paddingLeft:60,
        paddingRight:60,
      },
      pgeTit:{
          alignSelf:'center',
          color:'#4cd137',
          marginTop:20,
         // marginBottom:5,
          fontSize:20,
          fontWeight:'bold'
      },
      input:{
         borderColor:'#4cd137' ,
         width:300,
         alignSelf:'center',
         marginTop:20,
         color:'white'
      },
      singleTxt:{
          alignSelf:'center',
          color:'black'
      },
      forgotpass:{
        alignSelf:'center',
        color:'#636e72',
        marginBottom:10
      },
      screenColor:{
        //backgroundColor:'black'
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
    

});

