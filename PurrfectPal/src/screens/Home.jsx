import { Image, StyleSheet, Text, View, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/firestore';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import CategoryBtn from '../components/CategoryBtn';
import { SmallTextWidth, height, width } from '../global/Dimensions';
import AdoptionHomeCard from '../components/AdoptionHomeCard';
import ProfileTopBar from '../components/ProfileTopBar';
import LottieView from "lottie-react-native";



const Home = (props) => {

  const { email } = props.route.params;
  const navigation = useNavigation();
  

  const [user, setUser] = useState(null);


  navigation.addListener('focus', () => {
    getUserData();
  
  });
  


  const getUserData = async () => {
    try {
      const userSnapshot = await firebase.firestore()
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
  };






  useEffect(() => {
    getUserData();
  
  },[])

  if (!user) {
    return (
      <View style={styles.containerLoading}>
        <LottieView
            source={require("../../assets/Images/Animated/catLoading.json")}
            style={{ width: 80, height: 80, }}
            autoPlay
            loop
          />
          <Text style = {{color : '#000'}}>Loading...</Text>
      </View>
    );
  }

  // return (
  //   <View style={styles.container}>
  //     <Text>{user.name}</Text>
  //     <Text>{user.userName}</Text>
  //     <Text>{user.email}</Text>
  //     {user.profilePic ?
  //       <Image source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/users%2F${user.profilePic}?alt=media&token=d33b3e86-8008-49dd-9734-36f5405d44b9` }} style={styles.profileImage} /> :
  //       <Image source={require('../../assets/Images/user-default.jpg')} style={styles.profileImage} />}
  //   </View>
  // )


  return (
    <SafeAreaView style={styles.container}>
        {/* profile View */}
        <ProfileTopBar 
            uName = {user.name}
            uPic = {user.profilePic}
        />

        <ScrollView>
        {/* categories View */}
        <View style = {{width : '100%' ,height : 'auto',justifyContent : 'center',alignItems : 'center',}}>
        <View style = {{width : '93%' ,height : 'auto',borderWidth : 4,borderColor : '#D0DEEE',borderRadius : 20,paddingVertical : 10,paddingHorizontal : 5}}>
          <View>
            <Text style = {{color : '#000',fontSize : 25, fontFamily : 'Poppins-Bold',left : 10}}>Categories</Text>
          </View>

            <View style = {{flexDirection : 'row',flexWrap : 'wrap',justifyContent : 'center',}}>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
                <CategoryBtn icon= {require('../../assets/Images/petIcons/cat.png')} cateName= 'Cats' />
                <CategoryBtn icon= {require('../../assets/Images/petIcons/hamster.png')} cateName= 'Hamsters' fsize = {12}/>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/rabbit.png')} cateName= 'Rabbits' />
                <CategoryBtn icon= {require('../../assets/Images/petIcons/bird.png')} cateName= 'Birds' />
                <CategoryBtn icon= {require('../../assets/Images/petIcons/turtle.png')} cateName= 'Turtles' />
            </View>
        </View> 
        </View> 
         {/* categories View End */}
        
        
        
        {/* Cards View */}
          
        
            <AdoptionHomeCard BigTitle = "For Adoption" email = {email} purpose = "adopt"  />
            <AdoptionHomeCard  BigTitle = "For Sale" email = {email} purpose = "sale" />
      
        
        {/* Cards View End */}
        
          </ScrollView>
    
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    
  },
  containerLoading: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    
    
  },


  
});
