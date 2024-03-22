import { StyleSheet, Text, View,ScrollView } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { bigTextWidth, SmallTextWidth, height, width } from '../global/Dimensions'
import SearchBox from '../components/SearchBox'
import { Districts, PriceList, Genders } from '../components/DataList'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native'
import ResultsCard from '../components/ResultsCard'

const ResultsPage = () => {

    const [selected, setSelected] = useState();
    const [myValue, setMyValue]  = useState();

    const navigation = useNavigation();

  return (
    <SafeAreaView style= {{flex: 1}}>
        <View style ={styles.resultsHeader}>
            <SearchBox placeholder = "Search Anything" width = {width - 30} bgColor = "rgba(208,222,238,0.7)"/>
            <View style = {styles.filtersView}>
                {/*Price flow */}
                <SelectDropdown
                    data={PriceList}
                    defaultButtonText={'Price'}
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
                    buttonStyle = {{width: '32%', height: 40, backgroundColor: '#FBE0C3', color: '#000', borderRadius: 8, borderWidth: 1, borderColor: '#345C8C'}}
                    buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                    dropdownStyle = {{width: 250,backgroundColor: '#fff', color: '#000', borderRadius: 15, borderWidth: 1, borderColor: '#345C8C'}}
                    />

                    {/*Gender flow */}
                    <SelectDropdown
                        data={Genders}
                        defaultButtonText={'Gender'}
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
                        buttonStyle = {{width: '32%', height: 40, backgroundColor: '#FBE0C3', color: '#000', borderRadius: 8, borderWidth: 1, borderColor: '#345C8C'}}
                        buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                        dropdownStyle = {{backgroundColor: '#fff', color: '#000', borderRadius: 15, borderWidth: 1, borderColor: '#345C8C'}}
                    />

                    {/*Districts flow */}
                    <SelectDropdown
                        data={Districts}
                        defaultButtonText={'District'}
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
                        buttonStyle = {{width: '32%', height: 40, backgroundColor: '#FBE0C3', color: '#000', borderRadius: 8, borderWidth: 1, borderColor: '#345C8C'}}
                        buttonTextStyle = {{fontFamily: 'Poppins-Regular',fontSize: 13}}
                        dropdownStyle = {{ width: '32%', backgroundColor: '#fff', color: '#000', borderRadius: 15, borderWidth: 1, borderColor: '#345C8C',}}
                    />
            </View>
        </View>
        <ScrollView contentContainerStyle = {styles.scrollStyles}>
            <ResultsCard/>
            <ResultsCard/>
            <ResultsCard/>
            <ResultsCard/>
            <ResultsCard/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ResultsPage

const styles = StyleSheet.create({
    scrollStyles:{
        alignItems: 'center'
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