import { avatar, background, edit_2, gmail_icon, search_2, tick, todo_app } from "@/assets/images";
import { RootStackParamList } from "@/types/route";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface IData {
    id: string;
    title: string;
    handleUpdate: (id: string) => void;
    handleDelete: (id: string) => void;
}

const API_Screen_2 = () => {
    const [user, setUser] = useState<string>("Twinkle");
    const [data, setData] = useState<IData[]>([]);


    const handleAdd = () => {

    }

    const handleEdit = (id: string) => {

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
    }, [handleDelete])

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "Screen3_choice">>();
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
                <View style={{ width: "100%" }}>
                    <View style={{ flexDirection: "row", flex: 1, padding: 10, marginHorizontal: 10, borderRadius: 5, justifyContent: "center", alignContent: "center", gap: 10, borderWidth: 2 }}>
                        <Image source={search_2}></Image>
                        <TextInput style={{ flex: 1 }} placeholder="Search" />
                    </View>
                </View>
            </View>

            <FlatList style={{ width: "100%", marginHorizontal: "auto" }} data={data} renderItem={
                (temp) => <RenderItem id={temp.item.id} title={temp.item.title} handleDelete={handleDelete} handleUpdate={handleEdit}></RenderItem>}>

            </FlatList>

            <TouchableOpacity style={{ borderRadius: 30, justifyContent: "center", alignItems: "center", width: 60, height: 60, backgroundColor: "rgba(0, 189, 214, 1)", borderColor: "rgba(0, 189, 214, 1)" }}>
                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "700" }}>{"+"}</Text>
            </TouchableOpacity>

        </View>
    );
}

const RenderItem = (data: IData) => {

    const handleDelete = async (id: string) => {
        const response = await fetch(`https://6703aa81ab8a8f8927311ee8.mockapi.io/ToDo/${id}`, {
            method: "DELETE"
        });
        if (response.ok) {
            console.log("Delete success");
        }
    }
    return (
        <View style={{borderRadius: 15, marginTop: 10, width: "70%", marginHorizontal: "auto", padding: 10, paddingHorizontal: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", gap: 10, backgroundColor: "rgba(222, 225, 230, 0.47)", shadowColor: "rgba(23, 26, 31, 0.15)", shadowOpacity: 1 }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity onPress={() => {data.handleUpdate(data.id)}}><Image source={tick}></Image></TouchableOpacity>
                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 15 }}>{data.title}</Text>
            </View>
            <TouchableOpacity onPress={() => {handleDelete(data.id)}}><Image source={edit_2}></Image></TouchableOpacity>
        </View>
    )
}

export default API_Screen_2;