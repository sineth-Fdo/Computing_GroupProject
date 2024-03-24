import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';




const ProfileTopBar = (props) => {

    const { uName, uPic ,district,province} = props;
    const navigation = useNavigation();

    return (
            <View style = {styles.pBigContainer}>
            <View style = {styles.pLeftContainer}>
            <View style = {{borderColor : '#D0DEEE',borderRadius : 100}}>
            {
            uPic ?
                <Image source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/users%2F${uPic}?alt=media&token=d33b3e86-8008-49dd-9734-36f5405d44b9` }} style={styles.profileImage} /> :
                <Image source={require('../../assets/Images/user-default.jpg')} style={styles.profileImage} />
            }
                
            </View>

            <View style = {{justifyContent : 'center',alignItems : 'start',paddingHorizontal : 10}}>
                <Text style = {{fontSize : 18,color : '#000',fontFamily : 'Poppins-SemiBold'}}>{uName}</Text>

                <View style ={{flexDirection : 'row',}}>
                    <Ionicons name="location-outline" size={16} color="#000" solid />
                    <Text style = {{color : '#000'}}>{province}Province, {district} </Text> 
                </View>
            </View>
            </View>

            <View style = {{width : '10%',justifyContent : 'center',alignItems : 'center'}}>
            <TouchableOpacity 
                    onPress = {() => {navigation.navigate('Categories')}}
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