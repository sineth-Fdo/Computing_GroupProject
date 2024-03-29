import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';


import Categories from '../src/screens/Categories'
import Create from '../src/screens/Create'
import Activity from '../src/screens/Activity'
import Profile from '../src/screens/Profile'
import Home from '../src/screens/Home';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const route = useRoute();
    const { email } = route.params;

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#FAC6C4',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...styles.shadow,
            },
            }}
        >
            <Tab.Screen name="Home" component ={Home}
                initialParams = {{email: email}}
                
                options ={{
                    tabBarHideOnKeyboard : true,
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

            <Tab.Screen name="Categories" component ={Categories} 
                initialParams = {{email: email}}
                options ={{
                    tabBarHideOnKeyboard : true,
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

            <Tab.Screen name="Create" component ={Create} 
            initialParams = {{email: email}}
            options ={{
                tabBarHideOnKeyboard : true,
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
                            fontFamily: 'Poppins-SemiBold',
                        }}>Create</Text>
                    </View>
                    )
                },
                headerShown: false,
            }}/>

            <Tab.Screen name="Activity" component ={Activity} 
            initialParams = {{email: email}}
            options ={{
                tabBarHideOnKeyboard : true,
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

            <Tab.Screen name="Profile" component ={Profile} 
            initialParams = {{email: email}}
            options ={{
                tabBarHideOnKeyboard : true,
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
                        }}>Account</Text>
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