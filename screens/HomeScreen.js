import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import {  Button,Header, Footer, FooterTab,Card,CardItem,Body } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { onChange } from 'react-native-reanimated';
import AddExpenseScreen from './AddExpenseScreen';
import HistoryScreen from './HistoryScreen';
import MonthlyViewScreen from './MonthlyViewScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Tab = createBottomTabNavigator();

//const Tab = createMaterialTopTabNavigator();


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nic:'',
        //name:''
    };
   
  }

 /*  passNICToAnotherScreen(pass) {
    console.log(pass + " - pass data");
    fetch('http://192.168.1.4:3000/user/getOneUser/' + pass, { method: 'GET' })
        .then((response) => response.json())
        .then((json) => console.log(json))
        
}
 */
  /* getUser = () => {
    fetch('http://192.168.1.4:3000/user/getOneUser/' + this.state.nic, { method: 'GET' })
        .then((response) => this.state.name)
        .then((json) => console.log(json))

} */

  render() {
    const { nic } = this.props.route.params     //getting login form nic
    //const {name} = this.props.route.params
    return (
      <View >
         <Header style={styles.header}>
              <Text style={styles.headerTxt}>RichCash</Text>
          </Header>

          <Text style={styles.pgeTit}>Manage Your Balance    </Text>
            
            {/* <Button
            onPress={this.getUser}
            ><Text>name</Text></Button> */}
          
          <Card style={styles.Card}>
                        <CardItem style={styles.CardItem}>
                            <Body>
                                <Text style={styles.idText}
                                >
                                    National ID : {nic}
                                </Text>
                                
                            </Body>
                        </CardItem>
                    </Card>



        <Button rounded style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("LoginScreen")
            
        }}
        ><Text style={styles.btnTxt}>login</Text></Button>

        <Image
            source={require('../assets/phoneAround.jpg')}
            style={styles.img}
            />

        {/* <Footer style={styles.Footer}>
            <FooterTab >
                <Button>
                    <Icon name="apps">
                        <Text style={styles.footerTxt}>Balance</Text>
                    </Icon>
                </Button>
                <Button>
                    <Icon name="apps">
                        <Text style={styles.footerTxt}>Balance</Text>
                    </Icon>
                </Button>
                <Button>
                    <Icon name="apps">
                        <Text style={styles.footerTxt}>Balance</Text>
                    </Icon>
                </Button>
            </FooterTab>
        </Footer> */}

        <Footer style={styles.footer}>
            <Button 
             onPress={()=>{
                this.props.navigation.navigate("AddExpenseScreen",{nic:nic})
                
            }}
            transparent rounded style={styles.footerBtn}><Text style={styles.footerBtnTxt}>Add Expense</Text></Button>
            <Button
             onPress={()=>{
                this.props.navigation.navigate("HistoryScreen" , {nic:nic})
                
            }} 
            transparent rounded style={styles.footerBtn}><Text style={styles.footerBtnTxt}>History</Text></Button>
            <Button 
            onPress={()=>{
                this.props.navigation.navigate("MonthlyViewScreen" , {nic:nic})
                
            }}
            transparent rounded style={styles.footerBtn}><Text style={styles.footerBtnTxt}>Monthly Overview</Text></Button>
        </Footer>



   {/*  <Tab.Navigator>
      <Tab.Screen name="AddExpenseScreen" component={AddExpenseScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
      <Tab.Screen name="MonthlyViewScreen" component={MonthlyViewScreen} />

    </Tab.Navigator> */}
   

 


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
        marginBottom:20,
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


    },
    img:{
        alignSelf:'center',
        width:200,
        height:230,
        //marginBottom:150
    }
    

});
