import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from 'react-native'
import Button from '../components/Button'
import React from 'react'

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.mainContainer}>
        <StatusBar hidden = {true} />
        <Image source={require('../../assets/Images/GetStarted.png')}  style = {styles.ImageStyle} />
        <View style= {styles.insideData}>
            <Button bgcolor = '#FBE0C3' buttontext = 'Get Started' paddingtop = {5} onPress= {() => navigation.navigate('screenone')} />
            <Text style = {styles.bottomText}>
                Complete few more steps to find the best partner{"\n"}for your life
            </Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
    },

    ImageStyle: {
        width: '100%',
        height: '100%'
    },

    insideData: {
        position: 'absolute',
        width: '100%',
        height: 'auto',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        top: 620,
        
    },


    bottomText: {
        paddingTop: 12,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        color: '#3C2104',
    }




})

export default GetStarted

