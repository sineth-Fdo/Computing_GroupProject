// LoginTextBox.js
import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SmallTextWidth, width } from '../global/Dimensions';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const LoginTextBox = (props) => {

    const [icon, setIcon] = useState("eye-off");

    const { TextName, onChangeText, value, placeholder, secureTextEntry, keyboardType } = props;

    return (
        <View>
            <Text style={{ color: '#000', fontSize: SmallTextWidth, fontFamily: 'Poppins-SemiBold' }}>{TextName}</Text>
            

            {
                secureTextEntry === false ? (
                    <>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            placeholderTextColor={'#666666'}
                            secureTextEntry={secureTextEntry}
                            placeholderStyle={{ color: '#666666', fontFamily: 'Poppins-Italic'}}
                        />
                    </>
                ) : (
                    <>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            placeholderTextColor={'#666666'}
                            secureTextEntry={icon == "eye-off" ? true : false}
                            placeholderStyle={{ color: '#666666', fontFamily: 'Poppins-Italic'}}
                        />
                    </>
                )
            }




            {
                TextName === "Password" ? (
                    <>
                        <Ionicons
                            name = {icon}
                            size={20}
                            style = {{
                                color : '#000',
                                position : 'absolute',
                                top: 32,
                                bottom : 0,
                                right: 15,
                            }}
                            onPress = {() => {
                                if(icon == "eye-off"){
                                    setIcon("eye")
                                }
                                else if (icon == "eye"){
                                    setIcon("eye-off")
                                }
                            }}
                        />
                    </>
                ) : null
            }

            
    
            
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
