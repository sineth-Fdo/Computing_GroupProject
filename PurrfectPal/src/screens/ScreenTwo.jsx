import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import Button from '../components/Button'
import BackButton from '../components/BackButton'

const ScreenOne = ({navigation}) => {
    return (
        <SafeAreaView style = {styles.SafeAreaStyle}>
            <StatusBar hidden = {true} />
            <View style = {styles.backBtnView}>
                <BackButton onPress = {() => navigation.navigate('screenone')} />
            </View>

            <View style = {styles.Details}>
                <View style= {styles.ImageContainer}>
                    <Image source={require('../../assets/Images/DogNMan1.png')}  style = {styles.ImageStyle}/>
                </View>
                <View style ={styles.textView}>
                    <Text style = {styles.Heading}>Know Your Pet Well</Text>
                    <Text style = {styles.cont}>Before getting your pet, learn them {"\n"}including their health, behaviour and {"\n"}many more </Text>
                </View>
                <View style= {styles.buttonView}>
                    <Button bgcolor = '#F4A34B' buttontext = 'Next' paddingtop = {5} onPress= {() => navigation.navigate('screenthree')} />
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
        marginTop: 45,
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
        width: 200,
        height: 200,
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
