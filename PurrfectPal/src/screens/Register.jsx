import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Alert, } from 'react-native';
import LoginTextBox from '../components/LoginTextBox';
import { width, height , SmallTextWidth} from '../global/Dimensions';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import GoogleBtn from '../components/GoogleBtn';
import { useNavigation } from '@react-navigation/native';
import KeyBoardAvoiding from '../global/KeyBoardAvoiding';
import auth from '@react-native-firebase/auth';

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

  const register = () => {
    if (!email || !password) {
      Alert.alert('Please fill in the required fields');
      return;
    }else {

      auth()
      .createUserWithEmailAndPassword(email, password).then(() => {
        Alert.alert('User account created');
        navigation.navigate('UserDetailsRegister');
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
               placeholder = "must be 6 characters long or more" />

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
