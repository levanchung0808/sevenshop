import React, { useState } from 'react';
import { Text, View, FlatList, Pressable, Image, Modal, Input } from 'native-base';
import * as Icon from 'react-native-feather';
import SSInputSearch from 'components/SSInputSearch';

const data = [
  {
    id: '1',
    title: 'The Bodacious Period Essential T-Shirt',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.ThmKsOdlJutZumjUHsxbXwHaIK?pid=ImgDet&w=1361&h=1500&rs=1',
    category: 'T-Shrit',
  },
  {
    id: '2',
    title: 'Alstyle Essential T-Shirt',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/R.1042542be1a853baf9993f9ab8b49081?rik=ir5NnhPDLNDRyA&pid=ImgRaw&r=0',
    category: 'T-Shrit',
  },
  {
    id: '3',
    title: 'The Bodacious Period Essential T-Shirt',
    price: '300.000',
    image: 'https://i.pinimg.com/originals/ca/0f/56/ca0f5658847ed0a0efb6c77a2c7d95ac.jpg',
    category: 'T-Shrit',
  },
  {
    id: '4',
    title: 'Alstyle Essential T-Shirt',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.u46lTC4iNSc02-2kvW0qjQHaJb?pid=ImgDet&w=1571&h=2000&rs=1',
    category: 'T-Shrit',
  },
  {
    id: '5',
    title: 'Keyword',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.zjbr3E-Jn0KcnJ-sfJAPVQHaJ4?pid=ImgDet&w=510&h=680&rs=1',
    category: 'T-Shrit',
  },
  {
    id: '6',
    title: 'Keyword',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/OIP.yNCkERw1wSN810ADQahHLwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    category: 'T-Shrit',
  },
  {
    id: '7',
    title: 'Keyword',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/OIP.yNCkERw1wSN810ADQahHLwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    category: 'T-Shrit',
  },
  {
    id: '8',
    title: 'Keyword',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/OIP.yNCkERw1wSN810ADQahHLwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    category: 'T-Shrit',
  },
];

const data1 = [
  { id: '1', category: 'Shirt', size: 'S', price: '0 - 100,000', review: '5 sao' },
  {
    id: '2',
    category: 'Shirt',
    size: 'M',
    price: '100,000 - 200,000',
    review: '5 sao',
  },
  {
    id: '3',
    category: 'Shirt',
    size: 'L',
    price: '100,000 - 200,000',
    review: '4 sao',
  },
  {
    id: '4',
    category: 'Shirt',
    size: 'XL',
    price: '0 - 100,000',
    review: '3 sao',
  },
  {
    id: '5',
    category: 'Shirt',
    size: 'S',
    price: '0 - 100,000',
    review: '2 sao',
  },
  {
    id: '6',
    category: 'Shirt',
    size: 'S',
    price: '0 - 100,000',
    review: '1 sao',
  },
  {
    id: '7',
    category: 'Shirt',
    size: 'S',
    price: '0 - 100,000',
    review: '0 sao',
  },
  {
    id: '8',
    category: 'Shirt',
    size: 'S',
    price: '0 - 100,000',
    review: '5 sao',
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
        <Text variant={'body1'}>{item.title}</Text>
        <Text color={'primary.600'} fontWeight={500} fontFamily={'heading'}>
          {item.price}đ
        </Text>
      </View>
    </Pressable>
  );
};

const renderItem2 = ({ item }: any) => {
  return (
    <Pressable
      flexDirection={'row'}
      borderRadius={7}
      h={31}
      w={71}
      ml={4}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'gray.300'}
    >
      <Text variant={'caption'} textAlign={'center'}>
        {item.category}
      </Text>
    </Pressable>
  );
};

const renderItem3 = ({ item }: any) => {
  return (
    <Pressable
      flexDirection={'row'}
      borderRadius={7}
      h={31}
      w={71}
      ml={4}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'gray.300'}
    >
      <Text variant={'caption'} textAlign={'center'}>
        {item.size}
      </Text>
    </Pressable>
  );
};

