import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./Profil";
import Oversigtsside from "./Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import Request from "./Request";

const Tab = createBottomTabNavigator();

const Navi = () => {
    return (
        <Tab.Navigator initialRouteName="Oversigt" screenOptions={{headerShown: false, tabBarStyle: { backgroundColor: 'rgb(250, 237, 205)' }}}>
            <Tab.Screen name='Oversigt' component={Oversigtsside} options={{tabBarLabel: 'Home', tabBarIcon: ({color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            )}}/>
            <Tab.Screen name="Request" component={Request} options={{tabBarLabel: 'Request', tabBarIcon: ({color, size }) => (
                <MaterialCommunityIcons name="frequently-asked-questions" color={color} size={size}/>
            )}}/>
            <Tab.Screen name="Setting" component={Setting} options={{tabBarLabel: 'Settings', tabBarIcon: ({color, size }) => (
                <MaterialCommunityIcons name="cog-outline" color={color} size={size}/>
            )}}/>
        </Tab.Navigator>
    );
};

export default Navi;
