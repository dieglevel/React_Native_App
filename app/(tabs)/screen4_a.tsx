import { useEffect } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Idata {
    id: number;
    title: string;
    shop_name: string;
    image: string;
}


const data: Idata[] =
    [{ "id": 1, "title": "Samsung", "shop_name": "Finance", "image": "http://dummyimage.com/233x100.png/dddddd/000000" },
    { "id": 2, "title": "Motorola", "shop_name": "n/a", "image": "http://dummyimage.com/163x100.png/dddddd/000000" },
    { "id": 3, "title": "Benefon", "shop_name": "Finance", "image": "http://dummyimage.com/209x100.png/dddddd/000000" },
    { "id": 4, "title": "Panasonic", "shop_name": "n/a", "image": "http://dummyimage.com/212x100.png/5fa2dd/ffffff" },
    { "id": 5, "title": "Lenovo", "shop_name": "Basic Industries", "image": "http://dummyimage.com/203x100.png/dddddd/000000" },
    { "id": 6, "title": "vivo", "shop_name": "Consumer Services", "image": "http://dummyimage.com/181x100.png/5fa2dd/ffffff" },
    { "id": 7, "title": "Samsung", "shop_name": "Capital Goods", "image": "http://dummyimage.com/225x100.png/ff4444/ffffff" },
    { "id": 8, "title": "Orange", "shop_name": "n/a", "image": "http://dummyimage.com/130x100.png/dddddd/000000" },
    { "id": 9, "title": "Archos", "shop_name": "Public Utilities", "image": "http://dummyimage.com/140x100.png/cc0000/ffffff" },
    { "id": 10, "title": "alcatel", "shop_name": "n/a", "image": "http://dummyimage.com/161x100.png/5fa2dd/ffffff" },
    { "id": 11, "title": "Samsung", "shop_name": "Public Utilities", "image": "http://dummyimage.com/116x100.png/5fa2dd/ffffff" },
    { "id": 12, "title": "Intex", "shop_name": "Public Utilities", "image": "http://dummyimage.com/237x100.png/cc0000/ffffff" },
    { "id": 13, "title": "BLU", "shop_name": "Health Care", "image": "http://dummyimage.com/183x100.png/dddddd/000000" },
    { "id": 14, "title": "Sendo", "shop_name": "Capital Goods", "image": "http://dummyimage.com/237x100.png/5fa2dd/ffffff" },
    { "id": 15, "title": "Samsung", "shop_name": "Health Care", "image": "http://dummyimage.com/246x100.png/ff4444/ffffff" },
    { "id": 16, "title": "Xiaomi", "shop_name": "Capital Goods", "image": "http://dummyimage.com/233x100.png/5fa2dd/ffffff" },
    { "id": 17, "title": "Allview", "shop_name": "Consumer Services", "image": "http://dummyimage.com/137x100.png/ff4444/ffffff" },
    { "id": 18, "title": "Samsung", "shop_name": "Public Utilities", "image": "http://dummyimage.com/107x100.png/dddddd/000000" },
    { "id": 19, "title": "Samsung", "shop_name": "Health Care", "image": "http://dummyimage.com/183x100.png/ff4444/ffffff" },
    { "id": 20, "title": "HP", "shop_name": "Consumer Durables", "image": "http://dummyimage.com/187x100.png/ff4444/ffffff" },
    { "id": 21, "title": "Philips", "shop_name": "Technology", "image": "http://dummyimage.com/187x100.png/cc0000/ffffff" },
    { "id": 22, "title": "Bird", "shop_name": "Technology", "image": "http://dummyimage.com/115x100.png/dddddd/000000" },
    { "id": 23, "title": "Ericsson", "shop_name": "Finance", "image": "http://dummyimage.com/242x100.png/dddddd/000000" },
    { "id": 24, "title": "LG", "shop_name": "Finance", "image": "http://dummyimage.com/237x100.png/cc0000/ffffff" },
    { "id": 25, "title": "Yezz", "shop_name": "Finance", "image": "http://dummyimage.com/200x100.png/dddddd/000000" },
    { "id": 26, "title": "Yezz", "shop_name": "n/a", "image": "http://dummyimage.com/153x100.png/ff4444/ffffff" },
    { "id": 27, "title": "Tecno", "shop_name": "Technology", "image": "http://dummyimage.com/177x100.png/ff4444/ffffff" },
    { "id": 28, "title": "HTC", "shop_name": "Health Care", "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff" },
    { "id": 29, "title": "Samsung", "shop_name": "Miscellaneous", "image": "http://dummyimage.com/193x100.png/dddddd/000000" },
    { "id": 30, "title": "ZTE", "shop_name": "n/a", "image": "http://dummyimage.com/135x100.png/cc0000/ffffff" },
    { "id": 31, "title": "Energizer", "shop_name": "Consumer Services", "image": "http://dummyimage.com/213x100.png/dddddd/000000" },
    { "id": 32, "title": "Samsung", "shop_name": "Finance", "image": "http://dummyimage.com/194x100.png/5fa2dd/ffffff" },
    { "id": 33, "title": "Lava", "shop_name": "Health Care", "image": "http://dummyimage.com/215x100.png/cc0000/ffffff" },
    { "id": 34, "title": "Motorola", "shop_name": "Finance", "image": "http://dummyimage.com/148x100.png/ff4444/ffffff" },
    { "id": 35, "title": "BLU", "shop_name": "Capital Goods", "image": "http://dummyimage.com/132x100.png/ff4444/ffffff" },
    { "id": 36, "title": "Philips", "shop_name": "Consumer Non-Durables", "image": "http://dummyimage.com/135x100.png/ff4444/ffffff" },
    { "id": 37, "title": "Sony", "shop_name": "Capital Goods", "image": "http://dummyimage.com/117x100.png/ff4444/ffffff" },
    { "id": 38, "title": "BLU", "shop_name": "Finance", "image": "http://dummyimage.com/209x100.png/dddddd/000000" },
    { "id": 39, "title": "Motorola", "shop_name": "Finance", "image": "http://dummyimage.com/138x100.png/ff4444/ffffff" },
    { "id": 40, "title": "HTC", "shop_name": "Miscellaneous", "image": "http://dummyimage.com/143x100.png/ff4444/ffffff" },
    { "id": 41, "title": "Icemobile", "shop_name": "Finance", "image": "http://dummyimage.com/117x100.png/dddddd/000000" },
    { "id": 42, "title": "Sagem", "shop_name": "Health Care", "image": "http://dummyimage.com/124x100.png/5fa2dd/ffffff" },
    { "id": 43, "title": "Samsung", "shop_name": "n/a", "image": "http://dummyimage.com/154x100.png/cc0000/ffffff" },
    { "id": 44, "title": "Innostream", "shop_name": "Capital Goods", "image": "http://dummyimage.com/234x100.png/dddddd/000000" },
    { "id": 45, "title": "Sony", "shop_name": "Energy", "image": "http://dummyimage.com/247x100.png/ff4444/ffffff" },
    { "id": 46, "title": "Nokia", "shop_name": "n/a", "image": "http://dummyimage.com/239x100.png/ff4444/ffffff" },
    { "id": 47, "title": "Honor", "shop_name": "Technology", "image": "http://dummyimage.com/213x100.png/dddddd/000000" },
    { "id": 48, "title": "Yezz", "shop_name": "Consumer Non-Durables", "image": "http://dummyimage.com/196x100.png/ff4444/ffffff" },
    { "id": 49, "title": "Realme", "shop_name": "Basic Industries", "image": "http://dummyimage.com/226x100.png/cc0000/ffffff" },
    { "id": 50, "title": "i-mobile", "shop_name": "Finance", "image": "http://dummyimage.com/243x100.png/ff4444/ffffff" }]


interface IPropsProudct {
    data: Idata;
}

const Product_Component: React.FC<IPropsProudct> = ({ data }: IPropsProudct) => {

    // useEffect(() => {
    //     fetch(data.image)
    // }
    // , [])

    return (
        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10, gap: 10, borderBottomWidth: 1, marginHorizontal: 3}}>
            <View>
                <Image source={{ uri: data.image }} style={{ width: 100, height: 100 }}></Image>
            </View>
            <View>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>{data.title}</Text>
                <Text style={{ fontSize: 15, color: "red" }}>{data.shop_name}</Text>
            </View>

<View style={{alignItems: "flex-end", justifyContent: "flex-start", flex:1 }}>

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