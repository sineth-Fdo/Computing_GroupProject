import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = (props) => {
    const {onPress} = props;

    const btnstyle = {
        backgroundColor: props.bgcolor,
        width: '90%',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        paddingTop: props.paddingtop,
        justifyContent: 'center',
        borderWidth: props.borderwidth,
        borderColor: props.bordercolor,
        elevation: 5,
    };

    const btntext = {
        color: '#3C2104',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
    }

    return (
        <TouchableOpacity 
        style = {btnstyle}
        onPress={onPress}
         >
            <Text style ={btntext}>{props.buttontext}</Text>
        </TouchableOpacity>
    );
};



export default Button;
