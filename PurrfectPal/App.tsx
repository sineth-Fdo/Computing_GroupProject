import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import UserDetailsRegister from './src/screens/UserDetailsRegister';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import ScreenThree from './src/screens/ScreenThree';
import GetStarted from './src/screens/GetStarted';
import Tabs from './navigation/Tabs';
import Categories from './src/screens/Categories'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="getstarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="screenone"
          component={ScreenOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="screentwo"
          component={ScreenTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="screenthree"
          component={ScreenThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserDetailsRegister"
          component={UserDetailsRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Tabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
