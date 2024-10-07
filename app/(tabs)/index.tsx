import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Button, Pressable, ScrollView } from 'react-native';

import { NavigationContainer, NavigationProp, TabRouter, useNavigation, useNavigationBuilder } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/route';

import Screen1 from './lab_1/screen1';
import Screen2 from './lab_1/screen2';
import Screen3 from './lab_1/screen3';
import Screen4 from './lab_1/screen4';
import Screen5 from './lab_1/screen5';
import Screen6 from './lab_1/screen6';
import Screen7 from './lab_1/screen7';
import Screen8 from './lab_1/screen8';

import Screen2_a from './lab_2/screen2_a';
import Screen2_b from './lab_2/screen2_b';
import Screen2_c from './lab_2/screen2_c';
import Screen2_d from './lab_2/screen2_d';

import Screen4_a from './lab_4/screen4_a';
import Screen3_Detail from './lab_3/screen3_detail';
import Screen3_Choice from './lab_3/screen3_choice';
import { bi_cart_check, goBack, search } from '@/assets/images';
import Screen4_b from './lab_4/screen4_b';
import UseStateComponent from './hook/useState';
import UseEffectComponent from './hook/useEffect';
import UseEffectOneTimeComponent from './hook/useEffectOneTime';
import UseEffectDependencyComponent from './hook/useEffectDependency';
import UseEffectFetchDataComponent from './hook/useEffectFetchData';
import CountComponent from './hook/useReducer/countComponent';
import UseMemoComponent from './hook/useMemo';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomHeader = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={{ alignItems: 'center', marginTop: 30, backgroundColor: "rgba(27, 169, 255, 1)", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 12 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Image source={goBack}></Image></TouchableOpacity>
      <Text style={{ color: "white", fontSize: 30 }}>Chat</Text>
      <Image source={bi_cart_check}></Image>
    </View>
  );
};

const CustomHeader2 = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={{ alignItems: 'center', marginTop: 30, backgroundColor: "rgba(27, 169, 255, 1)", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 12 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Image source={goBack}></Image></TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: "white", flexDirection: "row", gap: 10, padding: 10, width: "55%", justifyContent: "flex-start", alignItems: 'center' }}>
        <Image source={search}></Image>
        <Text>Dây cáp usb</Text>
      </TouchableOpacity>
      <Image source={bi_cart_check}></Image>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 30, marginBottom: 10 }}>...</Text>
    </View>
  );
};

export default function HomeScreen() {

  return (
    <View style={{ flex: 1, marginTop: -32 }}>

      <NavigationContainer independent={true} >
        <Stack.Navigator initialRouteName='Homepage'>
          <Stack.Screen name="Homepage" component={Homapage} />
          <Stack.Screen name='Screen1' component={Screen1} />
          <Stack.Screen name='Screen2' component={Screen2} />
          <Stack.Screen name='Screen3' component={Screen3} />
          <Stack.Screen name='Screen4' component={Screen4} />
          <Stack.Screen name='Screen5' component={Screen5} />
          <Stack.Screen name='Screen6' component={Screen6} />
          <Stack.Screen name='Screen7' component={Screen7} />
          <Stack.Screen name='Screen8' component={Screen8} />

          <Stack.Screen name='Screen2_a' component={Screen2_a} />
          <Stack.Screen name='Screen2_b' component={Screen2_b} />
          <Stack.Screen name='Screen2_c' component={Screen2_c} />
          <Stack.Screen name='Screen2_d' component={Screen2_d} />

          <Stack.Screen name='Screen3_detail' component={Screen3_Detail} />
          <Stack.Screen name='Screen3_choice' component={Screen3_Choice} />

          <Stack.Screen name='Screen4_a' component={Screen4_a} options={{ header: (props) => <CustomHeader></CustomHeader>, }} />
          <Stack.Screen name='Screen4_b' component={Screen4_b} options={{ header: (props) => <CustomHeader2></CustomHeader2>, }} />

          <Stack.Screen name='useStateHook' component={UseStateComponent} />
          <Stack.Screen name='useEffectHook' component={UseEffectComponent} />
          <Stack.Screen name='useEffectOneTimeHook' component={UseEffectOneTimeComponent} />
          <Stack.Screen name='useEffectDependencyHook' component={UseEffectDependencyComponent} />
          <Stack.Screen name='useReducerHook' component={CountComponent} />
          <Stack.Screen name='useMemoHook' component={UseMemoComponent}/>

        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

function Homapage() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <ScrollView style={[{ backgroundColor: "white", gap: 10, flex: 1 }]}>
      <TouchableOpacity style={styles.buttonDescrete} ><Text style={styles.buttonText}>Homepage</Text></TouchableOpacity>

      <View style={styles.component}>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen1") }}><Text style={styles.buttonText}>Screen1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2") }}><Text style={styles.buttonText}>Screen2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen3") }}><Text style={styles.buttonText}>Screen3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen4") }}><Text style={styles.buttonText}>Screen4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen5") }}><Text style={styles.buttonText}>Screen5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen6") }}><Text style={styles.buttonText}>Screen6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen7") }}><Text style={styles.buttonText}>Screen7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen8") }}><Text style={styles.buttonText}>Screen8</Text></TouchableOpacity>
      </View>

      <View style={styles.component}>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2_a") }}><Text style={styles.buttonText}>Screen2_a</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2_b") }}><Text style={styles.buttonText}>Screen2_b</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2_c") }}><Text style={styles.buttonText}>Screen2_c</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen2_d") }}><Text style={styles.buttonText}>Screen2_d</Text></TouchableOpacity>
      </View>
      <View style={styles.component}>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen3_detail", { choice: "vs_blue" }) }}><Text style={styles.buttonText}>Screen3_detail</Text></TouchableOpacity>
      </View>

      <View style={styles.component}>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen4_a") }}><Text style={styles.buttonText}>Screen4_a</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("Screen4_b") }}><Text style={styles.buttonText}>Screen4_b</Text></TouchableOpacity>
      </View>

      <View style={styles.component}>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useStateHook") }}><Text style={styles.buttonText}>useStateHook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useEffectHook") }}><Text style={styles.buttonText}>useEffectHook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useEffectOneTimeHook") }}><Text style={styles.buttonText}>useEffectOneTimeHook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useEffectDependencyHook") }}><Text style={styles.buttonText}>useEffectDependencyHook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useEffectFetchDataHook") }}><Text style={styles.buttonText}>useEffectFetchDataHook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useReducerHook") }}><Text style={styles.buttonText}>useReducerHook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonDescrete} onPress={() => { navigation.navigate("useMemoHook", {numbers: [1,2,3]}) }}><Text style={styles.buttonText}>useMemoHook</Text></TouchableOpacity>
      </View>



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  component: {
    padding: 20,
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    borderColor: "rgba(128, 128, 128, 1)",
  },
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
    marginHorizontal: 10,
    marginVertical: 5,
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
