import { ScrollView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import CategoryBtn from '../components/CategoryBtn'
import { useNavigation, useRoute } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/firestore';
import { SmallTextWidth, height, width } from '../global/Dimensions';
import ResultsCard from '../components/ResultsCard'



const Categories = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cateName } = route.params;

  const [searchTerm, setSearchTerm] = useState('');
  const [advertisements, setAdvertisements]  = useState([]);
  const [category, setCategory]  = useState('');


  const handleSelectCategory = (category) => {

    

    setCategory(category);
    setSearchTerm(category);
  
  };



    // get all advertisements
    const getAdvertisements = async () => {
      try {
        const adSnapshot = await firebase.firestore()
          .collection('advertisements')
          .get();
          
          if (!adSnapshot.empty) {
            const adData = adSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAdvertisements(adData);
            adData.forEach(ad => {
                console.log(ad.id);
            });
        } else {
            console.log('No advertisements found');
        }
      } catch (error) {
        console.error('Error fetching advertisements:', error);
      }
    }

    const filteredAdvertisements = advertisements.filter(ad =>
      ad.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  useState(() => {
    getAdvertisements();
  } ,[searchTerm]);
  

  return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style = {styles.searchView}>
        <Text style= {styles.ViewHeaders}>Search</Text>
        <SearchBox placeholder = 'Search advertisements ...' width= "100%" bgColor = "#D0DEEE" value = {searchTerm} onChangeText = {(text) => setSearchTerm(text)}/>
      </View>
      <View style = {styles.CategoriesView}>
        <Text style= {styles.ViewHeaders}>Pet Categories</Text>

    {
      searchTerm.length > 0 ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}   
            style = {{height : width + 150, width : '100%',marginHorizontal : 0}}>
            
            <View style={{paddingVertical : 10, width: '100%', height: 'auto', justifyContent: 'flex-start', alignItems: 'center' }}>
              {filteredAdvertisements.map((item, index) => (
                <ResultsCard
                  key={index}
                  title={item.title}
                  district={item.district}
                  purpose={item.purpose}
                  date={item.Date}
                  image={item.mainImage}
                  price={item.price}
                  onPress= {() => {navigation.navigate('AdvertisementView', {adId : item.id})}}
                />
              ))}
            </View>
      </ScrollView>
        </>
      ) : (
        <>
      <View style={styles.categoryContainer}>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dog' onPress = {() => {handleSelectCategory('Dog')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/cat.png')} cateName= 'Cat' onPress = {() => {handleSelectCategory('Cat')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/hamster.png')} cateName= 'Hamster' fsize = {12} onPress = {() => {handleSelectCategory('Hamster')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/rabbit.png')} cateName= 'Rabbit' onPress = {() => {handleSelectCategory('Rabbit')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/bird.png')} cateName= 'Bird' onPress = {() => {handleSelectCategory('Bird')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/turtle.png')} cateName= 'Turtle' onPress = {() => {handleSelectCategory('Turtle')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/guineapig.png')} cateName= 'Guinea Pig' imgResize = {40} mb= {7} onPress = {() => {handleSelectCategory('Guinea Pig')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/hedgehog.png')} cateName= 'Hedgehog' onPress = {() => {handleSelectCategory('Hedgehog')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/horse.png')} cateName= 'Horse' onPress = {() => {handleSelectCategory('Horse')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/fish.png')} cateName= 'Fishe' onPress = {() => {handleSelectCategory('Fishe')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/farmanimals.png')} cateName= 'Farm Animal' fsize = {11} onPress = {() => {handleSelectCategory('Farm Animal')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/squirrel.png')} cateName= 'Squirrel' onPress = {() => {handleSelectCategory('Squirrel')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/mouse.png')} cateName= 'Mice' onPress = {() => {handleSelectCategory('Mice')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/snake.png')} cateName= 'Reptile' onPress = {() => {handleSelectCategory('Reptile')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/insects.png')} cateName= 'Insect' onPress = {() => {handleSelectCategory('Insect')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/amphibians.png')} cateName= 'Amphibian' onPress = {() => {handleSelectCategory('Amphibian')}}/>
            <CategoryBtn icon= {require('../../assets/Images/petIcons/more.png')} cateName= 'Other' imgResize = "0" onPress = {() => {handleSelectCategory('Other')}}/>
        </View>
        </>
      )
    }

    


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchView: {
    marginVertical: 40,
    height: 'auto',
    width: '90%',
  },

  ViewHeaders: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },

  CategoriesView: {
    height: 'auto',
    width: '90%',
  },

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    paddingBottom: 100,
  },
})

export default Categories

