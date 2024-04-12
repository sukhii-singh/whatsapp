import { View, Text, StyleSheet, Pressable, Image, Button } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderMessagesLeft = () => {
    return (
        <View style={{ flex: 1, paddingVertical: 10 }}>
            <View>
                <Pressable
                    style={styles.container}
                    android_ripple={{ color: "rgba(0, 0, 0, 0.1)", borderless: false }}
                >
                    <View style={styles.inner}>
                        <View>
                            <Image
                                source={{ uri: "https://reactjs.org/logo-og.png" }}
                                style={{ width: 45, height: 45, borderRadius: 50 }}
                                resizeMode="cover"
                            />
                        </View>
                        <View>
                            <Text style={styles.name}>Shubh</Text>
                            <Text style={styles.online}>online</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const HeaderMessagesRight = () => {
    return (
        <View style={{}}>
            <View style={styles.headerRight}>
                <Text>
                    <Ionicons name="ios-videocam" size={22} color="white" />
                </Text>
                <Text>
                    <MaterialIcons name="local-phone" size={22} color="white" />
                </Text>
                <Text>
                    <Entypo name="dots-three-vertical" size={20} color="white" />
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inner: {
        flexDirection: "row",
        gap: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "white",
    },
    online: {
        color: "white",
        fontSize: 12,
    },
    headerRight: {
        alignItems: "center",
        flexDirection: "row",
        gap: 15
    }
});

export { HeaderMessagesRight, HeaderMessagesLeft }