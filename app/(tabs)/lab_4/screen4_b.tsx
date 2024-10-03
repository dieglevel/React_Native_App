import { ca_nau_lau, carbusbtop2, daucam1, dauchuyendoi1, dauchuyendoipsps2, daynguon, disable_star, do_choi_dang_mo_hinh, ga_bo_toi, giachuyen_1, Group_11, hieu_long_con_tre, lanh_dao_gian_don, start, trump, xa_can_cau } from "@/assets/images";
import { useEffect } from "react";
import { FlatList, Image, ImageSourcePropType, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Idata {
    id: number;
    title: string;
    rate: number;
    count_rate: number;
    price: number;
    discount: number;
    image: ImageSourcePropType | undefined;
}


const data: Idata[] =
    [{
        id: 1,
        title: "Cáp chuyển từ Cổng USB sang PS2...",
        rate: 4,
        count_rate: 15,
        price: 69.000,
        discount: 39,
        image: giachuyen_1
    },
    {
        id: 2,
        title: "Cáp chuyển từ Cổng USB sang PS2...",
        rate: 4,
        count_rate: 15,
        price: 69.000,
        discount: 39,
        image: daynguon
    },
    {
        id: 3,
        title: "Cáp chuyển từ Cổng USB sang PS2...",
        rate: 4,
        count_rate: 15,
        price: 69.000,
        discount: 39,
        image: dauchuyendoipsps2
    }, {
        id: 4,
        title: "Cáp chuyển từ Cổng USB sang PS2...",
        rate: 4,
        count_rate: 15,
        price: 69.000,
        discount: 39,
        image: dauchuyendoi1
    }, {
        id: 5,
        title: "Cáp chuyển từ Cổng USB sang PS2...",
        rate: 4,
        count_rate: 15,
        price: 69.000,
        discount: 39,
        image: carbusbtop2
    }, {
        id: 1,
        title: "Cáp chuyển từ Cổng USB sang PS2...",
        rate: 4,
        count_rate: 15,
        price: 69.000,
        discount: 39,
        image: daucam1
    },

    ]

interface IPropsProudct {
    data: Idata;
}

const Product_Component: React.FC<IPropsProudct> = ({ data }: IPropsProudct) => {
    return (
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 5 }}>
            <Image source={data.image}></Image>
            <Text>{data.title}</Text>
            <View style={{ flexDirection: "row", width: "100%", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    <Image source={start} style={{ width: 13, height: 13 }}></Image>
                    <Image source={start} style={{ width: 13, height: 13 }}></Image>
                    <Image source={start} style={{ width: 13, height: 13 }}></Image>
                    <Image source={start} style={{ width: 13, height: 13 }}></Image>
                    <Image source={disable_star}></Image>

                </View>
                <Text>{"(" + data.count_rate + ")"}</Text>

            </View>

            <View style={{ flexDirection: "row", width: "100%", gap: 10, alignItems: "center", paddingHorizontal: 10 }}>
                <Text>{data.price + ".000 đ"}</Text>
                <Text style={{textDecorationLine: "line-through", color: "gray"}}>{data.discount + "%"}</Text>

            </View>
        </TouchableOpacity>
    );
}

const Screen4_a = () => {
    return (
        <View style={{ flexDirection: "column", justifyContent: "space-between", flex: 1, paddingBottom: 48 }}>

            <SafeAreaView style={{ gap: 10, paddingBottom: 10, height: "100%" }}>
                <FlatList data={data} renderItem={
                    ({ item }) => <Product_Component data={item} ></Product_Component>
                }
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                >

                </FlatList>


            </SafeAreaView >
            <Image source={Group_11} style={{ width: "100%" }}></Image>

        </View>
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