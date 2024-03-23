import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AdoptionCard from './subComponents/AdoptionCard';
import { SmallTextWidth } from '../global/Dimensions';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';


const AdoptionHomeCard = (props) => {

    const navigation = useNavigation();

    const { BigTitle, email, purpose  } = props;


    const [advertisements, setAdvertisements]  = useState();


    // get all advertisements
const getAdvertisements = async () => {
    try {
        const adSnapshot = await firebase.firestore()
            .collection('advertisements')
            .where('purpose', '==', purpose)
            .limit(5)
            .get();
            
        if (adSnapshot.docs.length > 0) {
            const adData = adSnapshot.docs.map(doc => doc.data());
            setAdvertisements(adData);
        } else {
            console.log('No advertisements found');
        }
    } catch (error) {
        console.error('Error fetching advertisements:', error);
    }
    }

    useEffect(() => {
        getAdvertisements();    
    },[]);

    

    return (
            <View style = {{width : '100%' ,height : 'auto',justifyContent : 'center',alignItems : 'center',marginTop : 20}}>
            <View style = {{ width : '100%' ,height : 'auto',borderColor : '#000',borderRadius : 20, paddingVertical : 10, }}>

                

                <View style = {{ flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between',paddingHorizontal : SmallTextWidth * 2, marginVertical : SmallTextWidth * 1 }}>
                    <Text style = {{color : '#000',fontSize : 25, fontFamily : 'Poppins-Bold',}}>{BigTitle}</Text>
                    <TouchableOpacity>
                        <Text 
                        onPress={() => {navigation.navigate('ResultsPage', {email : email, title : BigTitle, purposeParam : purpose})}}
                        style = {{color : '#000',fontSize : 13, fontFamily : 'Poppins-Medium' }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{justifyContent : 'center',}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
                        style = {{width : '100%',}}            
                    >
                    
                        {
                            advertisements && advertisements.map((ad, index) => {
                                return (
                                    <AdoptionCard BigTitle = {BigTitle} title = {ad.title} ageYear = {ad.ageYear} ageMonth = {ad.ageMonth} image = {ad.mainImage} purpose = {ad.purpose}/>
                                )
                            })
                        }
                    

                    
                    
                        
                    
                
                    </ScrollView>
                </View>
            </View> 
            </View> 
    )
}

export default AdoptionHomeCard

const styles = StyleSheet.create({})