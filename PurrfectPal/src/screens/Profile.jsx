import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { width, height, SmallTextWidth, bigTextWidth } from '../global/Dimensions'
import ProfileButtons from '../components/ProfileButtons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogOut from '../components/LogOut';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Profile = (props) => {
  const navigation = useNavigation();
  const { email } = props.route.params;

  const [user, setUser] = useState(null);


    navigation.addListener('focus', () => {
      getUserData();
    });

    const LogoutStorage = async () => {
      try {
        await AsyncStorage.removeItem('email')
        navigation.navigate('Splash');
      } catch(e) {
        console.log(e)
      }
    }



    const getUserData = async () => {
      try {
        const userSnapshot = await firestore()
          .collection('users')
          .where('email', '==', email)
          .get();
          
        if (userSnapshot.docs.length > 0) {
          const userData = userSnapshot.docs[0].data();
          setUser(userData);
        } else {
          console.log('No user found with the provided email');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    useEffect(() => {
      getUserData();
    },[])

    return (
      <SafeAreaView style={styles.areaStyles}>
        <StatusBar hidden={false}/>
        <View style={styles.profileContainer}>
          {user && (  // Conditional rendering check
            <>
              <View style={styles.imageContainer}>
            {
              user.profilePic ?
                <Image source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/users%2F${ user.profilePic}?alt=media&token=d33b3e86-8008-49dd-9734-36f5405d44b9` }} style={styles.imageStyles} /> :
                <Image source={require('../../assets/Images/user-default.jpg')} style={styles.imageStyles} />
            }
                
              </View>
              <Text style={styles.headerStyles}>{user.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name="location-outline" size={16} color="#000" solid />
                <Text style={styles.textStyles}>Gampaha District, Western Province</Text>
              </View>
              <ProfileButtons width="100%" height={45} mVertical={10} btnText="View Profile" boColor="#345C8C" bgColor="rgba(255,163,75,0.7)" onPress={() => navigation.navigate('ViewProfile', {email : email})} />
              <ProfileButtons width="100%" height={45} mVertical={10} btnText="About Us" boColor="#345C8C" bgColor="rgba(255,163,75,0.7)"/>
              <LogOut width='60%' height={45} btnText='Log Out' mTop={200} onPress={LogoutStorage} />
            </>
          )}
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

