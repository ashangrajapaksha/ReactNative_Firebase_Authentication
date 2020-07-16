import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase';



class EmailAndPassword extends Component {

     state={
          email:'',
          Password:'',
          error:'',
          loading:false
     }
     onBottomPress=()=>{
          firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.Password)
          .then(this.onLoginSuccess)

     }

     onLoginSuccess = ()=>{
          this.setState({
               error:'',
               loading:false
          })

     }
     render() {
          return (
               <View style={styles.conatiner}>
                    <TextInput placeholder="Email" style={styles.input} value={this.state.email} 
                    onChange={email =>this.setState({email})} />

                    <TextInput placeholder="Password" style={styles.input} value={this.state.Password} 
                    onChange={Password=>this.setState({Password})}/>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
                    <Text style={styles.buttonText}>Login</Text>
                         
                    </TouchableOpacity>

                    <Text style={styles.error}>
                              {this.state.error}
                         </Text>
               </View>
          )
     }
}

const styles = StyleSheet.create({

     conatiner:{
        flex:1,
        marginTop:5,

     },

     input:{
          height:40,
          paddingLeft:10,
         // marginTop:100,
          marginBottom:15,
          marginLeft:25,
          marginRight:25,
          borderRadius:8,
          fontSize:15,
          backgroundColor:'#EAEDED',

     },

     error : {
          fontSize:15,
          color: 'red',
          alignSelf:'center',
          marginTop:15,
          
     },

     buttonText:{
          textAlign:'center',
          color:'#fff',
          fontSize:24,
          fontWeight:'bold'
     },
     buttonContainer:{
          backgroundColor:'#922B21',
          marginLeft:25,
          marginRight:25,
          padding:8,
          borderRadius:8,
     }

})


export default EmailAndPassword