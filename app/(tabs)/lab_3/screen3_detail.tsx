import { question, start, vs_blue, vs_black, vs_red, vs_silver } from "@/assets/images";
import { RootStackParamList } from "@/types/route";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";



const Screen3_Detail = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "Screen3_choice">>();

    const [choice, setChoice] = useState<String>(route.params.choice);
    useEffect(() => {
        setChoice(route.params.choice);
    }, [route.params.choice]);


    return (
        <View style={{ paddingHorizontal: 10, gap: 10, justifyContent: "space-between", flex: 1, paddingVertical: 5 }}>
            <View style={{ flexDirection: "column", gap: 10 }}>
                <View style={{ justifyContent: "center", alignItems: "center" }} >
                    <Image source={choice === "vs_black" ? vs_black : (choice === "vs_blue" ? vs_blue : (choice === "vs_red" ? vs_red : vs_silver))} />
                    <Text style={{ fontSize: 15, fontWeight: "400" }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>


                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Image source={start} style={{ width: 23, height: 23 }} />
                        <Image source={start} style={{ width: 23, height: 23 }} />
                        <Image source={start} style={{ width: 23, height: 23 }} />
                        <Image source={start} style={{ width: 23, height: 23 }} />
                        <Image source={start} style={{ width: 23, height: 23 }} />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "400" }}>(Xem 828 đánh giá)</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "700" }}>1.790.000 đ</Text>
                    <Text style={{ fontSize: 15, fontWeight: "400", textDecorationLine: "line-through" }}>1.790.000 đ</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, gap: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: 'red' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image source={question} />
                </View>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 15, borderRadius: 15, }}
                    onPress={() => { navigation.navigate("Screen3_choice", {choice: choice}) }}
                >

                    <Text style={{ fontSize: 20 }}>4 MÀU-CHỌN MÀU</Text>
                    <Text style={{ position: "absolute", left: "95%", top: "30%", fontSize: 30 }}>{">"}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ backgroundColor: "red", flexDirection: "row", justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 15, borderRadius: 15, }}>
                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>CHỌN MUA</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Screen3_Detail;