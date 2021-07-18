import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,RefreshControl } from 'react-native';
import {  Button,Header, Footer, FooterTab,Card,CardItem,Body,Icon } from 'native-base';


export default class History extends Component {
  constructor(props) {
    super(props);

    this.scrollToTopAndRefresh = this.scrollToTopAndRefresh.bind(this);
    this.doRefresh = this.doRefresh.bind(this);

    this.state = {

      isLoading: true,
      refreshing: false,
  }
  this.getData()
  }


  scrollToTopAndRefresh() {
    this.flatlistref.scrollToOffset({ y: 0, animated: true });
    this.setState({ refreshing: true }, this.doRefresh);
  }

  doRefresh() {
    console.log('dsds')
    this.getData()
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  }

  getData(nic) {

    return fetch('http://192.168.1.5:3000/trans/allexpenses/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,

        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  flatlistref = null;



  render() {
    const { nic } = this.props.route.params
    return (
      <View >
        <Header style={styles.header}>
              <Text style={styles.headerTxt}>RichCash</Text>
          </Header>

          <Text style={styles.pgeTit}> History</Text>

          
          <FlatList
            ref={(ref) => this.flatlistref = ref}
            style={styles.Fatlist}
            data={this.state.dataSource}
            renderItem={({ item }) =>
              <View style={styles.Card}>

                <Text style={styles.Date}>{item.date}</Text>
                <Text style={styles.Date}>{item.nic}</Text>
                <Text style={styles.Value}>{item.value}</Text>
                <Text style={styles.Type}>Expense Or InCome : {item.type}</Text>
                <Text style={styles.Category}>Transaction Category : {item.category}</Text>
              </View>

            }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.doRefresh}
              />
            }
            keyExtractor={(item, index) => index.toString()}
          />


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
      backgroundColor: "#4cd137",
      padding:10,
      marginTop:10,
      marginBottom:300,
      width:200
    },
    btnTxt:{
      marginLeft:65,
      color:'white'
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
  Card: {
    backgroundColor: '#d6e6ff',
    marginLeft: 13,
    marginRight: 13,
    marginBottom: 8,
    padding: 13,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#287BFF'
  
  },
  

});
