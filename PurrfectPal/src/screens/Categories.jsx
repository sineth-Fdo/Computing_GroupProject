import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SearchBox from '../components/SearchBox'
import CategoryBtn from '../components/CategoryBtn'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style = {styles.searchView}>
        <Text style= {styles.ViewHeaders}>Search</Text>
        <SearchBox placeholder = 'Search Anything ...'/>
      </View>
      <View style = {styles.CategoriesView}>
        <Text style= {styles.ViewHeaders}>Pet Categories</Text>
        <View>
          <CategoryBtn icon = {'dogface'}/>
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
  }
})

export default Categories

