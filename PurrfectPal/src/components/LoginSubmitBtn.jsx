import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { width, height , SmallTextWidth} from '../global/Dimensions';

const LoginSubmitBtn = (props) => {
  const {TextName} = props;
  return (
    <View>
            <TouchableOpacity style = {styles.btnSubmit}>
                <Text style = {{color : '#000', fontFamily : "Poppins-SemiBold" , fontSize : SmallTextWidth}}>{TextName}</Text>
            </TouchableOpacity>
    </View>
  )
}

export default LoginSubmitBtn

const styles = StyleSheet.create({
    btnSubmit: {
        width: width - 40,
        height: 45,
        marginVertical: 12,
        borderRadius: 10,
        backgroundColor: '#F4A34B',
        alignItems: 'center',
        justifyContent: 'center',
        elevation : 8
      },
})