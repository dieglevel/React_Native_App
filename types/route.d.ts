type RootStackParamList = {
     Homepage: undefined;
     Screen1: undefined;
     Screen2: undefined;
     Screen3: undefined;
     Screen4: undefined;
     Screen5: undefined;
     Screen6: undefined;
     Screen7: undefined;
     Screen8: undefined;

     Screen2_a: undefined;
     Screen2_b: undefined;
     Screen2_c: undefined;
     Screen2_d: undefined;

     Screen3_detail: { choice: String };
     Screen3_choice: { choice: String };

     Screen4_a: undefined;
     Screen4_b: undefined;

     useStateHook: undefined;
     useEffectHook: undefined;
     useEffectOneTimeHook: undefined;
     useEffectDependencyHook: undefined;
     useEffectFetchDataHook: undefined;
     useReducerHook: undefined;
     useMemoHook: {numbers: number[]};
};

declare global {
     namespace ReactNavigation {
          interface RootParamList
               extends RootStackParamList {}
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
