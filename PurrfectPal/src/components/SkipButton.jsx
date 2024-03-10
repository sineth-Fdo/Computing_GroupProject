import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const SkipButton = (props) => {
    const {onPress} = props;

    const btnstyle = {
        backgroundColor: 'white',
        width: 55,
        height: 35,
        borderRadius: 25,
        alignItems: 'center',
        paddingTop: props.paddingtop,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#739BCB',
        marginRight: 15,
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
            <Text style ={btntext}>Skip</Text>
        </TouchableOpacity>
    );
};



export default SkipButton;
