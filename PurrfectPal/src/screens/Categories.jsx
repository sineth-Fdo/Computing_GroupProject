import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SearchBox from '../components/SearchBox'
import CategoryBtn from '../components/CategoryBtn'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
  const navigation = useNavigation();

  return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style = {styles.searchView}>
        <Text style= {styles.ViewHeaders}>Search</Text>
        <SearchBox placeholder = 'Search Anything ...'/>
      </View>
      <View style = {styles.CategoriesView}>
        <Text style= {styles.ViewHeaders}>Pet Categories</Text>
        <View style={styles.categoryContainer}>
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/cat.png')} cateName= 'Cats' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/hamster.png')} cateName= 'Hamsters' fsize = {12}/>
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
          <CategoryBtn icon= {require('../../assets/Images/petIcons/dog.png')} cateName= 'Dogs' />
        </View>
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
    fontSize : 25,
  },

  CategoriesView: {
    height: 'auto',
    width: '90%',
  },

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 'auto',
    paddingBottom: 100,
  }
})

export default Categories

