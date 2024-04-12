import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../Screens/chats/Chats';
import Updates from '../Screens/updates/Updates';
import Calls from '../Screens/calls/Calls';

const Tab = createMaterialTopTabNavigator();
const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarContentContainerStyle: { backgroundColor: "#2a9134" }, tabBarLabelStyle: { fontSize: 12, color: "white", fontWeight: "700" },

            tabBarStyle: { backgroundColor: 'powderblue' },
        }}>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Updates" component={Updates} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    )
}

export default TabNav