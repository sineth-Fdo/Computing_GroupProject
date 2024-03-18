import { firebase } from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import GoogleBtn from '../components/GoogleBtn';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import LoginTextBox from '../components/LoginTextBox';
import { bigTextWidth, height, width } from '../global/Dimensions';
import KeyBoardAvoiding from '../global/KeyBoardAvoiding';
import storage from '@react-native-firebase/storage';
import LottieView from "lottie-react-native";


const UserDetailsRegister = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const {email} = route.params;
    

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [selectImage, setSelectImage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);





    // Text Input Handlers
    const handleNameChange = (inputText) => {
      setName(inputText);
    };

    const handleUserNameChange = (inputText) => {
      setUserName(inputText);
    };

        // Modal Handlers
        const showModal = () => {
          setIsModalVisible(true);
      };
  
      const hideModal = () => {
          setIsModalVisible(false);
      };
  
      // Skip Handler
      const skipHandler = async () => {
          showModal();
          
          
          const uploadUri = selectImage;
                let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

                try {
                  await storage().ref('users/'+filename).putFile(uploadUri);
                  console.log('File uploaded to storage');

                }catch{(error) => {
                  console.log(error);
                }};


                firebase.firestore().collection('users').add({
                  name: "User",
                  userName: "New_User",
                  email: email,
                  profilePic : filename
              }).then(() => {
                  setName('');
                  setUserName('');
                  
                  navigation.navigate('Dashboard', {email : email});
              }).catch((error) => {
                  Alert.alert('Error Adding User');
              })

          setTimeout(() => {
              
              hideModal();
              navigation.navigate('Dashboard', { email: email });
          }, 2000);
      };



  




    // Image Picker Handler
    const ImagePicker = () => {
        let options = {
          storageOptions: {
            path: 'images',
          },
        };

        launchImageLibrary(options, response => {
          if (response.assets && response.assets.length > 0) {
              setSelectImage(response.assets[0].uri);
              console.log(response.assets[0].uri);
          } else {
              console.log('No image selected');
          }
      });
    };




    // Add The new user to the database
    const AddNewUser = async () => {
      if (!name || !userName) {
        Alert.alert('Please fill in the required fields');
        return;
      }else {
                showModal();
                
                const uploadUri = selectImage;
                let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

                try {
                  await storage().ref('users/'+filename).putFile(uploadUri);
                  console.log('File uploaded to storage');
          
                }catch{(error) => {
                  console.log(error);
                }};
                

              firebase.firestore().collection('users').add({
                    name: name,
                    userName: userName,
                    email: email,
                    profilePic : filename

                }).then(async () => {
                      
                    setName('');
                    setUserName('');
                    
                    navigation.navigate('Dashboard', {email : email});

                }).catch((error) => {
                    Alert.alert('Error Adding User');
                })

                setTimeout(() => {
              
                  hideModal();
                  navigation.navigate('Dashboard', { email: email });
              }, 2000);
            }
    };



    

    

  return (
    <KeyBoardAvoiding>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor= '#fff'/>
        <View style={{ backgroundColor: 'white', height: height / 10 }}></View>
        <View style={styles.upContainer}>

          <View>
              <Image
                source={!selectImage ? require('../../assets/Images/user-default.jpg') : {uri: selectImage }}
                style={{
                  width: 100,
                  height: 100,
                  borderWidth : 1,
                  borderColor : '#F4A34B',
                  borderRadius : 50,
                }}
              />
      
                <MaterialIcons
                      name="edit"
                      size={20}
                      color="black"
                      style = {{
                        color : '#000',
                        borderRadius : 50,
                        backgroundColor : '#F4A34B',
                        position : 'absolute',
                        right : 0,
                        bottom : 0,
                        padding : 5,
                        elevation : 5
                        
                      }}
                        onPress={ImagePicker}/>
  
          </View>

          <Text style = {{color : 'black', fontSize : bigTextWidth, fontFamily : 'Poppins-Bold'}}>Welcome</Text>
        </View>
        <View style={styles.downContainer}>
          <LoginTextBox
              TextName="Name"
              onChangeText={handleNameChange}
              secureTextEntry = {false} value={name} />

          <LoginTextBox
              TextName="Username"
              onChangeText={handleUserNameChange}
              secureTextEntry = {false} value={userName}
              />

          <View>
            <LoginSubmitBtn TextName="Submit" onPress = {AddNewUser}/>
          </View>

          <GoogleBtn btnText = "Skip" onPress={skipHandler}/>
            
          {isModalVisible &&
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={isModalVisible}
                            onRequestClose={() => hideModal()}
                        >
                            <View style={styles.modalContainer}>
                                  <LottieView
                                    source={require("../../assets/Images/Animated/catLoading.json")}
                                    style={{ width: 100, height: 100, }}
                                    autoPlay
                                    loop
                                  />
                                  <Text>Creating Profile</Text>
                            </View>
                        </Modal>
                    }

              


        </View>
      </SafeAreaView>
    </KeyBoardAvoiding>
  )
}

export default UserDetailsRegister

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      upContainer: {
        backgroundColor: 'white',
        width : width ,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      },
      downContainer: {
        backgroundColor: 'white',
        width : width ,
        height: 'auto',
        alignItems: 'center',
        flex: 1,
        paddingTop : width / 8,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

  
})