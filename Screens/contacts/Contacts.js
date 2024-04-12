import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import * as Contactss from 'expo-contacts';
import { FontAwesome } from '@expo/vector-icons';
const data = [
    { id: 1, name: "sukhi", msg: "hi! i am fine", img: "https://images.pexels.com/photos/11892055/pexels-photo-11892055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "rahul", msg: "hi! i am fine", img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "raju", msg: "hi! i am fine", img: "https://images.pexels.com/photos/11892055/pexels-photo-11892055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "paras", msg: "hi! i am fine", img: "https://images.pexels.com/photos/11892055/pexels-photo-11892055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "surja", msg: "hi! i am fine", img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "sachin", msg: "hi! i am fine", img: "https://images.pexels.com/photos/11892055/pexels-photo-11892055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "pappu", msg: "hi! i am fine", img: "https://images.pexels.com/photos/1657428/pexels-photo-1657428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

]
const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const handleContacts = async () => {

        const { status } = await Contactss.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contactss.getContactsAsync({
                fields: [Contactss.Fields.Name, Contactss.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                setContacts(data);
            }
        }

    }
    useEffect(() => {
        handleContacts();
    }, [])
    const navigation = useNavigation()
    const handleChat = () => {
        navigation.navigate("message")
    }
    // console.log("sdddddddddddddddddddd", contacts);
    return (
        <View style={{ flex: 1 }}>
            <View>
                {
                    <FlatList showsVerticalScrollIndicator={false} data={contacts} keyExtractor={(item) => item.id} renderItem={({ item }) =>
                    (
                        <Pressable style={styles.container} android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: false }} onPress={handleChat}>
                            <View style={styles.inner}>
                                <View>
                                    {item?.thumbnail?.uri ?
                                        <Image source={{ uri: item?.thumbnail?.uri }}
                                            style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="cover" /> :
                                        <View style={{ borderRadius: 50, backgroundColor: "#dad7cd", padding: 10, width: 50, height: 50, alignItems: "center", justifyContent: "center" }}>
                                            <FontAwesome name="user" size={24} color="black" />

                                        </View>

                                    }
                                </View>
                                <View >
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text>Hi i am using whats</Text>

                                </View>
                            </View>

                        </Pressable>
                    )
                    } />
                }

            </View>
        </View>
    )
}

export default React.memo(Contacts)

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