import { ca_nau_lau, do_choi_dang_mo_hinh, ga_bo_toi, hieu_long_con_tre, lanh_dao_gian_don, trump, xa_can_cau } from "@/assets/images";
import { useEffect } from "react";
import { FlatList, Image, ImageSourcePropType, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Idata {
    id: number;
    title: string;
    shop_name: string;
    image: ImageSourcePropType | undefined;
}


const data: Idata[] =
    [{ "id": 1, "title": "Ca nấu lẩu, nấu mì mini...", "shop_name": "Devang", "image": ca_nau_lau },
    { "id": 2, "title": "1KG KHÔ GÀ BƠ TỎI ...", "shop_name": "LTD FOOD", "image": ga_bo_toi },
        { "id": 3, "title": "Xe cần cẩu đa năng", "shop_name": "Thế giới đồ chơi", "image": xa_can_cau },
        { "id": 4, "title": "Đồ chơi dạng mô hình", "shop_name": "Thế giới đồ chơi", "image": do_choi_dang_mo_hinh },
        { "id": 5, "title": "Lãnh đạo giản đơn", "shop_name": "Minh Long Book", "image": lanh_dao_gian_don },
        { "id": 6, "title": "Hiểu lòng con trẻ", "shop_name": "Minh Long Book", "image": hieu_long_con_tre },
        { "id": 7, "title": "Donal Trumn Thiên tài lãnh đeo đạo", "shop_name": "Minh Long Book", "image": trump },]

interface IPropsProudct {
    data: Idata;
}

const Product_Component: React.FC<IPropsProudct> = ({ data }: IPropsProudct) => {

    // useEffect(() => {
    //     fetch(data.image)
    // }
    // , [])

    return (
        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10, gap: 10, borderBottomWidth: 1, marginHorizontal: 3 }}>
            <View>
                <Image source={data.image} style={{ width: 100, height: 100 }}></Image>
            </View>
            <View>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>{data.title}</Text>
                <Text style={{ fontSize: 15, color: "red" }}>{data.shop_name}</Text>
            </View>

            <View style={{ alignItems: "flex-end", justifyContent: "flex-start", flex: 1 }}>

                <View style={{ width: 88, height: 38, backgroundColor: "#F31111", justifyContent: "center", alignItems: "center" }}>
                    <Text>Chat</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const Screen4_a = () => {
    return (
        <SafeAreaView style={{ gap: 10 }}>
            <FlatList data={data} renderItem={
                ({ item }) => <Product_Component data={item} ></Product_Component>
            }>

            </FlatList>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Screen4_a;