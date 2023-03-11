import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountSettingScreen from 'screens/AccountSettingScreen';
import Cart from 'screens/CartScreen';
import DetailScreen from 'screens/DetailsScreen';
import ForgotPasswordScreen from 'screens/FogotPasswordScreen';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import OTPForgotScreen from 'screens/OTPForgotScreen';
import OTPScreen from 'screens/OTPScreen';
import ProductFavoritesScreen from 'screens/ProductFavoritesScreen';
import ProductScreen from 'screens/ProductScreen';
import ProfileScreen from 'screens/ProfileScreen';
import RegisterScreen from 'screens/RegisterScreen';
import SearchKeywordproductsScreen from 'screens/SearchKeywordproducts';
import SearchProductScreen from 'screens/SearchProductScreen';
import SetPasswordForgotScreen from 'screens/SetPasswordForgotScreen';
import SetPassWordScreen from 'screens/SetPasswordScreen';
import { AppStackNavigatorParamList } from './types';

const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();
const { Navigator, Screen } = AppStack;

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Screen name="Details" component={DetailScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="OTP" component={OTPScreen} />
      <Screen name="OTPForgot" component={OTPForgotScreen} />
      <Screen name="SetPassWord" component={SetPassWordScreen} />
      <Screen name="ForgotPassWord" component={ForgotPasswordScreen} />
      <Screen name="Cart" component={Cart} />
      <Screen name="SetPassWordForgot" component={SetPasswordForgotScreen} />
      <Screen name="SearchProduct" component={SearchProductScreen} />
      <Screen name="SearchKeywordproducts" component={SearchKeywordproductsScreen} />
      <Screen name="Product" component={ProductScreen} />
      <Screen name="ProductFavorites" component={ProductFavoritesScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="AccountSettings" component={AccountSettingScreen} />
    </Navigator>
  );
};

export default StackNavigator;
