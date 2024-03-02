import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const Home = () => {

  const [animal , setAnimal] = useState([]);

    const getData = async () => {
        const animals = await firestore()
          .collection('animals')
          .get();
        console.log(animals.docs[0].data());
        setAnimal(animals.docs[0].data());
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <View>
      <Text>{animal.title}</Text>
      <Text>{animal.price}</Text>
      <Text>{animal.rating}</Text>
        <Image source={{uri: animal.image_url}} style={{width: 200, height: 200, borderRadius : 100}} />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})