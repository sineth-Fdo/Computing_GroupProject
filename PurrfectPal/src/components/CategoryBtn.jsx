import React from 'react';
import { TouchableOpacity } from 'react-native';


const CategoryBtn = (props) => {
    const { icon, onPress } = props;

    return (
        <TouchableOpacity style={{ width: '100%', height: 'auto' }} onPress={onPress}>
            
        </TouchableOpacity>
    );
};

export default CategoryBtn;