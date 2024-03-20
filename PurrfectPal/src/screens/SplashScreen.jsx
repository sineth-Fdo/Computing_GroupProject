import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();


    useEffect(() => {
        const timeout = setTimeout(() => {
            getData();
        }, 3000); 

        return () => clearTimeout(timeout);
    }, [navigation]);


        const getData = async () => {
            try {
            const value = await AsyncStorage.getItem('email')
            const firstTime = await AsyncStorage.getItem('firstTime')
            if(value) {
                console.log(value)
                console.log(firstTime)
                navigation.navigate('Dashboard', {email : value});
            }else {
                if (firstTime === 'false') {
                    navigation.navigate('Login');
                    
                }else {
                    
                    navigation.navigate('getstarted');
                }
            }
            } catch(e) {
            // error reading value
            console.log(e)
            }
        };

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
    };

export default SplashScreen;