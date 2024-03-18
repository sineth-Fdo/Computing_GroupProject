import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { SmallTextWidth,bigTextWidth, height, width } from '../global/Dimensions';

const ScreenOne = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.SafeAreaStyle}>
            <StatusBar hidden = {true} />
            <View style = {styles.backBtnView}>
                <BackButton onPress = {() => navigation.navigate('screentwo')} />
            </View>

            <View style = {styles.Details}>
                <View style= {styles.ImageContainer}>
                    <Image source={require('../../assets/Images/DogNMan2.png')}  style = {styles.ImageStyle}/>
                </View>
                <View style ={styles.textView}>
                    <Text style = {styles.Heading}>Your Best Friend Is Waiting</Text>
                    <Text style = {styles.cont}>Let your love change the world ! {"\n"}Give a little space in your heart to a{"\n"}Loving Creature</Text>
                </View>
                <View style= {styles.buttonView}>
                    <Button bgcolor = '#F4A34B' buttontext = 'Login' paddingtop = {5} onPress= {() => navigation.navigate('Login')} />
                    <Button bgcolor = '#ffffff' buttontext = 'Create an Account' paddingtop = {5} onPress= {() => navigation.navigate('Register')} borderwidth = {1} bordercolor = '#B4630B' />
                </View>


            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaStyle : {
        backgroundColor: '#fff',
        height: '100%',
    },

    backBtnView: {
        // backgroundColor: 'pink',
        height: 130,
        width: '100%',
        color: 'black',
        alignItems: 'flex-start',
        justifyContent:'flex-end',
        
    },

    backButtonStyle: {
        marginWidth: 2,
        marginColor: 'black'
    },

    Details: {
        marginTop: 40,
        height: 400,
        width: '100%',
        color: 'black',
        flexDirection: 'column',
        alignItems: 'center',
    },

    ImageContainer: {
        backgroundColor: '#D0DEEE',
        width: 320,
        height: 320,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },

    ImageStyle: {
        width: 193,
        height: 164,
    },

    textView: {
        alignItems: 'center'
    },

    Heading: {
        color: 'black',
        fontSize: bigTextWidth / 1.2,
        fontFamily: 'Poppins-Medium'
    },
    cont: {
        color: 'black',
        fontSize: SmallTextWidth * 1.2,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    buttonView: {
        marginTop: 20,
        width: '100%',
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
        
        
    }
})

export default ScreenOne;
