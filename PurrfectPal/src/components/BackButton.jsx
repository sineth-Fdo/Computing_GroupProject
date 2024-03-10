import { Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const SkipButton = (props) => {
    const {onPress} = props;

    const btnstyle = {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        paddingTop: props.paddingtop,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#739BCB',
        marginLeft: 15,
    };

    const btntext = {
        color: '#000000',
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        
    }

    return (
        <TouchableOpacity 
        style = {btnstyle}
        onPress={onPress}
        >
            <Image source={require('../../assets/Images/backButtonIcon.png')} />
        </TouchableOpacity>
    );
};



export default SkipButton;
