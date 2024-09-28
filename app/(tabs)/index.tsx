import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Button, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import Ecommerce from './ecommerce';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen1';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Ecommerce'>
          <Stack.Screen name='Ecommerce' component={ScreenChange}/>
          <Stack.Screen name='screen1' component={Screen1}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

function ScreenChange () {
  const navigation:NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View>
      <Text>Ecommerce</Text>
      <TouchableOpacity onPress={() => {navigation.push}}><Text> abc</Text></TouchableOpacity>
    </View>
  )
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
