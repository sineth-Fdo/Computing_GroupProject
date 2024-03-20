import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Activity() {
  const navigation = useNavigation();

  const LogoutStorage = async () => {
    try {
      await AsyncStorage.removeItem('email')
      navigation.navigate('Login');
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={LogoutStorage}
      >
        <Text style = {{color : '#000', fontSize : 20}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})