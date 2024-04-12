import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const recentUpdats = [
    {
        id: 1,
        name: "Shubh",
        img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "10:23 am",
    },
    {
        id: 2,
        name: "Sukhvinder",
        img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "10:23 am",
    },
    {
        id: 3,
        name: "Yeah",
        img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "10:23 am",
    },
    {
        id: 4,
        name: "Jhon",
        img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "Yesterday",
    },
];
const Updates = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                <View style={styles.main}>
                    <View style={styles.statusHead}>
                        <Text style={styles.mainText}>Status</Text>
                        <Pressable onPress={() => { navigation.navigate("my-profile") }}>

                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    </View>
                    <View style={styles.updateStatus}>
                        <View>
                            <Image
                                source={{ uri: "https://reactjs.org/logo-og.png" }}
                                style={{ width: 45, height: 45, borderRadius: 50 }}
                                resizeMode="cover"
                            />
                        </View>
                        <Pressable >
                            <Text style={styles.textOne}>My status</Text>
                            <Text style={styles.textTwo}>Tap to add status update</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.recentUpdates}>
                    <Text style={styles.textThree}>Recent updates</Text>
                    <FlatList
                        data={recentUpdats}
                        renderItem={({ item }) => (
                            <Pressable style={styles.recentStatus} android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: false }}>
                                <View style={{ borderRadius: 50, borderWidth: 3, borderColor: "#38b000", padding: 1.5 }}>
                                    <Image
                                        source={{
                                            uri: item?.img,
                                        }}
                                        style={{ width: 53, height: 53, padding: 12, borderRadius: 50 }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.textOneName}>{item?.name}</Text>
                                    <Text style={styles.textTwoTime}>{item?.time}</Text>
                                </View>
                            </Pressable>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View></View>
            </View>
        </SafeAreaView>
    );
};

export default Updates;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 13,
        paddingVertical: 15,
    },
    main: {
        flexDirection: "column",
    },
    statusHead: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mainText: {
        fontSize: 25,
        fontWeight: "600",
    },
    updateStatus: {
        marginTop: 20,
        flexDirection: "row",
        gap: 15,
    },
    recentStatus: {
        paddingVertical: 10,
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
    },
    textOne: {
        fontSize: 20,
        fontWeight: "600",
    },
    textTwo: {
        fontSize: 16,
        fontWeight: "500",
        color: "#6c757d",
    },
    textThree: {
        fontSize: 15,
        fontWeight: "500",
        color: "#6c757d",
    },
    recentUpdates: {
        marginTop: 20,
    },
    textTwoTime: {
        fontSize: 14
    },
    textOneName: {
        fontSize: 18,
        fontWeight: "600"
    }

});
