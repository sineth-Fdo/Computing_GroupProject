import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import UserDetailsRegister from './src/screens/UserDetailsRegister';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="UserDetailsRegister" component={UserDetailsRegister}  options={{headerShown : false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
            <Stack.Screen name="Register" component={Register}  options={{headerShown : false}} />
            <Stack.Screen name="Home" component={Home}  options={{headerShown : true}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
