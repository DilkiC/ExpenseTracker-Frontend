import React, { Component } from 'react';
import { View, Text,StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import {  Button,Header, Input, Item } from 'native-base';


export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic:'',
      name:'',
      email:'',
      password:''
    };
  }

  saveCustomer = () => {
    console.log('dilki');
     fetch('http://192.168.1.5:3000/user/addUser', {
        method: 'POST',
        body: JSON.stringify({
            nic: this.state.nic,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json),
        Alert.alert("Registration Done"),
        this.props.navigation.navigate("LoginScreen"),
        this.clear()
        
        );
              
}

clear = () =>{
  this.setState({
    uid: "",
    name: "",
    email: "",
    password: ""
  });
}




/* getData(){
  fetch('http://192.168.1.4:3000/user/getAllUsers',{method:'GET'})
  .then((response) => response.json())
  .then((json) => console.log(json))
  
}
 */

  render() {
    return (
      <View /* style={styles.screenColor} */>
        <KeyboardAvoidingView behavior='position' style={styles.keyView} enabled={true}>
        <Header style={styles.header}>
              <Text style={styles.headerTxt}>RichCash</Text>
          </Header>

          <Text style={styles.pgeTit}>Signup</Text>
        

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
              <Input placeholder="Name"
              value={this.state.name}
              type="text"
              name="name"
              onChangeText={(value) => {
                this.setState({
                    name: value
                })
            }}
              />
              </Item>

              <Item rounded style={styles.input}>
              <Input placeholder="Email"
              value={this.state.email}
              type="text"
              name="email"
              onChangeText={(value) => {
                this.setState({
                    email: value
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
              onPress={this.saveCustomer}
              type="submit"
                >
            <Text style={styles.btnTxt}>Signup</Text>
            </Button>

            <Button rounded style={styles.btn}
         onPress={()=>{
          this.props.navigation.navigate("LoginScreen")
          
      }}
                >
            <Text style={styles.btnTxt}>Login</Text></Button>

          


            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
  btn: {
      alignSelf:'center',
      backgroundColor: "#4cd137",
      
      padding:10,
      marginTop:20,
      marginBottom:5,
      width:200
    },
    btnTxt:{
      color:'white',
      marginLeft:65
    },
    header:{
      backgroundColor:"#4cd137",
      marginBottom:30
      
    },
    headerTxt:{
      alignSelf:'center',
      fontSize:20,
     //backgroundColor:'#e84393',
      fontWeight:'bold',
      //fontStyle:'italic',
      paddingLeft:60,
      paddingRight:60,
      color:'white'
    },
    pgeTit:{
      alignSelf:'center',
      color:'#4cd137',
      marginTop:20,
      marginBottom:30,
      fontSize:20,
      fontWeight:'bold'
  },
  input:{
    borderColor:'#4cd137' ,
    width:300,
    alignSelf:'center',
    marginTop:20,
    height:40
 },
 keyView: {
  paddingBottom: 0
},
screenColor:{
  backgroundColor:'black'
}
  

});

