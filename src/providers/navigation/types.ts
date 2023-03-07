import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackNavigatorParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  OTP: undefined;
  SetPassWord: undefined;
  SetPassWordForgot: undefined;
  ForgotPassWord: undefined;
  OTPForgot: undefined;
  SearchProduct: undefined;
  SearchKeywordproducts: undefined;
  Product: undefined;

  Details: { name: string; description: string; price: number; image: string };
  Cart: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Favorites: undefined;
  Notification?: {
    itemId?: number;
  };
  Profile: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackNavigatorParamList>;

export type DetailRouteProp = RouteProp<AppStackNavigatorParamList, 'Details'>;

export type MainScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AppStackNavigatorParamList>,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;
