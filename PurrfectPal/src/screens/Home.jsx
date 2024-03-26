import { Image, StyleSheet, Text, View, SafeAreaView,ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
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
  const [refreshing, setRefreshing] = useState(false);


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
    if (refreshing == true) {

      getUserData();
    }else {
      getUserData();
    }

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



  return (
    <SafeAreaView style={styles.container}>
        {/* profile View */}
        <ProfileTopBar 
            uName = {user.name}
            uPic = {user.profilePic}
            district = {user.district}
            province = {user.province}
        />

        <ScrollView 
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
               setRefreshing(false);

             }, 2000);
              
            }}
            />
          }
        >

      <View style = {{width : width , height : width /2,justifyContent : 'center',alignItems : 'center'  }}>
          <View style = {{backgroundColor: '#D0DEEE', width : '95%', height : '90%',borderRadius : 10,flexDirection : 'row'}}>
              <View style = {{ width : '50%',justifyContent : 'center',alignItems : 'center'}}>
                      <Image 
                        source={require('../../assets/Images/tips-logo.png')}
                        style={{ width: '80%', height: '80%', }}
                      />
              </View>
              <View style = {{ width : '50%'}}>
                    <View style = {{width : '100%',height : '50%',paddingHorizontal : 10}}>
                          <Text style = {{fontSize : 25,paddingVertical : 10,color : '#000',fontFamily : 'Poppins-SemiBold'}}>Tips For Your Pet</Text>
                    </View>
                    <View style = {{width : '100%',height : '50%'}}>
                          <TouchableOpacity style = {{backgroundColor: '#345C8C', width : '50%', height : '40%',justifyContent :'center',alignItems : 'center',borderRadius : 20,position : 'absolute',right : 20,bottom : 20,}}>
                              <Text style = {{color : '#fff',fontFamily : 'Poppins-SemiBold'}}>Tips</Text>
                          </TouchableOpacity>
                    </View>
              </View>
          </View>

      </View>

        {/* categories View */}
        <View style = {{width : '100%' ,height : 'auto',justifyContent : 'center',alignItems : 'center',}}>
        <View style = {{width : '93%' ,height : 'auto',borderWidth : 4,borderColor : '#D0DEEE',borderRadius : 20,paddingVertical : 10,paddingHorizontal : 5}}>
          <View>
            <Text style = {{color : '#000',fontSize : 25, fontFamily : 'Poppins-Bold',left : 10}}>Categories</Text>
          </View>

            <View style = {{flexDirection : 'row',flexWrap : 'wrap',justifyContent : 'center',}}>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' onPress = {() => {navigation.navigate('Categories',{cateName : 'Dog'})}}/>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/cat.png')} cateName= 'Cats' onPress = {() => {navigation.navigate('Categories',{cateName : 'Dog'})}}/>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/hamster.png')} cateName= 'Hamsters' fsize = {12} onPress = {() => {navigation.navigate('Categories',{cateName : 'Dog'})}}/>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/rabbit.png')} cateName= 'Rabbits' onPress = {() => {navigation.navigate('Categories',{cateName : 'Dog'})}}/>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/bird.png')} cateName= 'Birds' onPress = {() => {navigation.navigate('Categories',{cateName : 'Dog'})}}/>
                <CategoryBtn icon= {require('../../assets/Images/petIcons/turtle.png')} cateName= 'Turtles' onPress = {() => {navigation.navigate('Categories',{cateName : 'Dog'})}}/>
            </View>
        </View> 
        </View> 
         {/* categories View End */}
        
        
        
        {/* Cards View */}
          
        
            <AdoptionHomeCard BigTitle = "For Adoption" email = {email} purpose = "adopt" refreshing = {refreshing}  />
            <AdoptionHomeCard  BigTitle = "For Sale" email = {email} purpose = "sale" refreshing = {refreshing} />
      
        
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
