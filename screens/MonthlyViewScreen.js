import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {  Button,Header, Footer, FooterTab,Card,CardItem,Body,Icon } from 'native-base';


export default class MonthlyViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic:''
    }
    this.getData()
  }

  getData = async () => {
    try {
        const value = await AsyncStorage.getItem('isLogged')
        if (value !== null) {
            console.log('0' + value)
            this.setState({ nic: value })
            this.getUser
        }
    } catch (e) {
        // error reading value
    }
}

getUser = () => {
  fetch('http://192.168.1.4:3000/user/getOneUser/' + this.state.nic, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => console.log(json))

}

  render() {
    const { nic } = this.props.route.params
    return (
      <View>
        <Header style={styles.header}>
              <Text style={styles.headerTxt}>RichCash</Text>
          </Header>

          <Text style={styles.pgeTit}> Overview</Text>

          <Text>ID : {nic}</Text>
          
          
        <Button rounded style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("HomeScreen")
            
        }}
        ><Text style={styles.btnTxt}>Back</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
  btn: {
      alignSelf:'center',
      backgroundColor: "#fd79a8",
      padding:10,
      marginTop:10,
      marginBottom:250,
      width:200
    },
    btnTxt:{
      marginLeft:65
    },
    header:{
      backgroundColor:"#fd79a8",
      marginBottom:30
      
    },
    headerTxt:{
      alignSelf:'center',
      fontSize:20,
     backgroundColor:'#e84393',
      fontWeight:'bold',
      fontStyle:'italic',
      paddingLeft:60,
      paddingRight:60,
    },
    pgeTit:{
        alignSelf:'center',
        color:'#e84393',
        marginTop:20,
       // marginBottom:5,
        fontSize:20,
        fontWeight:'bold'
    },
    input:{
       borderColor:'#e84393' ,
       width:300,
       alignSelf:'center',
       marginTop:20,
       color:'white'
    },
    singleTxt:{
        alignSelf:'center',
        color:'white'
    },
    forgotpass:{
      alignSelf:'center',
      color:'#636e72',
      marginBottom:10
    },
    screenColor:{
      //backgroundColor:'black'
    },
    Card:{
      borderRadius: 10,
      backgroundColor: '#686de0',
      borderWidth:1,
      height:100,
      
  },
  idText:{
      alignSelf:'center',
      fontSize:18,
      marginTop:15,
      color:'#4834d4',
      fontWeight:'bold',
      
      
  },
  footer: {
      backgroundColor: "#ff7675",
      marginTop:10
  },
  footerTxt:{
      fontSize:20,
      color:'black'
  },
  footerBtn:{
      marginRight:5,
      //paddingRight:50,
      //backgroundColor: "#fd79a8",
  },
  footerBtnTxt:{
      marginLeft:10,
      color:'white',
      fontWeight:'bold'


  }
  

});
