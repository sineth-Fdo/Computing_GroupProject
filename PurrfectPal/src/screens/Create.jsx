import { StyleSheet, Text, View, ScrollView, TextInput, Select, Alert, SafeAreaView, StatusBar } from 'react-native'
import {useState, useMemo} from 'react'
import KeyBoardAvoiding from '../global/KeyBoardAvoiding'
import TextBox from '../components/TextBox'
import MultilineTxtBox from '../components/MultilineTxtBox'
import { SelectList } from 'react-native-dropdown-select-list'
import { Categories, Districts, Provinces, Gender } from '../components/DataList'
import SelectDropdown from 'react-native-select-dropdown'
import RadioGroup from 'react-native-radio-buttons-group';
import LoginSubmitBtn from '../components/LoginSubmitBtn'
import { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


const Create = () => {
  const [selected, setSelected] = useState();
  const [myValue, setMyValue]  = useState();
  const [selectedGen, setSelectedGen] = useState('male');
  const [selectedPur, setSelectedPur] = useState('adpot');
  const [selectedLoc, setSelectedLoc] = useState('default');
  
  const [category, setCategory]  = useState();
  const [district, setDistrict]  = useState();
  const [province, setProvince ]  = useState();

  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [bread , setBread] = useState('');
  const [ageYear , setAgeYear] = useState('');
  const [ageMonth , setAgeMonth] = useState('');
  const [vaccination , setVaccination] = useState('');
  const [health , setHealth] = useState('');
  const [contact , setContact] = useState(0);
  const [otherCategory , setOtherCategory] = useState('');
  const [price , setPrice] = useState(0);
  



                const genderButtons = useMemo(() => ([
                  {
                      id: 'male',
                      label: 'Male',
                      value: 'male'
                  },
                  {
                      id: 'female',
                      label: 'Female',
                      value: 'female'
                  }
              ]), []);

                const purposeButtons = useMemo(() => ([
                  {
                      id: 'adpot',
                      label: 'For Adoption',
                      value: 'for adoption'
                  },
                  {
                      id: 'sale',
                      label: 'For Sale',
                      value: 'for sale'
                  }
                ]), []);

                const locationButtons = useMemo(() => ([
                  {
                      id: 'default', 
                      label: 'Use the Account Location',
                      value: 'use the account location'
                  },
                  {
                      id: 'custom',
                      label: 'Use a Custom Address',
                      value: 'use a custom address'
                  }
                ]), []);

// text input handlers
const titleHandler = (inputText) => {
  setTitle(inputText);
};

const descriptionHandler = (inputText) => {
  setDescription(inputText);
};

const ageYearHandler = (inputText) => {
  setAgeYear(inputText);
};

const ageMonthHandler = (inputText) => {
  setAgeMonth(inputText);
};

const breadHandler = (inputText) => {
  setBread(inputText);
};

const vaccinationHandler = (inputText) => {
  setVaccination(inputText);
};

const HealthHandler = (inputText) => {
  setHealth(inputText);
};

const ContactHandler = (inputText) => {
  const newContact = parseInt(inputText);
  setContact(newContact);
};

const otherCategoryHandler = (inputText) => {
  setOtherCategory(inputText);
};

const priceHandler = (inputText) => {
  const newPrice = parseInt(inputText);
  setPrice(newPrice);
};





// Add Advertisement to the database
  const addAdvertisement = async () => {
    try {
      await firebase.firestore().collection('advertisements').add({
        ownerEmail: email,
        title: title,
        description: description,
        otherCategory: category === 'Other' ? otherCategory : category,
        category : category,
        ageYear: ageYear,
        ageMonth: ageMonth,
        gender : selectedGen,
        bread: bread,
        vaccination: vaccination,
        health: health,
        purpose: selectedPur,
        district: district,
        province: province,
        contactNumber: contact,
        price: price,
        
        
      }).then(() => {
        console.log('Document successfully written!');
        Alert.alert('Successfully Added');
      })
    }catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <KeyBoardAvoiding>
      <SafeAreaView>
        <StatusBar hidden = {false}/>
        <ScrollView contentContainerStyle = {styles.scrollStyles}>
          <Text style = {styles.headingStyles}>Pet Advertisement</Text>
          <View style= {styles.viewColSpacing}>
            {/* title */}
            <Text style = {styles.formHeaders}>Title *</Text>
            <TextBox placeholder = 'Enter your title' onChangeText = {titleHandler} />
            {/* Description */}
            <Text style = {styles.formHeaders}>Description</Text>
            <MultilineTxtBox placeholder = 'Tell them about your pet' onChangeText = {descriptionHandler}/>
            {/* Category Selector */}
            <Text style = {styles.formHeaders}>Pet Category *</Text>
            <SelectDropdown
              data={Categories}
              defaultButtonText={'Select a Category'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                setCategory(selectedItem)
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              buttonStyle = {{width: '100%', backgroundColor: '#D0DEEE', color: '#000', borderRadius: 5}}
              buttonTextStyle = {{fontFamily: 'Poppins-Regular', fontSize: 15}}
              dropdownStyle = {{backgroundColor: '#D0DEEE', color: '#000', borderRadius: 15}}
            />
            {
              category === 'Other' ? (
                <>
                  {/* other category */}
                  <Text style = {styles.formHeaders}>new Category</Text>
                  <TextBox placeholder = 'Enter New category Here'  onChangeText = {otherCategoryHandler}/>
                </>
              ) : (
                null
              )
            }
        
        
            {/* Age */}
            <Text style = {styles.formHeaders}>Age *</Text>
            <View style = {styles.viewRowSpacing}>
              <TextInput
                style = {styles.input}
                placeholder= 'Year'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                onChangeText = {ageYearHandler}
                keyboardType='numeric'
              />
              <TextInput
                style = {styles.input}
                placeholder= 'Month'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                onChangeText = {ageMonthHandler}
                keyboardType='numeric'
              />
            </View>
            {/* Gender */}
            <Text style = {styles.formHeaders}>Gender *</Text>
            <RadioGroup
              radioButtons={genderButtons}
              onPress={setSelectedGen}
              selectedId={selectedGen}
              labelStyle= {{color: '#000', fontFamily: 'Poppins-Regular'}}
              containerStyle = {{alignItems:'flex-start', marginBottom: 5}}
          />
        
            {/* Breed */}
            <Text style = {styles.formHeaders}>Pet Breed</Text>
            <TextBox placeholder = 'Enter Pet Breed'  onChangeText = {breadHandler}/>
            {/* Vaccination */}
            <Text style = {styles.formHeaders}>Vaccination Status</Text>
            <MultilineTxtBox  onChangeText = {vaccinationHandler}/>
            {/* health status */}
            <Text style = {styles.formHeaders}>Pet's Health Status</Text>
            <MultilineTxtBox  onChangeText = {HealthHandler}/>
            {/* Divider */}
            <View style = {{
              marginVertical: 10,
              backgroundColor: '#000',
              height: 2,
              width: '100%'
            }}></View>
            </View>
        
          {/* Purpose */}
          <Text style = {styles.headingStyles}>Purpose</Text>
          <View style= {styles.viewColSpacing}>
            {/* For Radio Buttons */}
            <RadioGroup
              radioButtons={purposeButtons}
              onPress={setSelectedPur}
              selectedId={selectedPur}
              labelStyle= {{color: '#000', fontFamily: 'Poppins-Regular'}}
              containerStyle = {{alignItems:'flex-start', marginBottom: 5}}
          />
        
          { selectedPur === 'sale' ? (
            <>
                <Text style = {styles.formHeaders}>Price</Text>
                <TextBox placeholder = 'LKR' onChangeText = {priceHandler} keyboardType='numeric'/>
            </>
          ) : (null)}
        
            {/* Divider */}
            <View style = {{
              marginVertical: 10,
              backgroundColor: '#000',
              height: 2,
              width: '100%'
            }}></View>
          </View>
          {/* Location */}
          <Text style = {styles.headingStyles}>Location</Text>
          <View style= {styles.viewColSpacing}>
        
            {/* For Radio Buttons */}
            <RadioGroup
              radioButtons={locationButtons}
              onPress={setSelectedLoc}
              selectedId={selectedLoc}
              labelStyle= {{color: '#000', fontFamily: 'Poppins-Regular'}}
              containerStyle = {{alignItems:'flex-start', marginBottom: 5}}
          />
        
          {
            selectedLoc === 'custom' ? (
              <>
                  {/* Address */}
                <Text style = {styles.formHeaders}>Address</Text>
                <MultilineTxtBox placeholder = 'Enter your Custom Address'/>
              </>
            ) : (
              null
            )
          }
        
        
        
        
            <Text style = {styles.formHeaders}>District</Text>
            <SelectDropdown
              data={Districts}
              defaultButtonText={'Select your District'}
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
              buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 15}}
              dropdownStyle = {{backgroundColor: '#D0DEEE', color: '#000', borderRadius: 15}}
            />
            <Text style = {styles.formHeaders}>Province</Text>
            <SelectDropdown
              data={Provinces}
              defaultButtonText={'Select your Province'}
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
              buttonTextStyle = {{fontFamily: 'Poppins-Regular', fontSize: 15}}
              dropdownStyle = {{backgroundColor: '#D0DEEE', color: '#000', borderRadius: 15}}
            />
            {/* Divider */}
            <View style = {{
              marginVertical: 10,
              backgroundColor: '#000',
              height: 2,
              width: '100%'
            }}></View>
          </View>
        
          {/*Add Images*/}
          <Text style = {styles.headingStyles}>Images</Text>
          <View style = {styles.viewColSpacing}>
            <Text style = {{color: 'black',}}>
              You can add upto 5 images of your pet.
            </Text>
            {/* Divider */}
          <View style = {{
              marginVertical: 10,
              backgroundColor: '#000',
              height: 2,
              width: '100%'
            }}></View>
          </View>
        
          <Text style = {styles.headingStyles}>Contact Information</Text>
          <View style = {styles.viewColSpacing}>
            <Text style = {styles.formHeaders}>Contact Number *</Text>
            <TextBox placeholder = 'Enter a Contact Number'  onChangeText = {ContactHandler} keyboardType = {'numeric'}/>
        
          </View>
        
          <LoginSubmitBtn TextName = 'Submit' onPress = {addAdvertisement}/>
        </ScrollView>
      </SafeAreaView>
    </KeyBoardAvoiding>
  )
}

const styles = StyleSheet.create({
  scrollStyles: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 50,
  },

  viewColSpacing: {
    marginTop: 20,
    width: '90%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  viewRowSpacing: {
    width: '90%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  headingStyles: {
    color: '#111F2F',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,

  },

  formHeaders: {
    color: '#111F2F',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },

  textBoxStyles: {
    backgroundColor: '#D0DEEE',
    height: 45,
    width: '100%',
    paddingLeft: 15,

  },

  input: {
    width: '50%',
    height: 45,
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: '#D0DEEE',
    paddingHorizontal: 12,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
},
})

export default Create

