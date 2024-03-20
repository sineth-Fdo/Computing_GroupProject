import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';


const CategoryBtn = (props) => {
    const { icon, cateName, fsize, imgResize, mb,  } = props;

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{backgroundColor: '#D0DEEE',margin: 10 ,width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={() => {navigation.navigate('')}}>
            <Image
                source={icon}
                style = {{
                    height: imgResize ? imgResize : 50,
                    width: imgResize ? imgResize : 50,
                    marginBottom: mb ? mb : 0
                }}
            />
            <Text style = {{color: 'black', fontFamily: 'Poppins-Medium', fontSize: fsize ? fsize : 12}}>{cateName}</Text>
        </TouchableOpacity>
    );
};

export default CategoryBtn;