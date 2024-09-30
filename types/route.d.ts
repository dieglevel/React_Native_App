type RootStackParamList = {
  Ecommerce: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
  Screen6: undefined;
  Screen7: undefined;
  Screen8: undefined;
  Screen2_1: undefined;
  Homepage: undefined;
  Screen4_a: undefined;
};


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type HomeScreenNavigationProp =
     NativeStackNavigationProp<
          RootStackParamList,
          "HomePage"
     >;
export type HomeScreenRouteProp = RouteProp<
     RootStackParamList,
     "HomePage"
>;