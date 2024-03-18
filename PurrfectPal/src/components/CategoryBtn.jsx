import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';


const CategoryBtn = (props) => {
    const { icon, cateName, fsize } = props;

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{backgroundColor: '#D0DEEE',margin: 10 ,width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={() => {navigation.navigate('')}}>
            <Image
                source={icon}
                style = {{
                    height: 50,
                    width:50,
                }}
            />
            <Text style = {{color: 'black', fontFamily: 'Poppins-Regular', fontSize: fsize ? fsize : 12}}>{cateName}</Text>
        </TouchableOpacity>
    );
};

export default CategoryBtn;