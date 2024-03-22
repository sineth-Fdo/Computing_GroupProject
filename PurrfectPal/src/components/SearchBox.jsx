import {StyleSheet, TextInput} from 'react-native'

const SearchBox = (props) =>{
const {placeholder, width, bgColor }  = props;

    const styles = {
            height: 50,
            width: width,
            backgroundColor: bgColor,
            paddingLeft: 20,
            color: 'black',
            borderRadius: 10,
            fontFamily: 'Poppins-Regular',
    }

    return(
        <TextInput style= {styles} 
        placeholder={placeholder} 
        placeholderTextColor = "rgba(0,0,0,0.7)"
        />
    )
}

// const styles = StyleSheet.create({
//     textBoxStyles: {
//         height: 50,
//         width: '100%',
//         backgroundColor: '#D0DEEE',
//         paddingLeft: 20,
//         color: 'black',
//         borderRadius: 10,
//         fontFamily: 'Poppins-Regular',
//       },

// })

export default SearchBox;