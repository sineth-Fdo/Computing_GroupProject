import React from 'react';
import { Image, StatusBar, StyleSheet, View, Text } from 'react-native';



const Login = () => {
  const handleBack = () => {
    // Logic to handle going back
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={true}/>
       <Text>Login Page</Text>
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