const renderItem4 = ({ item }: any) => {
  return (
    <Pressable
      flexDirection={'row'}
      borderRadius={7}
      h={31}
      px={3}
      ml={4}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'gray.300'}
    >
      <Text variant={'caption'} textAlign={'center'}>
        {item.price}
      </Text>
    </Pressable>
  );
};

const renderItem5 = ({ item }: any) => {
  return (
    <Pressable
      flexDirection={'row'}
      borderRadius={7}
      h={31}
      w={71}
      ml={4}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'gray.300'}
    >
      <Text variant={'caption'} textAlign={'center'}>
        {item.review}
      </Text>
    </Pressable>
  );
};

const ProductScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View flex={1} py={5} px={3} backgroundColor={'white'}>
      <SSInputSearch placeholder={'Search'}></SSInputSearch>

      <View flexDirection={'row'} borderRadius={3} borderWidth={0} w={'100%'} mt={2} py={1} px={3}>
        <Pressable
          flexDirection={'row'}
          borderRadius={7}
          h={31}
          w={71}
          px={2}
          alignItems={'center'}
          backgroundColor={'#D1D1D6'}
          onPress={() => setShowModal(true)}
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
            Latest
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
            Hot Selling
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
            Relate
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
            Price
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

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={'100%'} style={{ marginBottom: 0, marginTop: 'auto' }}>
          {/* <Modal.CloseButton /> */}

          <Modal.Body height="auto" w="full">
            <View
              flexDirection={'row'}
              justifyContent={'space-between'}
              justifyItems={'center'}
              alignItems={'center'}
            >
              <Icon.ChevronLeft stroke="black" width={24} height={24} />
              <Text variant={'title'}>Filter</Text>
              <Text variant={'caption'}>Reset</Text>
            </View>
            <Text mt={4} variant={'button'}>
              Category
            </Text>
            <View borderBottomWidth={0.4} py={2}>
              <FlatList
                w={'100%'}
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={renderItem2}
                horizontal
              ></FlatList>
            </View>
            <Text mt={4} variant={'button'}>
              Size
            </Text>
            <View mt={2}>
              <FlatList
                w={'100%'}
                keyExtractor={(item) => item.id}
                data={data1}
                renderItem={renderItem3}
                horizontal
              ></FlatList>
            </View>
            <Text mt={4} variant={'button'}>
              Price
            </Text>
            <View justifyItems={'center'}>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                px={6}
                alignItems={'flex-end'}
              >
                <View w="45%" h={30} backgroundColor={'gray.300'} mt={2} borderRadius={10}>
                  <Input
                    textAlign={'center'}
                    alignItems={'center'}
                    w={{ base: '100%' }}
                    h={'100%'}
                    variant="unstyleds"
                    placeholder="MIN"
                    placeholderTextColor={'black'}
                  />
                </View>
                <Icon.Minus stroke="grey" width={24} height={24} />
                <View w="45%" h={30} backgroundColor={'gray.300'} mt={2} borderRadius={10}>
                  <Input
                    textAlign={'center'}
                    alignItems={'center'}
                    w={{ base: '100%' }}
                    h={'100%'}
                    variant="unstyleds"
                    placeholder="MAX"
                    placeholderTextColor={'black'}
                  />
                </View>
              </View>
              <FlatList
                mt={3}
                w={'100%'}
                keyExtractor={(item) => item.id}
                data={data1}
                renderItem={renderItem4}
                horizontal
              ></FlatList>
            </View>
            <Text mt={4} variant={'button'}>
              Customer review
            </Text>
            <View mt={2}>
              <FlatList
                w={'100%'}
                keyExtractor={(item) => item.id}
                data={data1}
                renderItem={renderItem5}
                horizontal
              ></FlatList>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              width="100%"
              height="43"
              borderRadius="6"
              backgroundColor="#AC1506"
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text color="white" fontWeight="bold" fontSize="14">
                Apply
              </Text>
            </Pressable>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default ProductScreen;
