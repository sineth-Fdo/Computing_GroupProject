import React from 'react'
import { Image, StatusBar, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
import LoginTextBox from '../components/LoginTextBox';
import { width, height , SmallTextWidth} from '../global/Dimensions';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import GoogleBtn from '../components/GoogleBtn';
import { useNavigation } from '@react-navigation/native';
import KeyBoardAvoiding from '../global/KeyBoardAvoiding';




const Register = () => {
  const navigation = useNavigation();

  return (
 

<KeyBoardAvoiding>
      <SafeAreaView style={styles.container}>
      
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor= '#fff'/>
      <View style={{ backgroundColor: 'white', height: height / 10 }}></View>
      
      <View style={styles.upContainer}>
        <Image
          source={require('../../assets/Images/dogface.png')}
          style={{
            width: 140,
            height: 110,

          }}
          />
        <Text style = {{color : 'black', fontSize : 35, fontFamily : 'Poppins-Bold'}}>Register</Text>
      </View>

      <View style={styles.downContainer}>
          <LoginTextBox TextName = "Email Address"/>
          <LoginTextBox TextName = "Password"/>

          <View>
            <LoginSubmitBtn TextName = "Register"/>
          </View>

      <View style = {{backgroundColor : '#D0DEEE',width: width -40, height : 1, marginVertical : 10}}></View>

          <GoogleBtn />

            
          <View style = {{flexDirection : 'row', marginTop : 15}}>
            <Text style = {{color : '#000'}}>You already have an Account ?</Text>
            <TouchableOpacity
              onPress = {() => navigation.navigate('Login')}
              >
              <Text style = {{fontFamily : 'Poppins-Bold', color : '#000', textDecorationLine : 'underline'}}>Login</Text>
            </TouchableOpacity>
          </View>
      </View>




    </SafeAreaView>
</KeyBoardAvoiding>

  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upContainer: {
    backgroundColor: 'white',
    width : width ,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downContainer: {
    backgroundColor: 'white',
    width : width ,
    height: 'auto',
    alignItems: 'center',
    flex: 1,
    paddingTop : width / 8,
    
  },

})