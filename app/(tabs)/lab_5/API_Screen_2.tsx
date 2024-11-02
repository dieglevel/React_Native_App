import { avatar, background, edit_2, gmail_icon, search_2, tick, todo_app } from "@/assets/images";
import { RootStackParamList } from "@/types/route";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export interface IData {
    user: string;
    id: string;
    title: string;
    handleUpdate: (id: string, title: string) => void;
    handleDelete: (id: string) => void;
}

const API_Screen_2 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "API_Screen_2">>();
    const [user, setUser] = useState<string>(route.params?.user ? route.params.user : "");
    const [data, setData] = useState<IData[]>([]);

    const handleEdit = async (id: string, title: string) => {
        const response = await fetch(`https://6703aa81ab8a8f8927311ee8.mockapi.io/ToDo/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: title }),
        });
        if (response.ok) {
            console.log("Edit success");
        }
    }
        
    const handleDelete = async (id: string) => {
        const response = await fetch(`https://6703aa81ab8a8f8927311ee8.mockapi.io/ToDo/${id}`, {
            method: "DELETE"
        });
        if (response.ok) {
            console.log("Delete success");
        }
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://6703aa81ab8a8f8927311ee8.mockapi.io/ToDo");
            const data = await response.json();
            setData(data);
        }
        getData();
    }, [handleDelete, handleEdit]);


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
                    <View style={{ flexDirection: "row", padding: 10, marginHorizontal: 10, borderRadius: 5, justifyContent: "center", alignItems: "center", gap: 10, borderWidth: 1 }}>
                        <Image source={search_2} style={{ width: 20, height: 20 }}></Image>
                        <TextInput style={{ flex: 1 }} placeholder="Search" />
                    </View>
                </View>
            </View>

            <FlatList style={{ width: "100%", marginHorizontal: "auto" }} data={data} renderItem={
                (temp) => <RenderItem user={user} id={temp.item.id} title={temp.item.title} handleDelete={handleDelete} handleUpdate={handleEdit}></RenderItem>}>

            </FlatList>

            <TouchableOpacity onPress={() => { navigation.navigate("API_Screen_3", { user: user, type: "Add" }) }} style={{ borderRadius: 30, justifyContent: "center", alignItems: "center", width: 60, height: 60, backgroundColor: "rgba(0, 189, 214, 1)", borderColor: "rgba(0, 189, 214, 1)" }}>
                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "700" }}>{"+"}</Text>
            </TouchableOpacity>

        </View>
    );
}

const RenderItem = (dataInput: IData) => {
    const navigate = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={{ borderRadius: 15, marginTop: 10, width: "90%", marginHorizontal: "auto", padding: 10, paddingHorizontal: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", gap: 10, backgroundColor: "rgba(222, 225, 230, 0.47)", shadowColor: "rgba(23, 26, 31, 0.15)", shadowOpacity: 1 }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity><Image source={tick}></Image></TouchableOpacity>
                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 15 }}>{dataInput.title}</Text>
            </View>
            <TouchableOpacity 
            onPress={() => { 
                navigate.navigate("API_Screen_3", {
                     type: "Edit", 
                     user: dataInput.user, 
                     data: { 
                        id: dataInput.id,
                        title: dataInput.title,
                        handleUpdate: dataInput.handleUpdate, 
                        handleDelete: dataInput.handleDelete,
                        user: dataInput.user
                        } 
                        }) }}><Image source={edit_2}></Image></TouchableOpacity>
        </View>
    )
}

export default API_Screen_2;