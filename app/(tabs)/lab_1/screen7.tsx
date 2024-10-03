import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen7 = () => {
    return (
        <LinearGradient colors={['#rgba(251,203,0,1))', '#rgba(191,154,0,1)']} style={styles.mainContainer}>
            <Text style={styles.mainTitle}>LOGIN</Text>

            <View style={styles.columnButton}>

                <View style={styles.input}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Image source={require("@/assets/images/avatar_user 1.png")} style={{ width: 25, height: 25 }}></Image>
                        <Text style={styles.textInput}>Username</Text>
                    </View>
                </View>

                <View style={styles.input}>
                    <View style={{flex:1 ,flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Image source={require("@/assets/images/Group.png")} style={{width: 25, height: 25}}></Image>
                        <Text style={styles.textInput}>Password</Text>
                    </View>
                    <Image source={require("@/assets/images/eye 1.png")}></Image>
                </View>
                <ThemedView style={{ width: "80%", alignContent: "center", paddingHorizontal: 16, padding: 8, backgroundColor: "black" }}>
                    <ThemedText style={styles.buttonText}>SIGN UP</ThemedText>
                </ThemedView>
                <Text style={styles.mainTitle}>CREATE ACCOUNT</Text>

            </View>
        </LinearGradient>



    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 0,
        paddingHorizontal: 30

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
    input: {
        borderWidth: 1,
        borderColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400,
        height: 54,
        paddingHorizontal: 20,
        backgroundColor: "rgba(196, 196, 196, 0.3)",
    },
    textInput: {
        fontSize: 18,
    }

});
export default Screen7;