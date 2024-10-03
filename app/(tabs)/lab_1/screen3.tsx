import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';



export default function Screen3() {
    return (
        <LinearGradient colors={['#rgba(199, 244, 246, 1)', '#rgba(199, 244, 246, 1)', '#rgba(199, 244, 246, 1)', '#rgba(199, 244, 246, 1)', '#rgba(199, 244, 246, 1)', '#rgba(0, 204, 249, 1)']} style={styles.mainContainer}>
            <Image source={require("@/assets/images/Group.png")}>
            </Image>
            <Text style={styles.mainTitle}>FORGET PASSWORD</Text>
            <Text style={styles.secondTitle}>Provide your account’s email for which you want to reset your password</Text>

            <View style={styles.columnButton}>

                <ThemedView style={{ backgroundColor: "rgba(196, 196, 196, 1)", alignItems: "center", paddingHorizontal: 16, flexDirection: "row", width: "80%" }}>
                    <Image source={require("@/assets/images/2744492898368.png")}></Image>
                    <ThemedText style={styles.buttonText}>Email</ThemedText>
                </ThemedView>
                <ThemedView style={{ width: "80%", alignContent: "center", paddingHorizontal: 16, padding: 8, backgroundColor: "rgba(227, 192, 0, 1)"}}>
                    <ThemedText style={styles.buttonText}>SIGN UP</ThemedText>
                </ThemedView>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
        gap: 100

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
        fontSize: 25,
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
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    columnButton: {
        flexDirection: "column",
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100%"
    }

});
