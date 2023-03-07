import React from 'react';
import { Text, View, FlatList, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import SSInputSearch from 'components/SSInputSearch';

const data = [
  {
    id: '1',
    title: 'Keyword',
  },
  {
    id: '2',
    title: 'Keyword',
  },
  {
    id: '3',
    title: 'Keyword',
  },
  {
    id: '4',
    title: 'Keyword',
  },
  {
    id: '5',
    title: 'Keyword',
  },
  {
    id: '6',
    title: 'Keyword',
  },
  {
    id: '7',
    title: 'Keyword',
  },
  {
    id: '8',
    title: 'Keyword',
  },
];

const renderItem1 = ({ item }: any) => {
  return (
    <View w={'25%'} h={'100%'} px={0.5}>
      <Pressable
        w={95}
        height={45}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={10}
        borderWidth={1}
        mt={2}
        backgroundColor={'#D1D1D6'}
      >
        <Text>KeyWord</Text>
      </Pressable>
    </View>
  );
};

const SearchProductScreen = () => {
  return (
    <View flex={1} py={5} px={3}>
      <SSInputSearch placeholder={'Search'}></SSInputSearch>
      <View flexDirection={'row'} justifyContent={'space-between'} mt={2}>
        <Text>History</Text>
        <Pressable flexDirection={'row'}>
          <Text>Clear All</Text>
          <Icon.Trash2 stroke="black" width={24} height={24} />
        </Pressable>
      </View>

      <View mt={1}>
        <FlatList
          w={'100%'}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem1}
          numColumns={4}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchProductScreen;
