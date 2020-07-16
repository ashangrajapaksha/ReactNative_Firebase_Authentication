import React, { Component } from 'react'
import { Text, View ,StyleSheet, ImageBackground } from 'react-native'
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../image/images.jpg'
import firebase from 'firebase';


class App extends Component {

  state={
    loggedIn : null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyAesBgQkfI3my52yRa2mOtlCz6uY3rkyrM",
      authDomain: "chatup-45ae7s.firebaseapp.com",
      databaseURL: "https://chatup-45ae7s.firebaseio.com",
      projectId: "chatup-45ae7s",
      storageBucket: "chatup-45ae7s.appspot.com",
      messagingSenderId: "720953140883",
      appId: "1:720953140883:web:49b40e189dfc0f01168f66",
      measurementId: "G-VQX6LKHRCC"
    };
  
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({
          loggedIn:true
        })


      }else{
        this.setState({
          loggedIn:false
        })

      }
    })

  }


  renderContent = ()=>{
    switch(this.state.loggedIn){
      case true:
        return (<ImageBackground style={styles.container} source={BG} >
              <LoginForm/>
          </ImageBackground>
          
          )
      
      case false:
        return <Articles/>  
    }
  }


     render() {
          return (
               <View style={styles.container}>
                  {this.renderContent()}
               </View>
          )
        }
}


const styles = StyleSheet.create({
  
  container : {
    flex :1,
    justifyContent:'center',
    height:'100%',
    width:'100%',
  },

 


});

export default App;
