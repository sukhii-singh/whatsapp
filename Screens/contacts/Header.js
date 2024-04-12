import { View, Text, StyleSheet, Pressable, Image, Button } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
const HeaderContactLeft = () => {
    return (
        <View style={{ flex: 1, paddingVertical: 10 }}>
            <View>
                <Pressable
                    style={styles.container}
                    android_ripple={{ color: "rgba(0, 0, 0, 0.1)", borderless: false }}
                >
                    <View style={styles.inner}>

                        <View>
                            <Text style={styles.name}>Select Contact</Text>
                            <Text style={styles.online}>35 contacts</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const HeaderContactRight = () => {
    return (
        <View style={{}}>
            <View style={styles.headerRight}>
                <Text>
                    <Feather name="search" size={22} color="white" />
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

export { HeaderContactRight, HeaderContactLeft }