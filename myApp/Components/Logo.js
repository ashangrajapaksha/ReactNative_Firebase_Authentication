import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image } from 'react-native'

const Logo = () => {
     
          return (
               <View style={styles.container}>
               <Image source={{uri:'http://uilogos.co/img/logotype/circle.png'}} style={{height:150,width:150}}/>
          
               </View>
          )
     
}


const styles = StyleSheet.create({

     container:{
          marginTop:25,
         
     }

})

export default Logo;