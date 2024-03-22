import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import GoogleBtn from '../components/GoogleBtn';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import LoginTextBox from '../components/LoginTextBox';
import { height, width } from '../global/Dimensions';
import KeyBoardAvoiding from '../global/KeyBoardAvoiding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (inputText) => {
    setEmail(inputText);
  };

  const handlePasswordChange = (inputText) => {
    setPassword(inputText);
  };


  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('email', value);
      await AsyncStorage.setItem('firstTime', 'false');
      
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  

  const register = () => {
    if (!email || !password) {
      Alert.alert('Please fill in the required fields');
      return;
    }else {
      storeData(email);
      auth()
      .createUserWithEmailAndPassword(email, password).then(() => {
        navigation.navigate('UserDetailsRegister',{email : email});
      })
      .catch (error => {
        Alert.alert('Invalid Email or Password');
      })
    }
  }




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
          <LoginTextBox
              TextName="Email Address"
              onChangeText={handleEmailChange}
              secureTextEntry = {false} value={email} />

          <LoginTextBox
              TextName="Password"
              onChangeText={handlePasswordChange}
              secureTextEntry = {true} value={password}
              placeholder = "Must Be 6 Characters Long Or More" />
              

          <View>
            <LoginSubmitBtn TextName="Register" onPress={register}/>
          </View>
          <View style={{backgroundColor: '#D0DEEE', width: width - 40, height: 1, marginVertical: 10}}></View>
          <GoogleBtn />
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{color: '#000'}}>You already have an Account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontFamily: 'Poppins-Bold', color: '#000', textDecorationLine: 'underline'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyBoardAvoiding>
  );
}

export default Register;

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
