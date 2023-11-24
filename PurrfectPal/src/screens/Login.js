import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import SubmitBtn from '../components/SubmitBtn'

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.LoginHero}>
        <Text style = {{alignSelf : 'center', fontSize : 45, fontWeight : 600, color: '#000',marginBottom : 20}}>Log In</Text>
        
      </View>
     
 

    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  container : {
    flex : 1,
    backgroundColor : '#BEBEBE',
    alignItems : 'center',
    justifyContent : 'center',

  },

  LoginHero : {
      backgroundColor : '#FFFFFF80',
      width : '94%',
      height : 'auto',
      borderRadius : 40,
      paddingVertical : 30,
      paddingHorizontal : 10,
    
  },

});