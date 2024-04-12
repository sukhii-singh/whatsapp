import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
const data = [
    { id: 1, name: "sukhi", msg: "hi! i am fine" },
    { id: 2, name: "rahul", msg: "hi! i am fine" },
    { id: 3, name: "raju", msg: "hi! i am fine" },
    { id: 4, name: "sukhi", msg: "hi! i am fine" },
    { id: 5, name: "sukhi", msg: "hi! i am fine" },
    { id: 6, name: "sukhi", msg: "hi! i am fine" },
    { id: 7, name: "sukhi", msg: "hi! i am fine" },
    { id: 8, name: "sukhi", msg: "hi! i am fine" },
    { id: 9, name: "sukhi", msg: "hi! i am fine" },
    { id: 10, name: "sukhi", msg: "hi! i am fine" },
    { id: 11, name: "sukhi", msg: "hi! i am fine" },
    { id: 12, name: "sukhi", msg: "hi! i am fine" },
]
const Chats = () => {
    const navigation = useNavigation()
    const handleChat = () => {
        navigation.navigate("message")
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                {
                    <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={(item) => item.id} renderItem={({ item }) =>
                    (
                        <Pressable style={styles.container} android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: false }} onPress={handleChat}>
                            <View style={styles.inner}>
                                <View>
                                    <Image source={{ uri: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                                        style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="cover" />
                                </View>
                                <View >
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text>Thanks! how are you</Text>
                                </View>
                            </View>
                            <View>
                                <Text>12:23</Text>
                            </View>
                        </Pressable>
                    )
                    } />
                }

            </View>
            <Pressable style={styles.contact} onPress={() => { navigation.navigate("contacts") }}><Feather name="file-text" size={24} color="white" /></Pressable>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",

        padding: 15

    },
    inner: {
        flexDirection: "row",
        gap: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: "600"
    },
    contact: {
        width: 55,
        height: 55,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
        position: "absolute",
        bottom: 10,
        right: 10
    }
})