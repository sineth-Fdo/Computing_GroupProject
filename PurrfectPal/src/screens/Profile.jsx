import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'
import { width, height, SmallTextWidth, bigTextWidth } from '../global/Dimensions'
import ProfileButtons from '../components/ProfileButtons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogOut from '../components/LogOut';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style = {styles.areaStyles}>
      <StatusBar hidden = {false}/>
      <View style = {styles.profileContainer}>
        <View style = {styles.imageContainer}>
          <Image
            source={require('../../assets/Images/user-default.jpg')}
            style = {styles.imageStyles}
          />
        </View>
        <Text style = {styles.headerStyles}>User</Text>
        <View style = {{flexDirection: 'row'}}>
          <Ionicons name="location-outline" size={16} color="#000" solid />
          <Text style = {styles.textStyles}>Gampaha District, Western Province</Text>
        </View>
        <ProfileButtons width = "100%" height = {45} mVertical = {10} btnText = "View Profile" boColor = "#345C8C" bgColor = "rgba(255,163,75,0.7)" onPress = {() => navigation.navigate('ViewProfile') } />
        <ProfileButtons width = "100%" height = {45} mVertical = {10} btnText = "About Us" boColor = "#345C8C" bgColor = "rgba(255,163,75,0.7)"/>
        <LogOut width = '60%' height= {45} btnText = 'Log Out' mTop = {200} onPress = {() => navigation.navigate('') }/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  areaStyles: {
    width : width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileContainer: {
    width: width - 100,
    height: height - 50,
    // borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 60,
  },

  imageContainer: {
    width: 130,
    height: 130,
    borderColor: '#F4A34B',
    borderWidth: 2,
    borderRadius: 1000,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyles: {
    width: 100,
    height: 100,
    borderRadius: 1000,
  },

  headerStyles: {
    fontSize: bigTextWidth / 1.2,
    fontFamily: 'Poppins-SemiBold',
    color: '#111F2F'

  },

  textStyles: {
    fontSize: SmallTextWidth,
    fontFamily: 'Poppins-Regular',
    color: '#111F2F',
    marginBottom: 30,
  },

})

export default Profile

