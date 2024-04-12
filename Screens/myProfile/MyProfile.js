
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    SafeAreaView,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
const MyProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                // allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const selectedImageUri = result.assets[0]?.uri;
                setSelectedImage(selectedImageUri);
            }
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.main} onPress={pickImage}>
                <View style={styles.mainIn}>
                    {selectedImage ? <Image source={{ uri: selectedImage }} style={{ width: 150, height: 150, borderRadius: 50 }}
                        resizeMode="cover" /> :
                        <Image
                            source={require("../../assets/profile.png")}
                            style={{ width: 150, height: 150, borderRadius: 50 }}
                            resizeMode="cover"
                        />
                    }
                    <View style={styles.cam}>
                        <Image
                            source={require("../../assets/cam.png")}
                            style={{ width: 30, height: 30 }}
                            resizeMode="cover"
                        />
                    </View>
                </View>
            </Pressable>
            <View style={styles.name}>
                <View>
                    <Ionicons name="person" size={24} color="black" />
                </View>
                <View style={styles.one}>
                    <Text style={styles.text1}>Name</Text>
                    <View style={styles.two}>
                        <Text style={styles.textMain}>Sukhvinder</Text>
                        <MaterialCommunityIcons name="pencil" size={24} color="black" />
                    </View>
                    <Text style={styles.desc}>
                        This is not your username or pin. This name will be visible to your
                        contacts.
                    </Text>
                </View>
            </View>
            <View style={styles.name}>
                <View>
                    <MaterialIcons name="error-outline" size={24} color="black" />
                </View>
                <View style={styles.one}>
                    <View style={styles.two}>
                        <Text style={styles.text1}>About</Text>
                        <MaterialCommunityIcons name="pencil" size={24} color="black" />
                    </View>
                    <Text style={styles.textMain}>Urgent calls only.</Text>
                </View>
            </View>
            <View style={styles.name}>
                <View>
                    <FontAwesome name="phone" size={24} color="black" />
                </View>
                <View style={styles.one}>
                    <Text style={styles.text1}>phone</Text>
                    <Text style={styles.two}></Text>
                    <Text style={styles.textMain}>+917740845944</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    main: {
        paddingVertical: 20,
        justifyContent: "center",
    },
    mainIn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: "relative",
    },
    cam: {
        position: "absolute",
        right: "35%",
        bottom: 0,
        padding: 10,
        backgroundColor: "#55a630",
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    text1: {
        color: "gray", fontSize: 18
    },
    name: {
        flexDirection: "row",
        gap: 10,
        marginTop: 20
    },
    contact: {
        color: "#666",
    },
    one: {
        flexDirection: "column",
    },
    two: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textMain: {
        fontSize: 20,
        fontWeight: "500", marginTop: 10
    },
    desc: {
        fontSize: 16,
        color: "gray", marginTop: 10
    }
});

export default MyProfile;
