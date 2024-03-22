import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { bigTextWidth, SmallTextWidth, height, width } from '../global/Dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResultsCard = (props) => {
    const {image, title, district, purpose, date} = props;

  return (
    <TouchableOpacity style = {styles.card}>
        <View style = {styles.imageContainer}>
            <Image
                source={require('../../assets/Images/great-dane.jpg')}
                style = {styles.imageStyles}
            />
        </View>
        <View style = {styles.dataContainer}>
            <Text style = {styles.heading}>Great Dane Puppy For Sale</Text>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="location-outline" size={15} color="#000" solid 
                    style = {{marginRight: 5}}
                />
                <Text style = {styles.textStyles}>Gampaha District</Text>
            </View>
            <View style = {{height: 35, width: 120, backgroundColor: '#FBE0C3', marginTop: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.labelStyles}>Adoption</Text>
            </View>
            <View style = {{height: SmallTextWidth * 4, width: '100%',flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Image
                    source={require("../../assets/Images/date.png")}
                    style = {{marginRight: 5, marginBottom: 6}}
                />
                <Text style = {styles.dateStyles}>08th January 2024</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ResultsCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        height: width / 2.2,
        width : width - 20,
        borderWidth: 1,
        borderColor: '#345C8C',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: SmallTextWidth,
        flexDirection: 'row',
    },
    imageContainer: {
        height: '100%',
        width: '40%',
        paddingRight: 5,
    },
    dataContainer: {
        height: '100%',
        width: '60%',
        
    },
    imageStyles :{ 
        height: '100%',
        width: '100%',
        borderRadius: 5,
    },
    heading: {
        fontSize: SmallTextWidth * 1.45,
        fontFamily: 'Poppins-Medium',
        color: '#111F2F',
    },
    textStyles: {
        fontFamily: "Poppins-Light",
        color: '#111F2F',
    },
    labelStyles:{
        fontFamily: "Poppins-Regular",
        color: '#111F2F',
    },
    dateStyles: {
        fontFamily: 'Poppins-Light'
    }
})