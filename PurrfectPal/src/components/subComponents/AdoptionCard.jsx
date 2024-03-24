import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SmallTextWidth, height, width } from '../../global/Dimensions';



const AdoptionCard = (props) => {

    const { BigTitle, purpose, image, title, ageYear, ageMonth, onPress } = props;




    return (
        
            <TouchableOpacity 
                style={{width: width / 1.8, height: width / 1.4, marginLeft: 20, marginRight: 10, marginBottom: BigTitle == "For Sale" ? 100 : 10, elevation: 4, backgroundColor: 'white', borderRadius: 10}}
                onPress={onPress}
                >
                <View style={{width: '100%', backgroundColor: 'white', borderRadius: 10}}>
                <Image 
                    source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/adAdvertisements%2F${image}?alt=media&token=d7eb0a17-345b-4ea5-9e5e-4087e21feb3e` }}
                    style={{width: '100%', height: width / 2.1, borderRadius: 10, borderBottomRightRadius: 33}} />
                </View>
                <View style={{width: '100%', height: 'auto', paddingTop: SmallTextWidth / 1.2, paddingHorizontal: 15, justifyContent: 'space-around', alignItems: 'center'}}>
                <Text style={{color: '#000', fontFamily: 'Poppins-Medium', fontWeight: 700}}>{title}</Text>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 5}}>
                    <Text style={{color: '#000', fontSize: 12, fontFamily: 'Poppins-SemiBold', fontWeight: 100,}}>{ageYear == '' ? `${ageMonth} Months` : `${ageYear} Years ${ageMonth} Months` }</Text>
                </View>
                </View>
            </TouchableOpacity>
            
        );
}

export default AdoptionCard

const styles = StyleSheet.create({})