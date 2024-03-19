import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';




const ProfileTopBar = () => {
    return (
            <View style = {styles.pBigContainer}>
            <View style = {styles.pLeftContainer}>
            <View style = {{borderColor : '#D0DEEE',borderRadius : 100}}>
                <Image source={require('../../assets/Images/user-default.jpg')} style={styles.profileImage} />
            </View>

            <View style = {{justifyContent : 'center',alignItems : 'start',paddingHorizontal : 10}}>
                <Text style = {{fontSize : 18,color : '#000',fontFamily : 'Poppins-SemiBold'}}>Rusith Tharindu</Text>

                <View style ={{flexDirection : 'row',}}>
                    <Ionicons name="location-outline" size={23} color="#000" solid />
                    <Text style = {{color : '#000'}}>Gampaha ,Western Province </Text> 
                </View>
            </View>
            </View>

            <View style = {{width : '10%',justifyContent : 'center',alignItems : 'center'}}>
            <TouchableOpacity 
                    style = {{borderWidth : 4,borderColor : '#D0DEEE',width : 47, height : 47, borderRadius : 100, justifyContent : 'center',alignItems : 'center'}}>
                
                    <Ionicons name="search" size={25} color="#000" solid />
            </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default ProfileTopBar

const styles = StyleSheet.create({
    pBigContainer : {
    
        marginTop : 10,
        width : '100%',
        height : 'auto',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingVertical : 20,
        paddingHorizontal : 10,
    },
        profileImage : {
            width : 60,
            height : 60,
            borderRadius : 50,
        },
        
        pLeftContainer : {
            borderColor : 'red',
            flexDirection : 'row',
            width : '90%',
            
        },  
})