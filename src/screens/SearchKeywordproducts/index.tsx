import React from 'react';
import { Text, View } from 'native-base';
import * as Icon from 'react-native-feather';
import SSInputSearch from 'components/SSInputSearch';

const SearchKeywordproductsScreen = () => {
  return (
    <View flex={1} py={5} px={3}>
      <SSInputSearch placeholder={'Search'}></SSInputSearch>
      <View flexDirection={'row'} justifyContent={'space-between'} mt={2}>
        <View flexDirection={'row'}>
          <Icon.Clock stroke="black" width={24} height={24} />
          <Text ml={2} variant={'subtitle1'} fontFamily={'heading'} fontWeight={400}>
            Product 1
          </Text>
        </View>
        <Text variant={'subtitle2'} fontWeight={300}>
          Remove
        </Text>
      </View>

      <View flexDirection={'row'} justifyContent={'space-between'} mt={4}>
        <View flexDirection={'row'} justifyContent={'center'}>
          <Icon.Clock stroke="black" width={24} height={24} />
          <Text ml={2}>Product 2</Text>
        </View>
        <Text variant={'subtitle2'} fontWeight={300}>
          Remove
        </Text>
      </View>

      <View flexDirection={'row'} justifyItems={'center'} mt={4}>
        <Icon.Search stroke="black" width={24} height={24} />
        <Text ml={2}>Product 3</Text>
      </View>

      <View flexDirection={'row'} justifyItems={'center'} mt={4}>
        <Icon.Search stroke="black" width={24} height={24} />
        <Text ml={2}>Product 4</Text>
      </View>

      <View flexDirection={'row'} justifyItems={'center'} mt={4}>
        <Icon.Search stroke="black" width={24} height={24} />
        <Text ml={2}>Product 5</Text>
      </View>

      <View flexDirection={'row'} justifyItems={'center'} mt={4}>
        <Icon.Search stroke="black" width={24} height={24} />
        <Text ml={2}>Product 6</Text>
      </View>
    </View>
  );
};

export default SearchKeywordproductsScreen;
