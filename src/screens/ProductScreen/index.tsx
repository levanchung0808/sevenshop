import React from 'react';
import { Text, View, FlatList, Pressable, Image } from 'native-base';
import * as Icon from 'react-native-feather';
import SSInputSearch from 'components/SSInputSearch';

const data = [
  {
    id: '1',
    title: 'The Bodacious Period Essential T-Shirt',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.ThmKsOdlJutZumjUHsxbXwHaIK?pid=ImgDet&w=1361&h=1500&rs=1',
  },
  {
    id: '2',
    title: 'Alstyle Essential T-Shirt',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/R.1042542be1a853baf9993f9ab8b49081?rik=ir5NnhPDLNDRyA&pid=ImgRaw&r=0',
  },
  {
    id: '3',
    title: 'The Bodacious Period Essential T-Shirt',
    price: '300.000',
    image: 'https://i.pinimg.com/originals/ca/0f/56/ca0f5658847ed0a0efb6c77a2c7d95ac.jpg',
  },
  {
    id: '4',
    title: 'Alstyle Essential T-Shirt',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.u46lTC4iNSc02-2kvW0qjQHaJb?pid=ImgDet&w=1571&h=2000&rs=1',
  },
  {
    id: '5',
    title: 'Keyword',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.zjbr3E-Jn0KcnJ-sfJAPVQHaJ4?pid=ImgDet&w=510&h=680&rs=1',
  },
  {
    id: '6',
    title: 'Keyword',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/OIP.yNCkERw1wSN810ADQahHLwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: '7',
    title: 'Keyword',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/OIP.yNCkERw1wSN810ADQahHLwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: '8',
    title: 'Keyword',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/OIP.yNCkERw1wSN810ADQahHLwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
];

const renderItem1 = ({ item }: any) => {
  return (
    <Pressable w={'51%'} h={'100%'}>
      <View w={197} h={270} borderRadius={1} mt={2}>
        <Image
          alt="Image OTP"
          w={197}
          h={197}
          source={{
            uri: item.image,
          }}
        />
        <Text variant={'body1'} fontWeight={500} fontFamily={'heading'}>
          {item.title}
        </Text>
        <Text color={'primary.600'} fontWeight={500} fontFamily={'heading'}>
          {item.price}đ
        </Text>
      </View>
    </Pressable>
  );
};

const ProductScreen = () => {
  return (
    <View flex={1} py={5} px={3} backgroundColor={'white'}>
      <SSInputSearch placeholder={'Search'}></SSInputSearch>

      <View flexDirection={'row'} borderRadius={3} borderWidth={0} w={'100%'} mt={2} py={1} px={3}>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          h={31}
          w={71}
          alignItems={'center'}
          backgroundColor={'#D1D1D6'}
        >
          <Icon.Filter stroke="black" width={18} height={18} />
          <Text ml={1} variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Filter
          </Text>
        </Pressable>

        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          h={31}
          w={71}
          ml={1}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'} textAlign={'center'}>
            Mới nhất
          </Text>
        </Pressable>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          h={31}
          w={71}
          ml={1}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Bán chạy
          </Text>
        </Pressable>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          h={31}
          w={71}
          ml={1}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Liên quan
          </Text>
        </Pressable>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          h={31}
          w={90}
          ml={1}
          px={1}
          alignItems={'center'}
          justifyContent={'space-between'}
          backgroundColor={'gray.300'}
        >
          <Text variant={'caption'} fontWeight={500} fontFamily={'heading'}>
            Giá
          </Text>
          <Icon.ChevronDown stroke="black" width={20} height={20} />
        </Pressable>
      </View>

      <View>
        <FlatList
          w={'100%'}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem1}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
