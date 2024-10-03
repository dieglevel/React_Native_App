import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';


export default function Screen2_c() {
    const [price, setPrice] = useState(141800);
    const [quantity, setQuantity] = useState(0);

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price).replace('₫', 'đ');
    };

    const handleDecrease = () => {
        setQuantity(quantity > 0 ? quantity - 1 : 0);
    }

    const handleIncrease = () => {
        setQuantity(quantity >= 0 ? quantity + 1 : 0);
    }

    return (
        // <View style={styles.mainContainer}>
        //   <View style={styles.circle}>
        //   </View>
        //   <Text style={styles.mainTitle}>GROW YOUR BUSINESS</Text>
        //   <Text style={styles.secondTitle}>We will help you to grow your business using online server</Text>
        // <View style={styles.rowButton}>
        //     <ThemedView style={styles.button}>
        //       <ThemedText style={styles.buttonText}>LOGIN</ThemedText>
        //     </ThemedView>

        //     <ThemedView style={styles.button}>
        //       <ThemedText style={styles.buttonText}>SIGN UP</ThemedText>
        //     </ThemedView>
        // </View>
        // </View>
        <View style={styles.main}>


            <View style={styles.mainContainer}>
                <View style={styles.item}>
                    <Image source={require("@/assets/images/book.png")}></Image>

                    <View style={styles.itemRight}>

                        <Text style={styles.itemTextHeader}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.itemTextHeader}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.itemPrice}>{formatPrice(price)}</Text>
                        <Text style={styles.itmPriceDiscount} >{formatPrice(price)}</Text>
                        <View style={styles.cart}>
                            <View style={styles.cartComponent} >
                                <TouchableOpacity style={styles.buttonDescrete} onPress={() => { handleDecrease() }}>
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>

                                <Text>{quantity}</Text>

                                <TouchableOpacity style={styles.buttonDescrete} onPress={() => { handleIncrease() }}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>


                            </View>
                            <View>
                                <Text style={styles.buyNow}>Mua sau</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.discountButton}>
                        <View style={styles.discountIcon}></View>
                        <Text style={styles.discountText}>Mã giảm giá </Text>
                    </View>

                    <View style={styles.applyButton}>
                        <Text style={styles.applyText}>Áp dụng</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>

                    <Text style={styles.buyNow}>Nhập tại đây?</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}>Tạm tính</Text>

                    <Text style={styles.itemPrice}>{formatPrice(price * quantity)}</Text>
                </View>


            </View>
            <View style={styles.item}>
                <Text style={styles.total}>Thành tiền</Text>

                <Text style={styles.itemPrice}>{formatPrice(price * quantity)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "rgba(196, 196, 196, 1)",
        justifyContent: "center",
        alignItems: "center",
    },
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "rgba(196, 196, 196, 1)",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10

    },
    divImage: {
        width: 400,
        height: 250,
    },
    item: {
        backgroundColor: "white",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    itemRight: {
        justifyContent: "space-between"
    },
    itemTextHeader: {
        fontSize: 12,
        fontWeight: "bold",
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red"
    },
    itmPriceDiscount: {
        fontSize: 12,
        color: "gray",
        textDecorationLine: "line-through"
    },
    cart: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    cartComponent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    buttonDescrete: {
        backgroundColor: "rgba(196, 196, 196, 1)",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    buyNow: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "rgba(19, 79, 236, 1)",
        fontWeight: "bold",
    },
    discountButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderWidth: 2,
        borderColor: "rgba(128, 128, 128, 1)",
        padding: 4,
        paddingRight: 50
    },
    discountIcon: {
        width: 50,
        height: 20,
        backgroundColor: "rgba(242, 221, 27, 1)"
    },
    discountText: {
        color: "red",
        fontWeight: "bold"
    },
    applyButton: {
        backgroundColor: "rgba(10, 94, 183, 1)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10
    },
    applyText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    total: {
        color: "rgba(128, 128, 128, 1)",
        fontSize: 18,
        fontWeight: "bold"
    }



    // image: {
    //   width: "100%",
    //   height: "100%",
    // },
    // circle: {
    //   borderWidth: 15,
    //   borderRadius: 100,
    //   borderColor: "black",
    //   width: 140,
    //   height: 140,
    // },
    // mainTitle: {
    //   fontSize: 25,
    //   fontWeight: "bold",
    // },
    // secondTitle: {
    //   fontSize: 15,
    //   textAlign: "center",
    //   color: "black",
    //   fontWeight: "bold",
    // },
    // button: {
    //   backgroundColor: "rgba(227, 192, 0, 1)",
    //   paddingHorizontal: 20,
    //   paddingVertical: 10,
    //   borderRadius: 10
    // },
    // buttonText: {
    //   color: "black",
    //   fontSize: 20,
    //   fontWeight: "bold",
    //   textAlign: "center"
    // },
    // rowButton: {
    //   flexDirection: "row",
    //   gap: 30
    // }

});
