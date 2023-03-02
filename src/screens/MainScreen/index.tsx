import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Toast, Button } from 'native-base';
import { ActivityIndicator, TextInput } from 'react-native';
import { clearAuthTokens } from 'react-native-axios-jwt';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import { SignInPayload } from 'interfaces/Auth';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  // const [me, setMe] = useState([]);
  const [scrollEnable, setScrollEnable] = useState(false);
  const [formData, setFormData] = useState<SignInPayload>({
    email: 'quyentran.02062000@gmail.com',
    password: '123',
  });
  const [isLoaddingItemFY, setIsLoaddingItemFY] = useState(true);
  // const [size, setSize] = useState(4);
  let yOffset = '';

  const onSubmit = async () => {
    clearAuthTokens();
    try {
      const response = await authAPI.login(formData);
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  // const loadding = () => {
  //   setIsLoaddingItemFY(true);
  //   setInterval(() => {
  //     setIsLoaddingItemFY(false);
  //   }, 3000);
  // };

  // const getMe = async () => {
  //   let result: any;
  //   try {
  //     const response = await authAPI.me();
  //     result = response.data.result;
  //     Toast.show({
  //       title: response.data.result[0].full_name,
  //       duration: 3000,
  //     });
  //   } catch (e: any) {
  //     console.log(e);
  //     Toast.show({
  //       title: e.response?.data?.message,
  //       duration: 3000,
  //     });
  //   }
  //   console.log(result);
  //   setMe(result);
  // };

  const getCart = async () => {
    let result: any;
    try {
      const response = await authAPI.getProduct();
      result = response.data.result;
      Toast.show({
        title: response.data.result[0].name,
        duration: 3000,
      });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setCart(result);
  };

  const getProducts = async () => {
    let result: any;
    try {
      const response = await authAPI.getProduct();
      result = response.data.result;
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setData(result);
  };

  const onGetMe = async () => {
    try {
      const response = await authAPI.me();
      console.log(response.data);
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    onSubmit();
    getProducts();
    getCart();
    // getMe();
    setIsLoaddingItemFY(true);
    setFormData({ email: 'quyentran.02062000@gmail.com', password: '123' });
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={onGetMe}>Get ME</Button>
      <ScrollView
        bounces={false}
        nestedScrollEnabled
        directionalLockEnabled={false}
        horizontal={false}
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          yOffset = event.nativeEvent.contentOffset.y.toString();
          if (parseFloat(yOffset) > 50) {
            setScrollEnable(true);
          } else if (parseFloat(yOffset) === 0) {
            setScrollEnable(false);
          }
        }}
      >
        {/* <FlatList
          data={data}
          renderItem={null}
          contentContainerStyle={{ marginBottom: 50 }}
          onEndReached={() => {
            // console.log(isLoaddingItemFY);
            // setIsLoaddingItemFY(true);
            // loadding();
            // setTimeout(() => {
            //   setIsLoaddingItemFY(false);
            // }, 1000);
            setSize(size + 2);
          }}
          onScroll={(event) => {
            yOffset = event.nativeEvent.contentOffset.y.toString();
            if (parseFloat(yOffset) > 50) {
              setScrollEnable(true);
            } else if (parseFloat(yOffset) === 0) {
              setScrollEnable(false);
            }
            console.log(yOffset);
          }}
          onEndReachedThreshold={0.01}
          ListHeaderComponent={() => ( */}
        <View>
          <View>
            <SlideShowImage style={{}} />
            <FlatListProductCategory data={data} />
            <FlatListProductFlashSale data={data} />
          </View>
          <FlatListProductForYou
            size={6}
            data={data}
            footer={
              isLoaddingItemFY ? (
                <View style={{ marginVertical: 50 }}>
                  <ActivityIndicator size={30} />
                </View>
              ) : null
            }
          />
        </View>
        {/* //   )} */}
        {/* // /> */}
      </ScrollView>
      <View>
        <View style={scrollEnable ? styles.coverHeaderOnScroll : styles.coverHeader}>
          {scrollEnable ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
          <IconCart
            onPressCart={() => navigation.navigate('Cart')}
            onPressSearch={() => alert('search nè')}
            quantityItems={cart.length}
          />
        </View>
      </View>
    </View>
  );
};
