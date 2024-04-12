import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Pressable, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const messgs = [
    { id: '1', text: 'one!', sender: 'user' },
    { id: '2', text: 'Hi there!', sender: 'other' },
    { id: '3', text: 'Hello!', sender: 'user' },
    { id: '4', text: 'Hi there how arew you bro!', sender: 'other' },
    // { id: '5', text: 'Hello!', sender: 'user' },
    // { id: '6', text: 'Hi there!', sender: 'other' },
    // { id: '7', text: 'Hello!', sender: 'user' },
    // { id: '8', text: 'Hi there!', sender: 'other' },
    // { id: '9', text: 'Hello!', sender: 'user' },
    // {
    //     id: '10', text: 'Hi there!Creating a chat component in React Native with a design similar to WhatsApp using Tailwind CSS is a multi-step process. Tailwind CSS is primarily a utility-first CSS framework, but React Native doesnt use traditional CSS for styling.Instead, it uses aother'
    // },
    // { id: '11', text: 'Hellothere!Creating a chat component in React Native with a design similar to WhatsApp using Tailwind CSS is a multi-step ', sender: 'user' },
    // { id: '12', text: 'Hi twelvew!', sender: 'other' },
    // { id: '13', text: 'Hi twelvew!', sender: 'other' },
    // { id: '14', text: 'Hi twelvew!', sender: 'other' },
    // { id: '15', text: 'Hi last!', sender: 'other' },
    // Add more messages as needed
];
const Messages = () => {
    const flatListRef = useRef();
    const [messages, setmessages] = useState(messgs)
    const [myMsg, setMymsg] = useState(null)
    const renderItem = ({ item }) => (
        <View style={item.sender === 'user' ? styles.userMessage : styles.otherMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.msgTime}>12:30</Text>
        </View>
    )
    const [msgid, setmsgid] = useState(16)
    const handleSendMsg = (e) => {
        e.preventDefault();
        setmsgid(msgid + 1)
        let messg = [...messages, { id: msgid, text: myMsg, sender: 'user' }]
        setmessages(messg);
        flatListRef.current.scrollToEnd({ animated: true });
        setMymsg('');
    }

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ref={flatListRef}
            />
            <View>
                <View style={styles.sendMsgWrap} >
                    <View style={{ flex: .1, justifyContent: "center", alignItems: "center" }}>
                        <Text>
                            😀
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: .9, justifyContent: "space-between", backgroundColor: "#e9ecef", alignItems: "center", paddingHorizontal: 6, borderRadius: 10 }}>
                        <TextInput placeholder='type here..' style={styles.send} onChangeText={(e) => setMymsg(e)} value={myMsg} />
                        {!myMsg ? <View style={{ flexDirection: 'row', gap: 7 }}>
                            <Entypo name="attachment" size={22} color="black" />

                            <Feather name="mic" size={22} color="#2a9134" />
                        </View> :
                            <Pressable>
                                <Ionicons name="ios-send-sharp" size={22} color="#2a9134" onPress={handleSendMsg} />
                            </Pressable>
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#f4f4f4',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#4caf50', // Green color for user messages
        padding: 8,
        marginVertical: 4,
        borderRadius: 8,
        maxWidth: '95%',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'purple', // White color for other messages
        padding: 8,
        marginVertical: 4,
        borderRadius: 8,
        maxWidth: '95%',
    },
    messageText: {
        color: '#fff', // White color for user messages text
    },
    msgTime: {
        textAlign: "right",
        color: "white",
        fontSize: 8
    }, sendMsgWrap: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    send: {
        // backgroundColor: "tan",
        paddingVertical: 10,
        maxWidth: "500",
        width: "70%"

    }
});