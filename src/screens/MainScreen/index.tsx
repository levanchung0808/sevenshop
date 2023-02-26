import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Toast, Button } from 'native-base';
import { ActivityIndicator, TextInput } from 'react-native';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [Data1, setData1] = useState([]);
  const [scrollEnable, setScrollEnable] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [formData, setData] = useState<SignInPayload>({
    email: 'quyentran.02062000@gmail.com',
    password: '123',
  });
  const [isLoaddingItemFY, setIsLoaddingItemFY] = useState(false);
  // const [refreshScroll, setrefreshScroll] = useState(false);
  let yOffset = '';

  // const onSubmit = async () => {
  //   clearAuthTokens();
  //   try {
  //     const response = await authAPI.login(formData);
  //     Toast.show({
  //       title: response.data.message,
  //       duration: 3000,
  //     });
  //   } catch (e: any) {
  //     Toast.show({
  //       title: e.response?.data?.message,
  //       duration: 3000,
  //     });
  //   }
  // };
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
    // console.log(result.skip(1).limit(1));
    setData1(result);
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
    // onSubmit();
    getProducts();
    setIsLoaddingItemFY(true);
    // setIsLoaddingItemCategory(true);

    // setData({ email: 'quyentran.02062000@gmail.com', password: '123' });
    // console.log(deviceId);
  }, []);

  // useEffect(() => {
  //   if (isLoader) {
  //     setTimeout(() => {
  //       setIsLoader(false);
  //     }, 1000);
  //   }
  // }, [isLoader]);
  // type State = {
  //   page: number;
  //   // data: [];
  // };

  return (
    <View style={styles.container}>
      <Button onPress={onGetMe}>Get ME</Button>
      <ScrollView
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
          data={Data1}
          renderItem={null}
          contentContainerStyle={{ marginBottom: 50 }}
          onEndReached={() => {
            console.log(isLoader);
            setIsLoader(true);
            // setTimeout(() => {
            //   setIsLoader(false);
            // }, 1000);
          }}
          onEndReachedThreshold={0.01}
          ListHeaderComponent={() => ( */}
        <View>
          <View>
            <SlideShowImage style={{}} />
            <FlatListProductCategory
              data={Data1}
              // onEndReadChy={() => {
              //   setIsLoaddingItemCategory(true);
              //   setTimeout(() => {
              //     setIsLoaddingItemCategory(false);
              //   }, 1000);
              // }}
              // ListFooterComponent={() =>
              //   isLoaddingItemCategory ? (
              //     <View>
              //       <ActivityIndicator />
              //     </View>
              //   ) : (
              //     <View></View>
              //   )
              // }
            />
            <FlatListProductFlashSale />
          </View>
          <FlatListProductForYou
            data={Data1}
            footer={
              isLoaddingItemFY ? (
                <View style={{ marginVertical: 50 }}>
                  <ActivityIndicator size={30} />
                </View>
              ) : (
                <View></View>
              )
            }
          />
        </View>
        {/* )} */}
        {/* // /> */}
      </ScrollView>
      <View>
        <View style={scrollEnable ? styles.coverHeaderOnScroll : styles.coverHeader}>
          {scrollEnable ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
          <IconCart
            onPressCart={() => navigation.navigate('Cart')}
            onPressSearch={() => alert('search nè')}
            quantityItems="20"
          />
        </View>
      </View>
    </View>
  );
};
