import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { width, height , SmallTextWidth} from '../global/Dimensions';

const GoogleBtn = () => {
  return (
    <View>
              <TouchableOpacity style = {styles.btnGoogle}>
                <Image
                    source = {require('../../assets/Images/googleLogo.png')}
                    style = {{width : 40, height : 20, marginRight : 10, borderWidth : 1}}
                />
                <Text style = {{color : '#000', fontFamily : "Poppins-SemiBold" , fontSize : SmallTextWidth  + .3}}>Continue With Google</Text>
            </TouchableOpacity>
    </View>
  )
}

export default GoogleBtn

const styles = StyleSheet.create({
    btnGoogle: {
        width: width - 40,
        height: 45,
        marginVertical: 10,
        borderWidth : 1,
        borderRadius: 10,
        borderColor : '#B4630B',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
})