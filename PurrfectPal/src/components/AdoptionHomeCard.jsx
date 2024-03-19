import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AdoptionCard from './subComponents/AdoptionCard';
import { SmallTextWidth } from '../global/Dimensions';

const AdoptionHomeCard = (props) => {
    const { BigTitle, } = props;

    return (
            <View style = {{width : '100%' ,height : 'auto',justifyContent : 'center',alignItems : 'center',marginTop : 20}}>
            <View style = {{ width : '100%' ,height : 'auto',borderColor : '#000',borderRadius : 20, paddingVertical : 10, }}>
                <View style = {{ flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between',paddingHorizontal : SmallTextWidth * 2, marginVertical : SmallTextWidth * 1 }}>
                    <Text style = {{color : '#000',fontSize : 25, fontFamily : 'Poppins-Bold',}}>{BigTitle}</Text>
                    <TouchableOpacity>
                        <Text style = {{color : '#000',fontSize : 13, fontFamily : 'Poppins-Medium' }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{justifyContent : 'center',}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
                        style = {{width : '100%',}}            
                    >
                        <AdoptionCard BigTitle = {BigTitle}/>
                        <AdoptionCard />
                        <AdoptionCard />

                    
                

                    </ScrollView>
                </View>
            </View> 
            </View> 
    )
}

export default AdoptionHomeCard

const styles = StyleSheet.create({})