import React, { Component } from 'react'
import { Text, View ,StyleSheet, TouchableOpacity } from 'react-native'

const Articles = () => {

          return (
               <View style={styles.container}>
                    <View style={styles.articlesContainer}>
                    <Text style={styles.heading}>
                    Welcome to the Authorized Screen
                    </Text>

                    <Text style={styles.contant}>
                    You Are logged in from firebase
                    </Text>

                    <TouchableOpacity style={{padding:20}}>                  
                     <Text style={{color:'#D35400'}}>Logout</Text>
                     </TouchableOpacity>

 
                    </View>
               </View>
          )
     
}


const styles = StyleSheet.create({

     container:{
          flex:1,
          justifyContent: 'center',
          alignItems:'center'
         
     },

     articlesContainer:{
          padding:10,
          //borderBottomWidth: 5

     },

     heading:{
          fontSize:22,
          color: 'black',
          
          marginBottom:10
     },

     contant:{
          marginTop:10,
          fontSize:20
     }

})

export default Articles;