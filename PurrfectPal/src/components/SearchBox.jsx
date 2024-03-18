import {StyleSheet, TextInput} from 'react-native'

const SearchBox = (props) =>{
    return(
        <TextInput style= {styles.textBoxStyles} 
        placeholder={props.placeholder} 
        placeholderTextColor = "rgba(0,0,0,0.7)"
        />
    )
}

const styles = StyleSheet.create({
    textBoxStyles: {
        height: 50,
        width: '100%',
        backgroundColor: '#D0DEEE',
        paddingLeft: 20,
        color: 'black',
        borderRadius: 10,
        fontFamily: 'Poppins-Regular',
      },

})

export default SearchBox;