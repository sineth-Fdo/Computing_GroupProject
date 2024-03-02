import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { width, SmallTextWidth } from '../global/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginTextBox = (props) => {
    const { TextName } = props;
    const [text, setText] = useState('');

    const handleTextChange = (inputText) => {
        setText(inputText);
    };

    return (
        <View>
            <Text style={{ color: '#000', fontSize: SmallTextWidth, fontFamily: 'Poppins-Medium' }}>{TextName}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleTextChange}
                value={text}
            />
             <Icon name="rocket" size={30} color="#900" />
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
    },
});
