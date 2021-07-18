import React, { Component } from 'react';
import { View, Text,StyleSheet,KeyboardAvoidingView,Alert } from 'react-native';
import {Button,Header, ListItem, CheckBox,Item,DatePicker,Body,Icon, Input, Card, CardItem } from 'native-base';


export default class AddExpenseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chechBoxOne: false,
      chechBoxTwo: false,
      nic:'',
      category:'',
      type:'',
      value:'',
      date:'',
      balance:'',
      displayname1:'',
      displayname2:''
      
    }
    this.getData()
    this.doRefresh()
  }

  doRefresh=()=>{
    const { nic } = this.props.route.params
    this.getExpense(nic)
    this.getIncome(nic)
}

getIncome(nic) {
  fetch('http://192.168.1.5:3000/trans/incexpenses/' + nic, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => this.setState({
          displayname1: (json[0].total)
      }))

}
getExpense(nic) {
  fetch('http://192.168.1.5:3000/trans/exexpenses/' + nic, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => this.setState({
          displayname2: (json[0].total)
      }))

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
  fetch('http://192.168.1.5:3000/user/getOneUser/' + this.state.nic, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => console.log(json))

}

  
  /* componentDidMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayo = mm + '/' + dd + '/' + yyyy;
    this.setState({
        date:todayo
    })
    console.log(todayo);
}  */

chechBoxOnePress = () => {
  this.setState({
      chechBoxOne: true,
      chechBoxTwo: false,
      type: 'Income'
  })
}
chechBoxTwoPress = () => {
  this.setState({
      chechBoxOne: false,
      chechBoxTwo: true,
      type: 'Expence'
  })
}

  AddRecord = () => {

    fetch('http://192.168.1.5:3000/trans/addTrans', {
    method: 'POST',
    body: JSON.stringify({
                  nic: this.state.nic,
                  type: this.state.type,
                  category: this.state.category,
                  value: this.state.value,
                  date: this.state.date
                  
    }),
    headers: {
       Accept : 'application/json',
      'Content-type': 'application/json'
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json),
  Alert.alert("Added Successfully"),
  this.clear()
  );

  }

  clear = () =>{
    this.setState({
      nic:"",
      category:"",
      type:"",
      value:"",
      date:""
    });
  }

  chechBoxOnePress = () => {
    this.setState({
        chechBoxOne: true,
        chechBoxTwo: false,
        type: 'Income'
    })
  }
  chechBoxTwoPress = () => {
    this.setState({
        chechBoxOne: false,
        chechBoxTwo: true,
        type: 'Expence'
    })
  }

  

  render() {
    const { nic } = this.props.route.params
    //const [text, onChangeText] = React.useState("Useless Text");
    
    return (
      <View /* style={{backgroundColor:'black'}} */>
          <KeyboardAvoidingView behavior='position' style={styles.keyView} enabled={true}>

            

        <Header style={styles.header}>
              <Text style={styles.headerTxt}>RichCash</Text>
          </Header>

          <Text style={styles.pgeTit}>Add Your Expense</Text>

          {/* <Card style={styles.card}>
            <CardItem></CardItem>
               <Text style={styles.cardTxt}>Income</Text>
               <Text  style={styles.cardTxt}
               value={this.state.balance}
               type="number"
               name="balance"
               onChangeText={(value) => {
                this.setState({
                    balance: value
                })
            }}
               > 0.00</Text>

             </Card> */}

                <Body style={styles.Body1}>
                        <Text>Income </Text>
                        <Text style={styles.TextSize}>Rs :{this.state.displayname2} </Text>
                    </Body>

                    <Body style={styles.Body2}>
                        <Text>Expense </Text>
                        <Text style={styles.TextSize}>Rs :{this.state.displayname1} </Text>
                    </Body>




          <Item rounded style={styles.input}>
              <Input 
              placeholder={nic}
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
              <Input placeholder="Category"
              value={this.state.category}
              type="text"
              name="category"
              onChangeText={(value) => {
                this.setState({
                    category: value
                })
            }}
              />
              </Item>

              <Text style={styles.txtType}>Select Type</Text>

              <ListItem style={styles.ListItem}>
                        <CheckBox checked={this.state.chechBoxOne}
                            onPress={this.chechBoxOnePress}
                            style={styles.CheckBox}
                            

                        />
                        <Body>
                            <Text>Income</Text>
                        </Body>

                        <CheckBox checked={this.state.chechBoxTwo}
                            onPress={this.chechBoxTwoPress}
                            style={styles.CheckBox} />
                        <Body>
                            <Text>Expence</Text>
                        </Body>
                    </ListItem>

              <Item rounded style={styles.input}>
              <Input placeholder="Amount"
              value={this.state.value}
              type="text"
              name="value"
              onChangeText={(value) => {
                this.setState({
                    value: value
                })
            }}
              />
              </Item>

              <Item rounded style={styles.input}>
              <Input placeholder="Date"
              value={this.state.date}
              type="text"
              name="date"
              onChangeText={(value) => {
                this.setState({
                    date: value
                })
            }}
              />
              </Item>

            

              <Button rounded style={styles.addBtn}
              onPress={this.AddRecord}
              type="submit"
                >
            <Text style={styles.btnTxt}>Add</Text>
            </Button>
      
        <Button rounded style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("HomeScreen")
            
        }}
        ><Text style={styles.btnTxt}>Back</Text></Button>
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
      marginTop:10,
      marginBottom:10,
      width:200
    },
    addBtn:{
      alignSelf:'center',
      backgroundColor: "#4cd137",
      padding:10,
      width:200,
      marginTop:20,
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
        marginBottom:20,
        fontSize:20,
        fontWeight:'bold'
    },
    
   
    keyView: {
    paddingBottom: 0
  },
  input:{
    borderColor:'#4cd137' ,
    width:300,
    alignSelf:'center',
    marginTop:10,
   // marginBottom:10,
    height:30
 },
 ListItem: {
  padding: 45,
  borderColor: '#fd79a8'

},
txtType:{
  paddingLeft:35,
  //paddingTop:5,
  //paddingBottom:0,

},
card:{
  marginTop:20,
  width:200,
  alignSelf:'center',
},
cardTxt:{
  color:'red',
  padding:10
},
Body1: {
  backgroundColor: '#f5f5f5',
  marginLeft: 13,
  marginRight: 13,
  marginBottom: 8,
  padding: 13,
  paddingLeft: 90,
  paddingRight: 90,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#05c46b'

},
Body2: {
  backgroundColor: '#f5f5f5',
  marginLeft: 13,
  marginRight: 13,
  marginBottom: 8,
  padding: 13,
  paddingLeft: 90,
  paddingRight: 90,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#05c46b'

},
TextSize: {
  fontSize: 10,
  fontStyle: 'normal',
  fontWeight: 'bold',
  
}

});


