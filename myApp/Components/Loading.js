import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'

const Loading = () => {
     
          return (
               <View style={styles.container}>
                    <Text> LoginForm </Text>
               </View>
          )
     
}


const styles = StyleSheet.create({

     container:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor : 'red',
     }

})

export default Loading;