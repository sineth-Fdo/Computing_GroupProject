import { TouchableOpacity, Text, } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileButtons = (props) => {

    const {onPress, width, height, mVertical, btnText, boColor, bgColor } = props;

    const btnstyle = {
        marginVertical: mVertical,
        backgroundColor: bgColor,
        width: width,
        height: height,
        borderRadius: 10,
        alignItems: 'center',
        // paddingTop: props.paddingtop,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: boColor,
    }



    return(
        <TouchableOpacity
        style = {btnstyle}
        onPress={onPress}>
            <Text
                style = {{color: '#111F2F',  fontFamily: 'Poppins-Medium'}}
            >{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ProfileButtons;