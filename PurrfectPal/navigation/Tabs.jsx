import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';

import HomeTwo from '../src/screens/HomeTwo'
import Categories from '../src/screens/Categories'
import Create from '../src/screens/Create'
import Activity from '../src/screens/Activity'
import Profile from '../src/screens/Profile'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#FAC6C4',
                    borderRadius: 20,
                    ...styles.shadow,
             },
            }}
        >
            <Tab.Screen name="HomeTwo" component ={HomeTwo} options ={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center', top:3}}>
                        <Image
                            source={require('../assets/Images/homepng.png')}
                            resizeMode='contain'
                            style = {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#111F2F',
                                bottom: 3,
                            }}
                        />
                        <Text style = {{
                            color: focused ? '#e32f45' : '#111F2F',
                            fontSize: 12,
                            fontFamily: 'Poppins-SemiBold'
                        }}>Home</Text>
                    </View>
                    )
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="Categories" component ={Categories} options ={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center', top:3}}>
                        <Image
                            source={require('../assets/Images/categoriesIcon.png')}
                            resizeMode='contain'
                            style = {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#111F2F',
                                bottom: 3,
                            }}
                        />
                        <Text style = {{
                            color: focused ? '#e32f45' : '#111F2F',
                            fontSize: 12,
                            fontFamily: 'Poppins-SemiBold'
                        }}>Categories</Text>
                    </View>
                    )
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="Create" component ={Create} options ={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center', top:3}}>
                        <Image
                            source={require('../assets/Images/addIcon.png')}
                            resizeMode='contain'
                            style = {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#111F2F',
                                bottom: 3,
                            }}
                        />
                        <Text style = {{
                            color: focused ? '#e32f45' : '#111F2F',
                            fontSize: 12,
                            fontFamily: 'Poppins-SemiBold'
                        }}>Create</Text>
                    </View>
                    )
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="Activity" component ={Activity} options ={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center', top:3,}}>
                        <Image
                            source={require('../assets/Images/actIcon.png')}
                            resizeMode='contain'
                            style = {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#111F2F',
                                bottom: 3,
                            }}
                        />
                        <Text style = {{
                            color: focused ? '#e32f45' : '#111F2F',
                            fontSize: 12,
                            fontFamily: 'Poppins-SemiBold'
                        }}>Activity</Text>
                    </View>
                    )
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="Profile" component ={Profile} options ={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center', top:3}}>
                        <Image
                            source={require('../assets/Images/profileIcon.png')}
                            resizeMode='contain'
                            style = {{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#111F2F',
                                bottom: 3,
                            }}
                        />
                        <Text style = {{
                            color: focused ? '#e32f45' : '#111F2F',
                            fontSize: 12,
                            fontFamily: 'Poppins-SemiBold'
                        }}>Profile</Text>
                    </View>
                    )
                },
                headerShown: false,
            }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;