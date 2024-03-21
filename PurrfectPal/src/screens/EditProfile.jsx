import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import {useState} from 'react'
import EditPencil from '../../assets/Images/editPencil.png'
import { width, height, SmallTextWidth, bigTextWidth } from '../global/Dimensions'
import ProfileButtons from '../components/ProfileButtons'
import BackButton from '../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import MultilineTxtBox from '../components/MultilineTxtBox'
import TextBox from '../components/TextBox'
import { Districts, Provinces } from '../components/DataList'
import SelectDropdown from 'react-native-select-dropdown'
import KeyBoardAvoiding from '../global/KeyBoardAvoiding'

const EditProfile = () => {
  const [selected, setSelected] = useState();
  const [myValue, setMyValue]  = useState();

  const navigation = useNavigation();

  return (
    <KeyBoardAvoiding>
      <ScrollView contentContainerStyle = {styles.scrollStyles}>
        <StatusBar hidden = {false}/>
        <View style = {styles.backBtnView}>
          <BackButton onPress = {() => navigation.navigate('ViewProfile')} />
        </View>
        <Text style = {styles.heading}>Edit Profile</Text>
        <View style = {styles.imageView}>
          <Image
              source={require('../../assets/Images/user-default.jpg')}
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
          <TextBox defText= "Kasun Sandaruwan"/>
          <Text style = {styles.dataHead}>Email Address</Text>
          <TextBox defText= "kasun200@gmail.com"/>
          <Text style = {styles.dataHead}>Mobile Number</Text>
          <TextBox defText= "0762223444"/>
          <Text style = {styles.dataHead}>Address</Text>
          <MultilineTxtBox defText="659/B, Koswatte Road, Medagama"/>
            <View style = {styles.disProView}>
              <View style = {styles.disView}>
                <Text style = {styles.dataHead}>District</Text>
                <SelectDropdown
                    data={Districts}
                    defaultButtonText={'Select your District'}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      setMyValue(selectedItem)
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
                      defaultButtonText={'Select your Province'}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        setMyValue(selectedItem)
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
            <ProfileButtons width = "100%" height = {45} mVertical = {15} btnText = "Save Details" boColor = "#59B883" bgColor = "#59B883" onPress = {() => navigation.navigate('') } />
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