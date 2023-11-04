import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Home from '../screens/Home';
import FlightListScreen from '../screens/FlightListScreen';
import BookingDetail from '../screens/BookingDetail';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const Navigation = () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="BookingDetail" component={BookingDetail} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="FlightListScreen" component={FlightListScreen} />

        </MainStack.Navigator>
    )
}

export default Navigation;