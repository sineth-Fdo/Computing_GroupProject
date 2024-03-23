import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import {useEffect, useState} from 'react'
import EditPencil from '../../assets/Images/editPencil.png'
import { width, height, SmallTextWidth, bigTextWidth } from '../global/Dimensions'
import ProfileButtons from '../components/ProfileButtons'
import BackButton from '../components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import MultilineTxtBox from '../components/MultilineTxtBox'
import TextBox from '../components/TextBox'
import { Districts, Provinces } from '../components/DataList'
import SelectDropdown from 'react-native-select-dropdown'
import KeyBoardAvoiding from '../global/KeyBoardAvoiding'
import { firebase } from '@react-native-firebase/firestore';

const EditProfile = () => {
  const navigation = useNavigation();
  
  const route = useRoute();
  const { email } = route.params;

  navigation.addListener('focus', () => {
    getUserData();
  });

  const [selected, setSelected] = useState();
  const [myValue, setMyValue]  = useState();
  const [user, setUser]  = useState();

  const [name, setName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [mobileNumber, setMobileNumber] = useState(0);
  const [address, setAddress] = useState();
  const [district, setDistrict] = useState();
  const [province, setProvince] = useState();
  const [profilePic, setProfilePic] = useState();


  //fetch user data
  const getUserData = async () => {
    try {
      const userSnapshot = await firebase.firestore()
        .collection('users')
        .where('email', '==', email)
        .get();
          
        
      if (userSnapshot.docs.length > 0) {
        const userData = userSnapshot.docs[0].data();
        setUser(userData);
        setName(userData.name);
        setEmailAddress(userData.email);
        setMobileNumber(userData.mobileNumber.toString());
        setAddress(userData.address);
        setDistrict(userData.district);
        setProvince(userData.province);
        setProfilePic(userData.profilePic);
    

        setUser(prevState => ({ ...prevState, id: userSnapshot.docs[0].id }));

      } else {
        console.log('No user found with the provided email');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };      

  //update user data
  const UpdateUser = async () => {
    try {
      await firebase.firestore()
        .collection('users')
        .doc(user.id)
        .update({
          name: name,
          mobileNumber: mobileNumber,
          address: address,
          district: district,
          province: province,

        });
      alert('User data updated successfully');
      navigation.navigate('ViewProfile', {email : email});
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  
  }


  useEffect(() => {
    getUserData();
  },[])


  return (
    <KeyBoardAvoiding>
      <ScrollView contentContainerStyle = {styles.scrollStyles}>
        <StatusBar hidden = {false}/>
        <View style = {styles.backBtnView}>
          <BackButton onPress = {() => navigation.navigate('ViewProfile', {email : email})} />
        </View>
        <Text style = {styles.heading}>Edit Profile</Text>
        <View style = {styles.imageView}>
          <Image
              source={{ uri: `https://firebasestorage.googleapis.com/v0/b/purfectpal-b93c7.appspot.com/o/users%2F${profilePic}?alt=media&token=d33b3e86-8008-49dd-9734-36f5405d44b9` }}
              style = {styles.imageStyles}
          />
          <TouchableOpacity style = {styles.EditPencilView}>
            <Image
              source={require('../../assets/Images/editPencil.png')}
              style = {{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style = {styles.editView}>
          <Text style = {styles.dataHead}>Username</Text>
          <TextBox  value = {name} onChangeText = {(text) => setName(text)}/>
          <Text style = {styles.dataHead}>Email Address</Text>
          <TextBox   value = {emailAddress} />
          <Text style = {styles.dataHead}>Mobile Number</Text>
          <TextBox  value = {mobileNumber} onChangeText = {(text) => setMobileNumber(text)}/>
          <Text style = {styles.dataHead}>Address</Text>
          <MultilineTxtBox  value = {address} onChangeText = {(text) => setAddress(text)}/>
            <View style = {styles.disProView}>
              <View style = {styles.disView}>
                <Text style = {styles.dataHead}>District</Text>
                <SelectDropdown
                    data={Districts}
                    defaultButtonText={!district ? 'Select Your District' : district}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      setDistrict(selectedItem)
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item
                    }}
                    buttonStyle = {{width: '100%', backgroundColor: '#D0DEEE', color: '#000', borderRadius: 5}}
                    buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                    dropdownStyle = {{backgroundColor: '#D0DEEE', color: '#000', borderRadius: 15}}
                  />
              </View>
              <View style = {styles.proView}>
                <Text style = {styles.dataHead}>Province</Text>
                  <SelectDropdown
                      data={Provinces}
                      defaultButtonText={!province ? 'Select Your Province' : province}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        setProvince(selectedItem)
                        return selectedItem
                      }}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                      }}
                      buttonStyle = {{width: '100%', backgroundColor: '#D0DEEE', color: '#000', borderRadius: 5}}
                      buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                      dropdownStyle = {{backgroundColor: '#D0DEEE', color: '#000', borderRadius: 15}}
                    />
              </View>
      
            </View>
            <ProfileButtons width = "100%" height = {45} mVertical = {15} btnText = "Save Details" boColor = "#59B883" bgColor = "#59B883" onPress = {UpdateUser} />
        </View>
      </ScrollView>
    </KeyBoardAvoiding>
  )
}

export default EditProfile

const styles = StyleSheet.create({

  scrollStyles: {
    width : width,
    height: height,
    alignItems: 'center'
  },

  backBtnView: {
    // backgroundColor: 'pink',
    height: 90,
    width: '100%',
    color: 'black',
    alignItems: 'flex-start',
    justifyContent:'flex-end',
  },
  heading:{
    fontSize: bigTextWidth/1.4,
    color: '#000',
    alignItems: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 2,
  },

  imageView: {
    // backgroundColor: 'pink',
    height: 100,
    width: 100,
    alignItems: 'center'
  },

  imageStyles: {
      width: 100,
      height: 100,
      borderRadius: 1000,
  },
  EditPencilView: {
    backgroundColor: '#000',
    height: 35,
    width: 35,
    borderRadius: 1000,
    borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    top: 65,
    right: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editView: {
    width: width - 30,
    height: 'auto',
    paddingVertical: 30,
  },
  dataHead: {
    color: '#262626',
    fontFamily: 'Poppins-SemiBold',
    fontSize: SmallTextWidth * 1.1,
  },
  disProView: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  disView:{
    width: '50%',
    height: 'auto',
    padding: 5,
  },
  proView:{
    width: '50%',
    height: 'auto',
    padding: 5,
  }
})