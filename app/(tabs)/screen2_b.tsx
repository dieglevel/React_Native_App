import { camera, start, usb } from "@/assets/images";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

const Screen2_b = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.mainContainer}>
            <View style={{ flexDirection: "row", }}>
                <Image source={usb}></Image>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>

            <Text>Cực kỳ hài lòng</Text>

            <View style={{ flexDirection: "row", gap: 10 }}>
                <Image source={start} />
                <Image source={start} />
                <Image source={start} />
                <Image source={start} />
                <Image source={start} />
            </View>

            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 1, paddingHorizontal: 60, paddingVertical: 10, borderRadius: 10}}>
                <Image source={camera} />
                <Text style={{fontSize: 20, fontWeight: "700",}}>Thêm hình ảnh</Text>
            </TouchableOpacity>

            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
            </View>

            <TouchableOpacity style={{width:"100%" , flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, borderWidth: 1, paddingHorizontal: 60, paddingVertical: 10, borderRadius: 10, backgroundColor: "#0D5DB6" }}>
                <Text style={{ fontSize: 20, fontWeight: "700",color: "white" }}>GỬI</Text>
            </TouchableOpacity>
        </View>



    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 30,
        paddingHorizontal: 30,
        backgroundColor: "white"

    },
    divImage: {
        width: 400,
        height: 250,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    circle: {
        borderWidth: 15,
        borderRadius: 100,
        borderColor: "black",
        width: 140,
        height: 140,
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: "bold",
    },
    secondTitle: {
        fontSize: 15,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "rgba(227, 192, 0, 1)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    columnButton: {
        flexDirection: "column",
        gap: 30,
        marginTop: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        width: "100%"
    },
    textAreaContainer: {
        flex: 1,
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        padding: 5,
        maxHeight: 150
    },
    textArea: {
        
        backgroundColor: "white",
        borderBottomWidth: 0,
        justifyContent: "flex-start"
    }

});
export default Screen2_b;