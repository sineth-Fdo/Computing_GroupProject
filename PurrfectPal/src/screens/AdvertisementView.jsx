import { firebase } from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import { SmallTextWidth, height, width } from '../global/Dimensions';
import SkipButton from '../components/BackButton';

const AdvertisementView = () => {
    
    const route = useRoute();
    const { adId, email } = route.params;
    const navigation = useNavigation();

    const openUrl = async(url) => {
        await Linking.openURL(url);
    };



    const [modal, setModal] = useState(false); 
    const [advertisement, setAdvertisement] = useState([]);
    const [user, setUser] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [ownerEmail,setOwnerEmail] = useState('');
    

    // get one advertisement
    const getAdvertisement = async () => {
        try {
            const adSnapshot = await firebase.firestore()
                .collection('advertisements')
                .doc(adId)
                .get();
                
            if (adSnapshot.exists) {
                const adData = adSnapshot.data();
                setAdvertisement(adData);
                setMainImage(adData.mainImage);
                console.log(adData.ownerEmail)
                setOwnerEmail(adData.ownerEmail);
            } else {
                console.log('No advertisement found');
            }
        } catch (error) {
            console.error('Error fetching advertisement:', error);
        }
    };

    // user data fetch
// user data fetch
const getUserData = async () => {
    try {
        console.log("Owner Email:", ownerEmail); // Log ownerEmail to check its value
        if (ownerEmail) {
            const userSnapshot = await firebase.firestore()
                .collection('users')
                .where('email', '==', ownerEmail) 
                .get();
                
            if (userSnapshot.docs.length > 0) {
                const userData = userSnapshot.docs[0].data();
                setUser(userData);
                console.log("User Data:", userData); // Log userData to check the fetched user data
            } else {
                console.log('No user found with the provided email');
            }
        } else {
            console.log('Owner email is not set');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

    
    useEffect(() => {
        setModal(true);
        getAdvertisement();
        
        
    },[]);

    useEffect(() => {
        getUserData();
    },[ownerEmail]);

    const handleImagePress = (image) => {
        setMainImage(image);
    };

    return (
        <SafeAreaView style = {{flex : 1}}>
                <View>

                </View>
            <View style = {{ width : width, height : width /1.1}}>
                <Image 
                    source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/adAdvertisements%2F${mainImage}?alt=media&token=d7eb0a17-345b-4ea5-9e5e-4087e21feb3e` }}
                    style = {{width : width, height : '100%'}}
                />

            </View>
            <Modal 
                visible = {modal}
                transparent = {true}
                animationType = 'slide'
            >
                    <TouchableOpacity 
                        style = {{position : 'absolute',top : 30,left : 20, zIndex : 1000}}
                        onPress={() => {navigation.navigate('Home')}}
                        >
                        <Ionicons name="chevron-back" size={28} color="#fff"  solid style = {{marginBottom : 5}} />

                    </TouchableOpacity>
                <View style = {{borderWidth : 1,width : width, height : height / 1.7, backgroundColor : '#fff', borderTopLeftRadius : 20, borderTopRightRadius : 20, position : 'absolute', bottom : 0}}>
                    <View style = {{paddingHorizontal : SmallTextWidth ,paddingTop : 30,paddingBottom : 100,width : '100%'}}>
                        <View style = {{height : 80,width : '100%',flexDirection : 'row',justifyContent : 'space-around',alignItems : 'center'}}>
                            {advertisement.images && advertisement.images.map((image, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
                                    
                                        <Image 
                                            source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/adAdvertisements%2F${image}?alt=media&token=d7eb0a17-345b-4ea5-9e5e-4087e21feb3e` }}
                                            style = {{width : 60, height : 60,borderWidth : 1,borderColor : '#000',borderRadius : 10}}
                                        />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <ScrollView >
                            <Text style = {{marginTop : 20,marginBottom : 10,fontSize : SmallTextWidth * 2.4,fontFamily : 'Poppins-SemiBold',color : '#000' }}>{advertisement.title}</Text>
                            <View style = {{height : 40, width : '100%',flexDirection : 'row'}}>
                                <View style = {{width : '40%',height : '100%',flexDirection : 'row',justifyContent : 'start',alignItems : 'center'}}>
                                    <Ionicons name="location-outline" size={16} color="#000" solid style = {{marginBottom : 5}} />
                                    <Text style = {{fontSize : SmallTextWidth ,fontFamily : 'Poppins-Medium',color : '#000'}}>{advertisement.district}</Text>
                                </View>
                                <View style = {{width : '60%',height : '100%',justifyContent : 'center',alignItems : 'flex-end'}}>
                                    <Text style = {{fontSize : SmallTextWidth * 1.8 ,fontFamily : 'Poppins-Medium',color : '#000'}}>{advertisement.purpose === 'sale' ? `Rs. ${advertisement.price}` : "For Adoption" }</Text>
                                </View >

                            </View>

                            <View style = {{marginVertical : 20,height : 'auto',width : '100%',flexDirection : 'row',justifyContent : 'space-around',alignItems : 'center'}}>
                                    <View style = {{width : '28%', height : 100,borderWidth : 1,borderColor : '#000',borderRadius : 10,justifyContent : 'center',alignItems : 'center' , backgroundColor : '#D0DEEE',}}>
                                        <Text style = {{fontSize : SmallTextWidth + 4,color : '#000',}}>{advertisement.gender}</Text>
                                        <Text style = {{fontSize : SmallTextWidth + 5,color : '#345C8C',bottom : 0,position :'absolute',paddingBottom : 7}}>Gender</Text>
                                    </View>
                                    
                                    <View style = {{width : '28%', height : 100,borderWidth : 1,borderColor : '#000',borderRadius : 10,justifyContent : 'center',alignItems : 'center' , backgroundColor : '#D0DEEE'}}>
                                        <Text style = {{fontSize : SmallTextWidth + 4,color : '#000',}}>{advertisement.bread}</Text>
                                        <Text style = {{fontSize : SmallTextWidth + 5,color : '#345C8C',bottom : 0,position :'absolute',paddingBottom : 7}}>Breed</Text>
                                    </View>
                                    
                                    <View style = {{width : '28%', height : 100,borderWidth : 1,borderColor : '#000',borderRadius : 10,justifyContent : 'center',alignItems : 'center' , backgroundColor : '#D0DEEE'}}>
                                        <Text style = {{fontSize : SmallTextWidth + 4,color : '#000',}}>{advertisement.purpose}</Text>
                                        <Text style = {{fontSize : SmallTextWidth + 5,color : '#345C8C',bottom : 0,position :'absolute',paddingBottom : 7}}>Purpose</Text>
                                    </View>
                                    

                            </View>

                            <View style = {{marginVertical : 20,height : 70,width : '100%',flexDirection : 'row',}}>
                                    <View style = {{width : '60%',flexDirection : 'row'}}>
                                        <View style = {{width : '30%',height : '100%',justifyContent : 'center',alignItems : 'center'}}>

                                                {
                                                    
                                                    user.profilePic ? (
                                                        <>
                                                            <Image 
                                                                source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/users%2F${user.profilePic}?alt=media&token=d33b3e86-8008-49dd-9734-36f5405d44b9` }}
                                                                style = {{width : 50, height : 50,borderWidth : 1,borderColor : '#000',borderRadius : 100}}
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Image source={require('../../assets/Images/user-default.jpg')} style = {{width : 50, height : 50,borderWidth : 1,borderColor : '#000',borderRadius : 100}} />
                                                        </>
                                                    )
                                                    
                                                }
                                                
                                                
                                        </View>
                                        <View style = {{width : '70%',height : '100%',alignItems : 'start',justifyContent : 'center'}}>
                                            <Text style = {{fontSize : SmallTextWidth + 4,color : '#345C8C',}}>Posted By :</Text>
                                            <Text style = {{fontSize : SmallTextWidth ,color : '#000',}}>{user.name}</Text>
                                        </View>
                                    </View>
                                    <View style = {{width : '40%'}}>
                                    <View style = {{width : '100%',height : '100%',alignItems : 'end',justifyContent : 'center'}}>
                                            <Text style = {{fontSize : SmallTextWidth + 4,color : '#345C8C',}}>Posted On :</Text>
                                            <Text style = {{fontSize : SmallTextWidth ,color : '#000',}}>{advertisement.Date}</Text>
                                        </View>
                                    </View>
                            </View>
                            
                            <Text style = {{fontSize : SmallTextWidth * 2,color : '#345C8C',}}>Age : {advertisement.ageYear == '' ? `${advertisement.ageMonth} Month` : `${advertisement.ageYear} Year ${advertisement.ageMonth} Month`}</Text>

                            <View  style = {{marginVertical : 20,height : 'auto',width : '100%',}}>
                                
                                <Text style = {{fontSize : SmallTextWidth * 2,color : '#345C8C',}}>Description</Text>
                                <Text style = {{fontSize : SmallTextWidth + 2,color : '#000', fontFamily : 'Poppins-SemiBold',marginVertical : 10}}>{advertisement.description}</Text>
                                    

                            </View>
                            <View  style = {{marginVertical : 20,height : 'auto',width : '100%',}}>
                                
                                <Text style = {{fontSize : SmallTextWidth * 2,color : '#345C8C',}}>Vaccination Status</Text>
                                <Text style = {{fontSize : SmallTextWidth + 2,color : '#000', fontFamily : 'Poppins-SemiBold',marginVertical : 10}}>{advertisement.vaccination}</Text>
                                    

                            </View>
                            <View  style = {{marginVertical : 20,height : 'auto',width : '100%',}}>
                                
                                <Text style = {{fontSize : SmallTextWidth * 2,color : '#345C8C',}}>Health Status</Text>
                                <Text style = {{fontSize : SmallTextWidth + 2,color : '#000', fontFamily : 'Poppins-SemiBold',marginVertical : 10}}>{advertisement.health}</Text>
                                    

                            </View>
                            <View style = {{height : 60, flexDirection : 'row',justifyContent : 'center' }}>
                                        <View style = {{width : '27%',height : '100%',justifyContent : 'center',alignItems : 'center'}}>
                                                
                                            
                                            <TouchableOpacity
                                                onPress = {() => {openUrl(`tel:${user.phone}`)}}
                                                style = {{width : 60,height : '100%',justifyContent : 'center',alignItems : 'center',borderRadius : 100, backgroundColor : '#D0DEEE'}}>
                                                <Ionicons name="call" size={26} color="#345C8C" solid style = {{}} />
                                            </TouchableOpacity>
                                            
                                                
                                                
                                        </View>
                                        <View style = {{width : '27%',height : '100%',justifyContent : 'center',alignItems : 'center'}}>
                                                
                                            
                                            <TouchableOpacity 
                                                onPress = {() => {openUrl(`mailto:${user.email}`)}}
                                                style = {{width : 60,height : '100%',justifyContent : 'center',alignItems : 'center',borderRadius : 100, backgroundColor : '#D0DEEE'}}>
                                                <Ionicons name="mail" size={26} color="#345C8C" solid style = {{}} />
                                            </TouchableOpacity>
                                            
                                                
                                                
                                        </View>
                                
                                    
                            </View>

                                <LoginSubmitBtn TextName = 'Chat' onPress = {() => {console.log('Contact Seller')}}/>
                                    
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default AdvertisementView

const styles = StyleSheet.create({})
