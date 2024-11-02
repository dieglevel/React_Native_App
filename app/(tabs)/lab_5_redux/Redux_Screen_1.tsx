import { avatar, background, edit_2, gmail_icon, search_2, tick, todo_app } from "@/assets/images";
import { ITodo, remove, todo, updateCheck } from "@/types/redux/reduxs/todoRedux";
import { RootStackParamList } from "@/types/route";
import { useAppDispatch, useAppSelector } from "@/types/typeRedux";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

export interface IData {
    user: string;
    data: ITodo;
    handleUpdateTitle: (data: ITodo) => void;
    handleDelete: (data: ITodo) => void;
    handleUpdateCheck: (data: ITodo) => void;
}

const Redux_Screen_1 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "API_Screen_2">>();

    const { value } = useAppSelector(todo);
    const dispatch = useAppDispatch();

    const [user, setUser] = useState<string>(route.params?.user ? route.params.user : "");

    const handleUpdateCheck = (dataEdit: ITodo) => {
        dispatch(updateCheck(dataEdit))
    }

    const handleDelete = (dataRemove: ITodo) => {
        dispatch(remove(dataRemove))
    }

    const handleEdit = (dataEdit: ITodo) => {
        navigation.navigate("Redux_Screen_2", { user: user, data: dataEdit, type: "Edit" })
    }



    return (
        <ScrollView >
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>

                <FlatList style={{ width: "100%", marginHorizontal: "auto" }} data={value} renderItem={
                    (temp) => <RenderItem user={user} data={temp.item} handleDelete={handleDelete} handleUpdateCheck={handleUpdateCheck} handleUpdateTitle={handleEdit}></RenderItem>}>

                </FlatList>

                <TouchableOpacity onPress={() => { navigation.navigate("Redux_Screen_2", { user: user, type: "Add" }) }} style={{ borderRadius: 30, justifyContent: "center", alignContent: "center", width: 60, height: 60, backgroundColor: "rgba(0, 189, 214, 1)", borderColor: "rgba(0, 189, 214, 1)" }}>
                    <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "700" }}>{"+"}</Text>
                </TouchableOpacity>

            </View>


        </ScrollView>
    );
}

const RenderItem = (dataInput: IData) => {
    const navigate = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity onPress={() => {
            dataInput.handleUpdateCheck(dataInput.data)
        }} style={{ borderRadius: 15, marginTop: 10, width: "90%", marginHorizontal: "auto", padding: 10, paddingHorizontal: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", gap: 10, backgroundColor: "rgba(222, 225, 230, 0.47)", shadowColor: "rgba(23, 26, 31, 0.15)", shadowOpacity: 1 }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity>{dataInput.data.isChecked ? (<Image source={tick} style={{ width: 15 }}></Image>) : <View style={{ width: 15, height: 15 }}></View>}</TouchableOpacity>
                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 15 }}>{dataInput.data.title}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    dataInput.handleUpdateTitle(dataInput.data)
                }}><Image source={edit_2}></Image></TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dataInput.handleDelete(dataInput.data)
                }}><Text>Delete</Text></TouchableOpacity>
        </TouchableOpacity>
    )
}

export default Redux_Screen_1;