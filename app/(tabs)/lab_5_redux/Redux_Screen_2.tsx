import { avatar, background, edit, edit_2, gmail_icon, search_2, tick, todo_app } from "@/assets/images";
import { add, ITodo, todo, updateTitle } from "@/types/redux/reduxs/todoRedux";
import { RootStackParamList } from "@/types/route";
import { useAppDispatch, useAppSelector } from "@/types/typeRedux";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const Redex_Screen_2 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "Redux_Screen_2">>();

    const { value } = useAppSelector(todo);
    const dispatch = useAppDispatch();

    const [user, setUser] = useState<string>(route.params.user);

    const [type, setType] = useState<"Add" | "Edit">(route.params.type);
    const [data, setData] = useState<ITodo | null>(route.params.data ? route.params.data : null);

    const [title, setTitle] = useState<string>(route.params.data ? route.params.data.title : "");

    const handleAdd = () => {
        dispatch(add({ id: Math.random().toString(), title: title, isChecked: false }))
    }

    const handleUpdate = (id: string, title: string) => {
        dispatch(updateTitle({ id: id, title: title }))
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
                        <TextInput style={{ flex: 1 }} placeholder={type == "Add" ? ("input your job") : data?.title} value={title} onChangeText={setTitle} />
                    </View>
                </View>
            </View>



            <TouchableOpacity
                onPress={() => {
                    if (type === "Add") {
                        handleAdd();
                    }
                    else {
                        handleUpdate(data!.id, title);
                    }

                    navigation.navigate("Redux_Screen_1");
                }
                }

                style={{ padding: 10, paddingHorizontal: 90, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 189, 214, 1)", borderColor: "rgba(0, 189, 214, 1)" }}>
                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "700", color: "white" }}>{"FINISH ->"}</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Redex_Screen_2;