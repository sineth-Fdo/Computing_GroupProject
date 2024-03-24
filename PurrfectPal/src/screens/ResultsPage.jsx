import { StyleSheet, Text, View,ScrollView, FlatList, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation, useRoute } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import LottieView from "lottie-react-native";


import SearchBox from '../components/SearchBox'
import { bigTextWidth, SmallTextWidth, height, width } from '../global/Dimensions'
import { Districts, PriceList, Genders, Purpose, Categories } from '../components/DataList'
import ResultsCard from '../components/ResultsCard'


const ResultsPage = () => {
    
    const route = useRoute();
    const { purposeParam } = route.params;
    
    const [category, setCategory]  = useState('Dog');
    const [purpose, setPurpose]  = useState(purposeParam);
    const [advertisements, setAdvertisements]  = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true); 

    const [active , setActive] = useState(false);


    

    const navigation = useNavigation();
    navigation.addListener('focus', () => {
        getAdvertisements("purpose");
        
    });




const getAdvertisements = async (isAll) => {
    try {

        
        setIsLoading(true);
        let adQuery =  firebase.firestore().collection('advertisements')
            
        if (isAll == "purpose") {
            adQuery = adQuery.where('purpose', '==', purpose)
            
        }else if (isAll == "selected") {
            adQuery = adQuery.where('purpose', '==', purpose)
                        .where('category', '==', category);

        }else {
            adQuery = adQuery;
        }
        
        const adSnapshot = await adQuery.get();

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
    }finally {
        setIsLoading(false);
        
    }
}

useEffect(() => {
    getAdvertisements("selected");
}, [category, purpose]);
    
const filteredAdvertisements = advertisements ? advertisements.filter(ad => ad.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    



  return (
    <SafeAreaView style= {{flex: 1}}>
        <StatusBar hidden = {false}/>
        <View style ={styles.resultsHeader}>
            <SearchBox 
                placeholder = "Search Anything" 
                width = {width - 30} 
                bgColor = "rgba(208,222,238,0.7)"
                onChangeText = {(text) => setSearchTerm(text)}
                value = {searchTerm}


                />
                
            <View style = {styles.filtersView}>
                {/*Price flow */}

                <TouchableOpacity 
                    onPress={() => {
                        getAdvertisements("All")
                    }}
                    style = {{justifyContent : 'center',alignItems : 'center',width: '32%', height: 40, backgroundColor: '#FBE0C3', color: '#000', borderRadius: 8, borderWidth: 1, borderColor: '#345C8C'}}>
                        <Text style = {{fontFamily: 'Poppins-Regular',fontSize: 13,color : '#000'}}>All Ads</Text>
                </TouchableOpacity>

                <SelectDropdown
                    data={Purpose}
                    defaultButtonText={'Purpose >'}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        setPurpose(selectedItem)
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    buttonStyle = {{width: '32%', height: 40, backgroundColor: '#FBE0C3', color: '#000', borderRadius: 8, borderWidth: 1, borderColor: '#345C8C'}}
                    buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                    dropdownStyle = {{width: 250,backgroundColor: '#fff', color: '#000', borderRadius: 15, borderWidth: 1, borderColor: '#345C8C'}}
                    />

                
                

                    {/*Districts flow */}
                    <SelectDropdown
                        data={Categories}
                        defaultButtonText={'Categories >'}
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
                        buttonStyle = {{width: '32%', height: 40, backgroundColor: '#FBE0C3', color: '#000', borderRadius: 8, borderWidth: 1, borderColor: '#345C8C'}}
                        buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                        dropdownStyle = {{ width: '32%', backgroundColor: '#fff', color: '#000', borderRadius: 15, borderWidth: 1, borderColor: '#345C8C',}}
                    />
            </View>
        </View>

        {isLoading ? ( 
                <View style = {{width : width, height : '70%',justifyContent : 'center', alignItems : 'center'}}>
                    <LottieView
                        source={require("../../assets/Images/Animated/loading.json")}
                        style={{ width: 80, height: 80, }}
                        autoPlay
                        loop
                    />
                    <Text style = {{color : '#000'}}>Fetching data...</Text>
                </View>
            ) : (
                <View style = {{width : '100%' ,height : 'auto', justifyContent : 'flex-start',alignItems : 'center'}}>
                    <FlatList 
                    data = {filteredAdvertisements}
                    style = {{width: width -20 ,height : height /1.3, }}
                    renderItem = {({item}) => (
                    <ResultsCard 
                        title = {item.title} 
                        district = {item.district}
                        purpose = {item.purpose}
                        date = {item.Date}
                        image = {item.mainImage}
                        price = {item.price}
                    />
                    )}
                    keyExtractor = {item => item.id}
                    ListFooterComponent={() => {
                        return (
                            active === true ? (
                                <View style = {{width : width, height : 100, justifyContent : 'center', alignItems : 'center'}}>
                                    <ActivityIndicator size="large" color="#000" />
                                </View>
                            ) : null
                        );
                    }}
                    onEndReached={() => {
                    
                        setTimeout(() => {
                            console.log("End reached")
                            setActive(false)
                        }, 3000)
                    }}
                    onEndReachedThreshold={0}
                />
                </View>
                
        
            )}

    



        
    

    </SafeAreaView>
  )
}

export default ResultsPage

const styles = StyleSheet.create({
    scrollStyles:{
        width: width,
    },
    resultsHeader: {
        width: width,
        height: 160,
        backgroundColor: "#F4A34B",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
    },
    filtersView: {
        width: width - 30,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    }
})