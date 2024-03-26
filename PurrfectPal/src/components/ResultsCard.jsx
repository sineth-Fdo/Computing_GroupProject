import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { bigTextWidth, SmallTextWidth, height, width } from '../global/Dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResultsCard = (props) => {
    const {image, title, district, purpose, date, price, onPress} = props;

  return (
    <TouchableOpacity 
        onPress={onPress}
        style = {styles.card}>
        
        <View style = {styles.imageContainer}>
            <Image
                source = {{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/adAdvertisements%2F${image}?alt=media&token=d7eb0a17-345b-4ea5-9e5e-4087e21feb3e` }}
                style = {styles.imageStyles}
            />
        </View>
        <View style = {styles.dataContainer}>
            <Text style = {styles.heading}>{title}</Text>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="location-outline" size={15} color="#000" solid 
                    style = {{marginRight: 5}}
                />
                <Text style = {styles.textStyles}>{district}</Text>
            </View>
            <View style = {{height: 35, width: 120, backgroundColor: '#FBE0C3', marginTop: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.labelStyles}>{purpose === 'adopt' || price === 0 ? 'Adoption' : price}</Text>
            </View>
            <View style = {{height: SmallTextWidth * 4, width: '100%',flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end',}}>
                <Image
                    source={require("../../assets/Images/date.png")}
                    style = {{marginRight: 5, marginBottom: 6}}
                />
                <Text style = {styles.dateStyles}>{date}</Text>
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
        borderColor: '#345C8C',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: SmallTextWidth,
        flexDirection: 'row',
        elevation : 5
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
        fontFamily: 'Poppins-Light',
        color : '#111F2F',
        
    }
})