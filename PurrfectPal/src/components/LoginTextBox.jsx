import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { width, height , SmallTextWidth} from '../global/Dimensions';



const LoginTextBox = (props) => {
    const {TextName} = props;
  return (
    <View>

<Text style = {{  color : '#000' , fontSize : SmallTextWidth , fontFamily : 'Poppins-Medium'}}>{TextName}</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={''}
          
          />
          
</View>
  )
}

export default LoginTextBox

const styles = StyleSheet.create({
    input: {
        width: width - 40,
        height: 45,
        marginBottom: 12,
        borderRadius: 10,
        backgroundColor: '#D0DEEE',
      },
})