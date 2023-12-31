import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})