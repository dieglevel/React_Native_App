import { Image, StyleSheet, Text, View } from "react-native";
import { RadioButton } from 'react-native-paper';
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Screen6 = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>REGISTER</Text>

            <View style={styles.input}>
                <Text style={styles.textInput}>Name</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.textInput}>Phone</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.textInput}>Email</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.textInput}>Password</Text>
                <Image source={require("@/assets/images/eye 1.png")}></Image>
            </View>
            <View style={styles.input}>
                <Text style={styles.textInput}>Birthday</Text>
            </View>

            <View style={[styles.input, {backgroundColor: "transparent", justifyContent: "flex-start", paddingHorizontal: 0 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <RadioButton
                        value="first"
                    />
                    <Text>Male</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <RadioButton
                        value="Female"
                    />
                    <Text>Female</Text>
                </View>
            </View>


            <View style={[styles.input, { justifyContent: "center", alignItems: "center", backgroundColor: "#E53935" }]}>
                <Text style={[styles.textInput, { fontWeight: "bold", color: "white" }]}>REGISTER</Text>
            </View>

            <View >
                <Text>When you agree to terms and conditions</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "rgba(49, 170, 82, 0.19)",
        gap: 20,
        paddingTop: 10

    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 300,
        height: 40,
        paddingHorizontal: 20,
        backgroundColor: "rgba(196, 196, 196, 0.3)",
    },
    textInput: {
        fontSize: 18,
    }
});

export default Screen6;