import { avatar, background, edit, edit_2, gmail_icon, search_2, tick, todo_app } from "@/assets/images";
import { RootStackParamList } from "@/types/route";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { IData } from "./API_Screen_2";


const API_Screen_3 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "API_Screen_3">>();

    const [user, setUser] = useState<string>(route.params.user);

    const [type, setType] = useState<"Add" | "Edit">(route.params.type);
    const [data, setData] = useState<IData | null>(route.params.data ? route.params.data : null);

    const [title, setTitle] = useState<string>(route.params.data ? route.params.data.title : "");

    const handleAdd =async () => {
        const response = await fetch("https://6703aa81ab8a8f8927311ee8.mockapi.io/ToDo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: title })
        });
        if (response.ok) {
            console.log("Add success");
        }
    }
    const handleUpdate = (id: string, title: string) => {
         route.params.data?.handleUpdate(id, title);
    }

    const handleDelete = async (id: string) => {
        route.params.data?.handleDelete(id);
    }

    return (
        <View style={{ justifyContent: "flex-start", alignItems: "center", gap: 40 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: 30 }}>
                <View>
                    <TouchableOpacity ><Text style={{ fontSize: 30, fontWeight: "700" }}>{"<-"}</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={avatar}></Image>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Hi, {user}</Text>
                        <Text style={{ color: "rgba(23, 26, 31, 0.75)", fontSize: 14, fontWeight: "700" }}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: "100%", paddingHorizontal: 30 }}>
                <View style={{ width: "100%", }}>
                    <View style={{ flexDirection: "row", padding: 10, marginHorizontal: 10, borderRadius: 5, justifyContent: "center", alignItems: "center", gap: 10 }}>
                        <Text
                            style={{ fontSize: 40, fontWeight: "700", color: "rgba(23, 26, 31, 0.75)" }}
                        >{type === "Add" ? "ADD" : "EDIT"} YOUR JOB</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: "100%", paddingHorizontal: 30 }}>
                <View style={{ width: "100%", }}>
                    <View style={{ flexDirection: "row", padding: 10, marginHorizontal: 10, borderRadius: 5, justifyContent: "center", alignItems: "center", gap: 10, borderWidth: 1 }}>
                        <Image source={edit}></Image>
                        <TextInput style={{ flex: 1 }} placeholder={type == "Add" ? ("input your job") : data?.title} value={title} onChangeText={setTitle}/>
                    </View>
                </View>
            </View>



            <TouchableOpacity
                onPress={() => {
                    if (type === "Add") {
                        handleAdd();
                    }
                    else {
                        handleUpdate(route.params.data?.id? route.params.data.id : "-1", title);
                    }

                    navigation.navigate("API_Screen_2", {user: route.params.user});
                }
                }

                style={{ padding: 10, paddingHorizontal: 90, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 189, 214, 1)", borderColor: "rgba(0, 189, 214, 1)" }}>
                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "700", color: "white" }}>{"FINISH ->"}</Text>
            </TouchableOpacity>

        </View>
    );
}

export default API_Screen_3;