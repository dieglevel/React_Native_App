import { vs_black, vs_blue, vs_red, vs_silver } from "@/assets/images";
import { RootStackParamList } from "@/types/route";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

const Screen3_Choice = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "Screen3_choice">>();
    const [choice, setChoice] = useState<String>(route.params.choice);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "flex-start", flexDirection: "row", padding: 20, gap: 20, }} >
                <Image style={{ height: 128, width: 100 }} source={choice === "vs_black" ? vs_black : (choice === "vs_blue" ? vs_blue : (choice === "vs_red" ? vs_red : vs_silver))} />
                <View style={{ width: "70%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "400" }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <Text style={{ fontSize: 20, fontWeight: "400" }}>Màu: <Text>{choice === "vs_black" ? "Đen" : (choice === "vs_blue" ? "Xanh" : (choice === "vs_red" ? "Đỏ" : "Bạc"))}</Text></Text>

                    <View style={{flexDirection: "row", gap: 10}}>

                    <Text style={{ fontSize: 20, fontWeight: "400" }}>Cung cấp bởi</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tiki Tradding</Text>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>1.790.000 đ</Text>

                </View>
            </View>
            
            <View style={{ flexDirection: "column", justifyContent: "space-between", padding: 20, backgroundColor: "rgba(196, 196, 196, 1)", flex:1 }}>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>Chọn màu bên dưới:</Text>

                <View style={{justifyContent: "center", alignItems: "center", gap: 10}}>
                    <TouchableOpacity onPress={() => {setChoice("vs_silver")}} style={{ width: 120, height: 120, backgroundColor: "rgba(197, 241, 251, 1)"}}></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setChoice("vs_red")}} style={{ width: 120, height: 120, backgroundColor: "rgba(243, 13, 13, 1)"}}></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setChoice("vs_black")}} style={{ width: 120, height: 120, backgroundColor: "rgba(0, 0, 0, 1)"}}></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setChoice("vs_blue")}} style={{ width: 120, height: 120, backgroundColor: "rgba(35, 72, 150, 1)"}}></TouchableOpacity>
                </View>

                <TouchableOpacity 
                onPress={() => { navigation.navigate("Screen3_detail", {choice: choice}) }}
                style={{ backgroundColor: "rgba(25, 82, 226, 0.58)", borderRadius: 15, justifyContent: "center", alignItems: "center", padding: 10}}><Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>XONG</Text></TouchableOpacity>
            </View>
        </View>);
}

export default Screen3_Choice;