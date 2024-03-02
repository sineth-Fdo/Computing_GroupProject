import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import GoogleBtn from '../components/GoogleBtn';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import LoginTextBox from '../components/LoginTextBox';
import { height, width } from '../global/Dimensions';
import KeyBoardAvoiding from '../global/KeyBoardAvoiding';
import { useNavigation } from '@react-navigation/native';

const UserDetailsRegister = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (inputText) => {
      setEmail(inputText);
    };
  
    const handlePasswordChange = (inputText) => {
      setPassword(inputText);
    };


      //
      const skipHandler = () => {
        navigation.navigate('Home');
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
          <Text style = {{color : 'black', fontSize : 35, fontFamily : 'Poppins-Bold'}}>Welcome</Text>
        </View>
        <View style={styles.downContainer}>
          <LoginTextBox
              TextName="Name"
              onChangeText={handleEmailChange}
              secureTextEntry = {false} value={email} />

          <LoginTextBox
              TextName="Username"
              onChangeText={handlePasswordChange}
              secureTextEntry = {false} value={password}
              />

          <View>
            <LoginSubmitBtn TextName="Submit" />
          </View>
        
          <GoogleBtn btnText = "Skip" onPress={skipHandler}/>
         
        </View>
      </SafeAreaView>
    </KeyBoardAvoiding>
  )
}

export default UserDetailsRegister

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