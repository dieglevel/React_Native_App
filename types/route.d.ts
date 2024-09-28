type RootStackParamList = {
  ecommerce: undefined;
  screen1: undefined;
};


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}