import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen5 = () => {
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 50}}>
                <Text style={{ fontWeight: 700, fontSize: 20 }}>LOGIN</Text>
            </View>
            <View style={{flex: 1, gap:5}}>

                <View style={styles.input}>
                    <Text style={styles.textInput}>Email</Text>
                </View>

                <View style={styles.input}>
                    <Text style={styles.textInput}>Password</Text>
                    <Image source={require("@/assets/images/eye 1.png")}></Image>
                </View>
            </View>

            <View style={[styles.input, { justifyContent: "center", alignItems: "center", backgroundColor:"#E53935"}]}>
                <Text style={[styles.textInput, {fontWeight: "bold", color: "white"}]}>LOGIN</Text>
            </View>
<View style={{flex:1, alignItems: "center", justifyContent: "center", gap:10}}>
            <Text>When you agree to terms and conditions</Text>
            <Text style={{color: "blue"}}>For got your password?</Text>
            <Text>Or login with</Text>
</View>

<View>
    <Image source={require("@/assets/images/Login_with.png")}></Image>
</View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(49, 170, 82, 0.19)",
        paddingVertical: 100,
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

export default Screen5;