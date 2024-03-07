import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const SmallTextWidth = width /2 /8.3/2 ;
const bigTextWidth = height / 10/2.7;

export { width, height, SmallTextWidth, bigTextWidth };