import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';



const Home = (props) => {

  const { email } = props.route.params;

  

  const [user, setUser] = useState(null);

  const getUserData = async () => {
    try {
      const userSnapshot = await firestore()
        .collection('users')
        .where('email', '==', email)
        .get();

      if (userSnapshot.docs.length > 0) {
        const userData = userSnapshot.docs[0].data();
        setUser(userData);
      } else {
        console.log('No user found with the provided email');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Text>{user.userName}</Text>
      <Text>{user.email}</Text>
      {user.profilePic ?
        <Image source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/users%2F${user.profilePic}?alt=media&token=d33b3e86-8008-49dd-9734-36f5405d44b9` }} style={styles.profileImage} /> :
        <Image source={require('../../assets/Images/user-default.jpg')} style={styles.profileImage} />}
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
