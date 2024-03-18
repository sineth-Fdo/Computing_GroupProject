import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoogleBtn from '../components/GoogleBtn';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import LoginTextBox from '../components/LoginTextBox';
import { SmallTextWidth, height, width } from '../global/Dimensions';
import KeyBoardAvoiding from '../global/KeyBoardAvoiding';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';





const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {

    GoogleSignin.configure({
      webClientId: '531138760190-j25ertb3vs0b1l70p6aqrh73legqm50j.apps.googleusercontent.com',
    });
  }, []);

  
  
  const GoogleBtnPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      
    } catch (error) {
      console.log('Google Sign-In Error:', error);
      // Handle Google Sign-In errors
    }
  };
  




  const handleEmailChange = (inputText) => {
    setEmail(inputText);
  };

  const handlePasswordChange = (inputText) => {
    setPassword(inputText);
  };

  

  const loginEmailAndPassword = () => {
    if (!email || !password) {
      Alert.alert('Please fill in the required fields');
      return;
    }else {

      auth().signInWithEmailAndPassword(email, password)
          .then((res) => {
            console.log(res)
            Alert.alert('Logged in successfully')
            navigation.navigate('Dashboard', {email : email})
          })
          .catch((error) =>{
            console.log(error)
            Alert.alert('Invalid Email or Password')
          })
    }

  };

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
        <Text style = {{color : 'black', fontSize : 35, fontFamily : 'Poppins-Bold'}}>Login</Text>
      </View>

      <View style={styles.downContainer}>
          <LoginTextBox
              TextName = "Email Address"
              onChangeText={handleEmailChange}
              value={email}
              secureTextEntry = {false}
              />

          <LoginTextBox
              TextName = "Password"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry = {true}
              />
    

          <View>
            <LoginSubmitBtn TextName = "Login" onPress = {loginEmailAndPassword}/>
          </View>

      <View style = {{backgroundColor : '#D0DEEE',width: width - 40, height : 1, marginVertical : 20}}></View>

          <GoogleBtn onPress={GoogleBtnPress}/>

            
          <View style = {{flexDirection : 'row', marginTop : 15}}>
            <Text style = {{color : '#000'}}>You don’t have an Account ?</Text>
            <TouchableOpacity
              onPress = {() => navigation.navigate('Register')}
            >
              <Text style = {{fontFamily : 'Poppins-Bold', color : '#000', textDecorationLine : 'underline'}}>Register</Text>
            </TouchableOpacity>
          
          </View>
      </View>




    </SafeAreaView>
    </KeyBoardAvoiding>
  );
};

export default Login;

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


});