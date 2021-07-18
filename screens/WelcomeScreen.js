import React, { Component } from 'react';
import { View,StyleSheet,Text, Image ,BackHandler,Alert} from 'react-native';
import { create } from 'react-test-renderer';
import { Button } from 'native-base';

import LoginScreen from './LoginScreen';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want exit from RichCash?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
 

  render() {
    return (
      <View style={styles.mainFlex}>
          
        <View style={styles.childFlex1}>
            <Text style={styles.childText}>RichCash</Text>
            {/* <Image
            source={require('../assets/lockdiary.jpg')}
            style={styles.img}
            /> */}
           
            </View>
        <View style={styles.childFlex2}>
        {/* <TouchableOpacity 
            onPress={()=>{
                this.props.navigation.navigate("LoginScreen")
            }}
          style={styles.touchOpa}
          
        >
          <Text>Getting Started</Text>
        </TouchableOpacity> */}

        <Button rounded style={styles.btnLogin}
        onPress={()=>{
            this.props.navigation.navigate("LoginScreen")
            
        }}
        ><Text style={styles.btnTxt}>Login</Text></Button>

        <Button rounded style={styles.btnExit}
        onPress={this.backAction.bind(this)}
        ><Text style={styles.btnTxt}>Exit</Text></Button>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    mainFlex:{
        flex: 1,
        //backgroundColor:"#fd79a8"
        backgroundColor:"white"
    },
    childFlex1:{
        //flex: 1,
        //backgroundColor:"#fd79a8"
        //backgroundColor:"black"
    },
    childFlex2:{
        //flex: 2,
        //backgroundColor:"#bdc3c7"
        //backgroundColor:'black'

    },
    childText:{
        alignSelf:'center',
        fontSize:30,
        marginTop:50,
        color:'#4cd137',
        paddingTop:200,
        //backgroundColor:'#e84393',
        //backgroundColor:'#e84393',
        fontWeight:'bold',
        //fontStyle:'italic',
        

    },
    btnLogin: {
        alignSelf:'center',
        backgroundColor: "#4cd137",
        padding:10,
        marginTop:50,
        width:200
      },
      btnExit: {
        alignSelf:'center',
        backgroundColor: "#4cd137",
        padding:10,
        marginTop:20,
        width:200
        
      },
      btnTxt:{
        marginLeft:65,
        color:'white'
      },
      screenColor:{
        backgroundColor:'black'
      },
      img:{
        alignSelf:'center',
        width:80,
        height:80,
        marginTop:10
        //marginBottom:150
    }
    

});


