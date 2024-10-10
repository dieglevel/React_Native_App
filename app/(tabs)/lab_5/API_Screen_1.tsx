import { background, gmail_icon, todo_app } from "@/assets/images";
import { RootStackParamList } from "@/types/route";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

const API_Screen_1 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [user, setUser] = useState<string>("");

    return (
        <View style={{justifyContent: "center", alignItems: "center", marginVertical: "auto", gap: 40}}>
            <Image source={todo_app} style={{width: 150, height:150}}/>
            <Text style={{color: "purple", fontSize: 30, fontWeight: "700", textAlign: "center"}}>MANAGE YOUR TASK</Text>
            <View style ={{width: "100%", }}>
                <View style={{flexDirection: "row",padding: 10,  marginHorizontal: 10, borderRadius:5 ,justifyContent: "center", alignItems: "center", gap: 10, borderWidth: 2}}>
                    <Image source={gmail_icon} style={{width: 20, height: 20}}></Image>
                    <TextInput style={{flex:1  }} placeholder="Enter your name" value={user} onChangeText={setUser} />
                </View>
            </View>
            
            <Button style= {{backgroundColor: "#00BDD6", width: "50%", justifyContent: "center", alignContent: "center",}} onPress={() => {
                navigation.navigate("API_Screen_2", { user: user });
            }}>
                <Text style={{color: "white", fontWeight: "700", fontSize: 16}}>GET STARTED</Text>
            </Button>
        </View>
    );
}

export default API_Screen_1;