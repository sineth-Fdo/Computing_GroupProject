// LoginTextBox.js
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SmallTextWidth, width } from '../global/Dimensions';

const LoginTextBox = (props) => {
    const { TextName, onChangeText, value, placeholder, secureTextEntry } = props;

    return (
        <View>
            <Text style={{ color: '#000', fontSize: SmallTextWidth, fontFamily: 'Poppins-SemiBold' }}>{TextName}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={'#666666'}
                secureTextEntry={secureTextEntry}
                placeholderStyle={{ color: '#666666', fontFamily: 'Poppins-Italic'}}
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
