
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import Login from "../Screens/user/Login";
import Register from "../Screens/user/Register";
import Messages from "../Screens/messages/Messages";
import Contacts from "../Screens/contacts/Contacts";
import { HeaderContactLeft, HeaderContactRight } from "../Screens/contacts/Header";
import { HeaderMessagesLeft, HeaderMessagesRight } from "../Screens/messages/MessagesHeader";
import MyProfile from "../Screens/myProfile/MyProfile";
const Stack = createNativeStackNavigator();
const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="main"
                    component={TabNav}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="my-profile"
                    component={MyProfile}
                    options={{
                        title: "Profile", headerStyle: {
                            backgroundColor: '#2a9134',
                        },
                    }}
                />
                <Stack.Screen
                    name="message"
                    component={Messages}
                    options={{
                        headerRight: (props) => <HeaderMessagesRight />,
                        headerTitle: (props) => <HeaderMessagesLeft />,
                        headerBackVisible: false,
                        headerStyle: { backgroundColor: "#2a9134" },
                    }}
                />
                <Stack.Screen
                    name="contacts"
                    component={Contacts}
                    options={{
                        headerRight: (props) => <HeaderContactRight />,
                        headerTitle: (props) => <HeaderContactLeft />,
                        // headerBackVisible: false,
                        // headerBackTitleStyle:,
                        headerStyle: { backgroundColor: "#2a9134" },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default StackNav;
