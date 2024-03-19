import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SmallTextWidth, height, width } from '../../global/Dimensions';

const AdoptionCard = (props) => {

    const { BigTitle } = props;

    return (
        <TouchableOpacity style = {{width : width /1.8, height : width /1.4, marginLeft : 20,marginRight : 10,marginBottom :BigTitle == "For Sale" ? 100 : 10,elevation :4,backgroundColor : 'white',borderRadius : 10}}>
            <View style = {{width : '100%',backgroundColor : 'white',borderRadius : 10}}>
                <Image source={require('../../../assets/Images/great-dane.jpg')} style={{width : '100%', height : width/2.1, borderRadius : 10,borderBottomRightRadius : 33}} />
            </View>
            <View style = {{width : '100%',height : 'auto',paddingTop : SmallTextWidth /1.2 ,paddingHorizontal : 15 , justifyContent : 'space-around',alignItems : 'center'}}>
                <Text style = {{color : '#000',fontFamily : 'Poppins-Medium',fontWeight : 700}}>Great Dane Puppy For Sale For Sale For Sale</Text>
                <View style = {{width : '100%' , justifyContent : 'center', alignItems : 'center',paddingVertical : 5}}>
                    <Text style = {{color : '#000',fontSize : 12, fontFamily : 'Poppins-SemiBold',fontWeight : 100,}}>{BigTitle == "For Adoption" ? "3 Months" : "LKR 100,000"}</Text>
                
                </View>
            </View>
            
            
    </TouchableOpacity>
    )
}

export default AdoptionCard

const styles = StyleSheet.create({})