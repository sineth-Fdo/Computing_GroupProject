import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextBox = (props) => {
    const { TextName, onChangeText, value, placeholder, secureTextEntry, defText, keyboardType} = props;

    return (
        <View style = {{width: '100%',height: 'auto'}}>
        <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(0,0,0,0.4)'}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    defaultValue={defText}
                    maxLength={30}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#D0DEEE',
        paddingHorizontal: 12,
        color: '#000',
        fontFamily: 'Poppins-Regular'
    },
})

export default TextBox

