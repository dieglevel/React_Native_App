import { background, gmail_icon, todo_app } from "@/assets/images";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

const API_Screen_1 = () => {

    return (
        <View style={{justifyContent: "center", alignItems: "center", marginVertical: "auto", gap: 40}}>
            <Image source={todo_app} style={{width: 150, height:150}}/>
            <Text style={{color: "purple", fontSize: 30, fontWeight: "700", textAlign: "center"}}>MANAGE YOUR TASK</Text>
            <View style ={{width: "100%"}}>
                <View style={{flexDirection: "row", flex: 1,padding: 10,  marginHorizontal: 10, borderRadius:5 ,justifyContent: "center", alignContent: "center", gap: 10, borderWidth: 2}}>
                    <Image source={gmail_icon}></Image>
                    <TextInput style={{flex:1  }} placeholder="Enter your name" />
                </View>
            </View>
            
            <Button style= {{backgroundColor: "#00BDD6", width: "50%", justifyContent: "center", alignContent: "center",}}>
                <Text style={{color: "white", fontWeight: "700", fontSize: 16}}>GET STARTED</Text>
            </Button>
        </View>
    );
}

export default API_Screen_1;