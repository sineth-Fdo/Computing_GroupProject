// LoginTextBox.js
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { width, SmallTextWidth } from '../global/Dimensions';

const LoginTextBox = (props) => {
    const { TextName, onChangeText, value, placeholder, secureTextEntry } = props;

    return (
        <View>
            <Text style={{ color: '#000', fontSize: SmallTextWidth, fontFamily: 'Poppins-Medium' }}>{TextName}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={'#666666'}
                secureTextEntry={secureTextEntry}
            />
            
        </View>
    );
}

export default LoginTextBox;

const styles = StyleSheet.create({
    input: {
        width: width - 40,
        height: 45,
        marginBottom: 12,
        borderRadius: 10,
        backgroundColor: '#D0DEEE',
        paddingHorizontal: 12,
        color: '#000',
    },
});
