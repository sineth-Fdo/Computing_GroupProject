import { StyleSheet, Text, View, SafeAreaView,Image, ScrollView, StatusBar} from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { width, height, SmallTextWidth, bigTextWidth } from '../global/Dimensions'
import ProfileButtons from '../components/ProfileButtons'

const ViewProfile = () => {
    const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle = {styles.scrollStyles}>
        <StatusBar hidden = {false}/>
        <View style = {styles.backBtnView}>
            <BackButton onPress = {() => navigation.navigate('Profile')} />
        </View>
        <View style = {styles.imageView}>
        <Image
            source={require('../../assets/Images/user-default.jpg')}
            style = {styles.imageStyles}
        />
        </View>
        <View style = {styles.infoView}>
            <View style = {styles.headerView}>
                <Text style = {styles.headerStyles}>Personal Information</Text>
            </View>
            <View style = {styles.dataView}>
                <Text style = {styles.dataHead}>Username</Text>
                <Text style = {styles.data}>Kasun Sandaruwan</Text>
                <Text style = {styles.dataHead}>Email Address</Text>
                <Text style = {styles.data}>kasun@gmail.com</Text>
                <Text style = {styles.dataHead}>Mobile Number</Text>
                <Text style = {styles.data}>079 - 856951121</Text>
                <Text style = {styles.dataHead}>Address</Text>
                <Text style = {styles.data}>659/B, Koswatte Road, Medagama</Text>
                <Text style = {styles.dataHead}>District, Province</Text>
                <Text style = {styles.data}>Gampaha District, Western Province</Text>
            </View>
            <View style = {styles.buttonView}>
                <ProfileButtons height = {45} width = "90%" onPress = {() => navigation.navigate('EditProfile')} btnText = 'Edit Profile' bgColor = "rgba(255,163,75,0.7)" boColor = "#345C8C"/>
            </View>
        </View>
    </ScrollView>
  )
}

export default ViewProfile

const styles = StyleSheet.create({
    scrollStyles: {
        width : width,
        height: height,
        alignItems: 'center'
      },
    backBtnView: {
        // backgroundColor: 'pink',
        height: 90,
        width: '100%',
        color: 'black',
        alignItems: 'flex-start',
        justifyContent:'flex-end',
        
    },

    imageView: {
        // backgroundColor: 'pink',
        height: 100,
        width: '100%',
        alignItems: 'center'
    },

    imageStyles: {
        width: 100,
        height: 100,
        borderRadius: 1000,
    },

    infoView: {
        marginVertical: 20,
        width : width - 20,
        height: 'auto',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: "#739BCB",
        borderRadius: 20,
        padding: 20,
    },

    headerView:{
        width: '100%',
        height: "auto",
        alignItems: 'center',
    },

    headerStyles:{
        fontSize: bigTextWidth/1.6,
        color: '#000',
        alignItems: 'center',
        fontFamily: 'Poppins-SemiBold',
    },

    dataView:{
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
    },

    dataHead: {
        color: '#345C8C',
        fontFamily: 'Poppins-Medium',
        fontSize: SmallTextWidth,
    },

    data:{
        color: '#111F2F',
        fontFamily: 'Poppins-Regular',
        fontSize: SmallTextWidth * 1.4,
        marginBottom: 10,
    },
    buttonView: {
        padding: 10,
        width: '100%',
        height: 'auto',
        alignItems: 'center'
    }
})