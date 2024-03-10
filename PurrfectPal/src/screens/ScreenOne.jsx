import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import Button from '../components/Button'
import SkipButton from '../components/SkipButton'

const ScreenOne = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.SafeAreaStyle}>
            <StatusBar hidden = {true} />
            <View style = {styles.SkipBtnView}>
                <SkipButton onPress= {() => navigation.navigate('screenthree')}/>
            </View>

            <View style = {styles.Details}>
                <View style= {styles.ImageContainer}>
                    <Image source={require('../../assets/Images/GSDog.png')}  style = {styles.ImageStyle}/>
                </View>
                <View style ={styles.textView}>
                    <Text style = {styles.Heading}>Need a Pet ?</Text>
                    <Text style = {styles.cont}>Want to have a new pet for your home? {"\n"}PurrfectPal is the best place {"\n"}for that</Text>
                </View>
                <View style= {styles.buttonView}>
                    <Button bgcolor = '#F4A34B' buttontext = 'Next' paddingtop = {5} onPress= {() => navigation.navigate('screentwo')} />
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

    SkipBtnView: {
        // backgroundColor: 'pink',
        height: 100,
        width: '100%',
        color: 'black',
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        
    },

    Details: {
        marginTop: 75,
        // borderWidth: 2,
        // borderColor: 'black',
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
        width: 250,
        height: 250,
    },

    textView: {
        alignItems: 'center'
    },
    Heading: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Poppins-Medium'
    },
    cont: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    buttonView: {
        marginTop: 40,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
    }
})

export default ScreenOne;
