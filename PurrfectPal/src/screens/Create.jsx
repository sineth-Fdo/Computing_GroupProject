import { StyleSheet, Text, View, ScrollView, TextInput, Select, Alert, SafeAreaView, StatusBar, TouchableOpacity, Image, Modal } from 'react-native'
import {useState, useMemo} from 'react'
import KeyBoardAvoiding from '../global/KeyBoardAvoiding'
import TextBox from '../components/TextBox'
import MultilineTxtBox from '../components/MultilineTxtBox'
import { SelectList } from 'react-native-dropdown-select-list'
import { Categories, Districts, Provinces, Gender } from '../components/DataList'
import SelectDropdown from 'react-native-select-dropdown'
import { SmallTextWidth, height, width } from '../global/Dimensions';
import RadioGroup from 'react-native-radio-buttons-group';
import LoginSubmitBtn from '../components/LoginSubmitBtn'
import { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native'





const Create = (props) => {

  const { email } = props.route.params;
  const navigation = useNavigation();

  const [selectedGen, setSelectedGen] = useState('male');
  const [selectedPur, setSelectedPur] = useState('adpot');
  const [selectedLoc, setSelectedLoc] = useState('default');
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const [category, setCategory]  = useState();
  const [district, setDistrict]  = useState();
  const [province, setProvince ]  = useState();

  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [bread , setBread] = useState('');
  const [ageYear , setAgeYear] = useState(0);
  const [ageMonth , setAgeMonth] = useState(0);
  const [vaccination , setVaccination] = useState('');
  const [health , setHealth] = useState('');
  const [contact , setContact] = useState(0);
  const [otherCategory , setOtherCategory] = useState('');
  const [price , setPrice] = useState(0);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [uploadingValue, setUploadingValue] = useState(0);



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
  const newYear = parseInt(inputText);
  setAgeYear(newYear);
};

const ageMonthHandler = (inputText) => {
  const newMonth = parseInt(inputText);
  setAgeMonth(newMonth);
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

// images picker
const selectImages = () => {
  const options = {
    mediaType: 'photo',
    maxWidth: 2000,
    maxHeight: 2000,
    quality: 1,
    includeBase64: true,
    selectionLimit: 5, // Limit the selection to 5 images
  };

  ImagePicker.launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const selectedImages = response.assets;
      setImages(selectedImages);
    }
  });
};




// Add Advertisement to the database
  const addAdvertisement = async () => {
      if (title === '' && category === '' &&   district === '' && province === ''  && images.length === 0) {
        Alert.alert('Please fill in the required fields');
        return;

      }

      try {
      
        const names = []; // Array to store image names
        setModalVisible(true);
      for (let i = 0; i < images.length; i++) {
        const uri = images[i].uri;
        const fileName = uri.substring(uri.lastIndexOf('/') + 1);
        const reference = storage().ref(`adAdvertisements/${fileName}`);
  
        try {
          // Upload image to Firebase Storage
          await reference.putFile(uri);
          console.log(`Image ${i + 1} uploaded successfully!`);
        

           // Get download URL of the uploaded image
          const url = await reference.getDownloadURL();
          console.log(`Download URL for image ${i + 1}:`, url);
  
        
          setUploadingValue((i + 1) * 20);

          names.push(fileName); 
        
        } catch (error) {
          console.error(`Error uploading image ${i + 1}:`, error);
          Alert.alert('Error', 'Failed to upload images');
          setIsLoading(false);
        }
      }
  
  
  
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
          images: names,
          mainImage: names[selectedImageIndex]
          
          
        }).then(() => {
          console.log('Document successfully written!');
          setModalVisible(false);
  
          setTitle('');
          setPrice(0);
          setContact(0);
          setHealth('');
          setVaccination('');
          setBread('');
          setAgeMonth('');
          setAgeYear('');
          setDescription('');
          setImages([]);
          setCategory('');
          setDistrict('');
          setProvince('');
          setOtherCategory('');
          
          navigation.navigate('Home');
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
          <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : 'rgba(0,0,0,0.4)'}}>
              <LottieView
                source={require("../../assets/Images/Animated/catLoading.json")}
                style={{ width: 80, height: 80 }}
                autoPlay
                loop
              />
              <Text style={{color: '#fff', marginTop: 10}}>{`Uploading Images.....${uploadingValue}%`}</Text>
        </View>
        </Modal>
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
            <View style = {{paddingTop : 10, width : '100%',height : 'auto',backgroundColor : '#D0DEEE',borderRadius : 10,alignItems : 'center'}}>
                  <Text style = {{color: 'black',}}>You can pick one image for a main image. </Text>
                  <View style = {{ width : '90%',height : 'auto',flexWrap : 'wrap',flexDirection : 'row',justifyContent : 'center',paddingVertical : 20}}>
                    
                  {images.map((image, index) => (
                    <View key={index} style={{ width: SmallTextWidth + 80, height: SmallTextWidth + 80, margin: 7 }}>
                      {index === selectedImageIndex && (
                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)', width: '100%', height: '100%', position: 'absolute', zIndex: 1, justifyContent: 'center', alignItems: 'center',borderRadius: 8 }}>
                          <MaterialIcons name="done-outline" size={35} style={{ color: '#fff' }} />
                        </View>
                      )}
                      <TouchableOpacity onPress={() => setSelectedImageIndex(index)}>
                        <Image
                          source={{ uri: image.uri }}
                          style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}


                      {
                        images.length < 5  ? (
                          <TouchableOpacity onPress={selectImages} style = {{margin : 7,borderWidth : 1,borderColor : '#345C8C',width: SmallTextWidth + 80, height: SmallTextWidth + 80,justifyContent : 'center', alignItems : 'center',borderRadius : 10}}>
                            <Entypo name="plus" size={35} style = {{color : '#345C8C',}} />
                          </TouchableOpacity>
                        ) : (
                          null
                        )
                      }
                      
                      

                  </View>
                    {
                      images.length > 0 ? (
                        <TouchableOpacity onPress={() => setImages([])} style = {{backgroundColor :'#345C8C' ,borderColor : '#345C8C',width : '60%',height : 35,justifyContent : 'center', alignItems : 'center',borderRadius : 20,marginVertical : 10}}>
                          <Text style = {{color : 'white'}}>Clear All</Text>
                        </TouchableOpacity>
                      ) : (
                        null
                      )
                    }
                
              
            </View>
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
    alignItems: 'flex-start',

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

