import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { background } from '@/assets/images';
import { Checkbox, TextInput } from 'react-native-paper';

export default function Screen2_d() {
    const [password, setPassword] = useState<string>("");
    const [passwordLength, setPasswordLength] = useState<number>(10);

    const [lowerCase, setLowerCase] = useState<boolean>(false);
    const [upCase, setUpcase] = useState<boolean>(false);
    const [number, setNumber] = useState<boolean>(false);
    const [specialKey, setSpecicalKey] = useState<boolean>(false);

    const generatePassword = () => {
        var result = "";
        var characters = "";
        if (lowerCase) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }
        if (upCase) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (number) {
            characters += "0123456789";
        }
        if (specialKey) {
            characters += "!@#$%^&*()";
        }
        if (characters === "") {
            return;
        }
        for (let i = 0; i < passwordLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(result);
        setPasswordLength(result.length);

        console.log("result: ", result);
    }



    return (
        <View style={{ flex: 1 }}>
            <Image source={background} style={{ position: "absolute", flex: 1, width: "100%", height: "100%" }} ></Image>
            <View style={{ backgroundColor: "rgba(35, 35, 91, 1)", margin: 20, borderRadius: 15, height: "95%" }}>
                <Text style={{ color: "white", fontSize: 30, justifyContent: 'center', fontWeight: "bold", alignItems: "center", textAlign: 'center', paddingTop: 40 }}>PASSWORD GENERATOR</Text>

                <TextInput style={{ backgroundColor: "rgba(21, 21, 55, 1)", margin: 20 }}
                    contentStyle={{ color: "#ffffff" }}
                    value={password}
                ></TextInput>

                <View style={{gap:20, padding: 20}}>


                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>Passowrd length</Text>
                        <TextInput style={{ flex: 1, backgroundColor: "#ffffff", margin: 20 }}
                            value={passwordLength.toString()}
                        ></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>Include lower case letters</Text>
                        <Checkbox status={lowerCase ? "checked" : "unchecked"} onPress={() => { setLowerCase(!lowerCase) }} color="white" ></Checkbox>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>Include upcase letters</Text>
                        <Checkbox status={upCase ? "checked" : "unchecked"} onPress={() => { setUpcase(!upCase) }} color="white" ></Checkbox>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>Include number</Text>
                        <Checkbox status={number ? "checked" : "unchecked"} onPress={() => { setNumber(!number) }} color="white" ></Checkbox>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>Include special symbol</Text>
                        <Checkbox status={specialKey ? "checked" : "unchecked"} onPress={() => { setSpecicalKey(!specialKey) }} color="white" ></Checkbox>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: "rgba(59, 59, 152, 1)", padding: 20, borderRadius: 10, alignItems: 'center' }} onPress={() => {generatePassword()}}>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }}>Generate Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "rgba(196, 196, 196, 1)",
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "rgba(196, 196, 196, 1)",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10

    },
    divImage: {
        width: 400,
        height: 250,
    },
    item: {
        backgroundColor: "white",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    itemRight: {
        justifyContent: "space-between"
    },
    itemTextHeader: {
        fontSize: 12,
        fontWeight: "bold",
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red"
    },
    itmPriceDiscount: {
        fontSize: 12,
        color: "gray",
        textDecorationLine: "line-through"
    },
    cart: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    cartComponent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    buttonDescrete: {
        backgroundColor: "rgba(196, 196, 196, 1)",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    buyNow: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "rgba(19, 79, 236, 1)",
        fontWeight: "bold",
    },
    discountButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderWidth: 2,
        borderColor: "rgba(128, 128, 128, 1)",
        padding: 4,
        paddingRight: 50
    },
    discountIcon: {
        width: 50,
        height: 20,
        backgroundColor: "rgba(242, 221, 27, 1)"
    },
    discountText: {
        color: "red",
        fontWeight: "bold"
    },
    applyButton: {
        backgroundColor: "rgba(10, 94, 183, 1)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10
    },
    applyText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    total: {
        color: "rgba(128, 128, 128, 1)",
        fontSize: 18,
        fontWeight: "bold"
    }



    // image: {
    //   width: "100%",
    //   height: "100%",
    // },
    // circle: {
    //   borderWidth: 15,
    //   borderRadius: 100,
    //   borderColor: "black",
    //   width: 140,
    //   height: 140,
    // },
    // mainTitle: {
    //   fontSize: 25,
    //   fontWeight: "bold",
    // },
    // secondTitle: {
    //   fontSize: 15,
    //   textAlign: "center",
    //   color: "black",
    //   fontWeight: "bold",
    // },
    // button: {
    //   backgroundColor: "rgba(227, 192, 0, 1)",
    //   paddingHorizontal: 20,
    //   paddingVertical: 10,
    //   borderRadius: 10
    // },
    // buttonText: {
    //   color: "black",
    //   fontSize: 20,
    //   fontWeight: "bold",
    //   textAlign: "center"
    // },
    // rowButton: {
    //   flexDirection: "row",
    //   gap: 30
    // }

});
