import { TouchableOpacity, Text, } from "react-native";

const LogOut = (props) => {

    const {onPress, width, height, mTop, btnText} = props;

    const btnstyle = {
        marginTop: mTop,
        backgroundColor: '#fff',
        width: width,
        height: height,
        borderRadius: 10,
        alignItems: 'center',
        // paddingTop: props.paddingtop,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#B1160E',
        
    }

    return(
        <TouchableOpacity
        style = {btnstyle}
        onPress={onPress}>
            <Text
                style = {{color: '#B1160E',  fontFamily: 'Poppins-Medium'}}
            >{btnText}</Text>
        </TouchableOpacity>
    )
}

export default LogOut;