import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Button, Pressable } from 'react-native';

import Ecommerce from './ecommerce';
import { NavigationContainer, NavigationProp, TabRouter, useNavigation, useNavigationBuilder } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Screen4 from './screen4';
import Screen5 from './screen5';
import Screen6 from './screen6';
import Screen7 from './screen7';
import Screen8 from './screen8';
import Screen4_a from './screen4_a';
import { RootStackParamList } from '@/types/route';
import Screen2_a from './screen2_a';

const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation, route, options }: NativeStackHeaderProps) => {
  return (
    <View style={{marginTop: 30}}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>Back</Text></TouchableOpacity>
      <Text >{route.name}</Text>
    </View>
  );
};

export default function HomeScreen() {

  return (
    <View style={{ flex: 1, marginTop: -32 }}>

      <NavigationContainer independent={true} >
        <Stack.Navigator initialRouteName='HomePage' screenOptions={{ header: (props) => <CustomHeader {...props} /> }}>
          <Stack.Screen name="HomePage" component={Homapage} />
          <Stack.Screen name='Screen1' component={Screen1} />
          <Stack.Screen name='Screen2' component={Screen2} />
          <Stack.Screen name='Screen3' component={Screen3} />
          <Stack.Screen name='Screen4' component={Screen4} />
          <Stack.Screen name='Screen5' component={Screen5} />
          <Stack.Screen name='Screen6' component={Screen6} />
          <Stack.Screen name='Screen7' component={Screen7} />
          <Stack.Screen name='Screen8' component={Screen8} />
          <Stack.Screen name='Screen2_a' component={Screen2_a} />
          <Stack.Screen name='Ecommerce' component={Ecommerce} />
          <Stack.Screen name='Screen4_a' component={Screen4_a} />

        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

function Homapage() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={[styles.mainContainer, { backgroundColor: "white" }]}>
      <TouchableOpacity style={styles.buttonDescrete} ><Text style={styles.buttonText}>Homepage</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen1") }}><Text style={styles.buttonText}>Screen1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2") }}><Text style={styles.buttonText}>Screen2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen3") }}><Text style={styles.buttonText}>Screen3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen4") }}><Text style={styles.buttonText}>Screen4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen5") }}><Text style={styles.buttonText}>Screen5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen6") }}><Text style={styles.buttonText}>Screen6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen7") }}><Text style={styles.buttonText}>Screen7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen8") }}><Text style={styles.buttonText}>Screen8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2_a") }}><Text style={styles.buttonText}>Screen2_a</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Ecommerce") }}><Text style={styles.buttonText}>Ecommerce</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen4_a") }}><Text style={styles.buttonText}>Screen4_a</Text></TouchableOpacity>

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
    backgroundColor: "green",
    color: "white",
    borderRadius: 5,
    width: "70%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  buttonText: {
    color: "white",
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
