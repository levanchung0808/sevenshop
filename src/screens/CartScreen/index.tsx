import React, { useState } from 'react';
import { Text, View, Pressable, Box, FlatList, Image, Button, Modal, Flex } from 'native-base';
import * as Icon from 'react-native-feather';

// import ButtonCategory from 'components/ButtonCategory';
const Cart = () => {
  const data = [
    {
      id: '1',
      Name: 'Áo cardigan nữ siêu đẹp ',
      Size: '12',
      Clore: 'White',
      price1: '500.000',
      price2: '200.000',
      amount: '1',
      avatarUrl: 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
    },
    {
      id: '2',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '500.000',
      price2: '300.000',
      amount: '1',
      avatarUrl: 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
    },
    {
      id: '3',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '500.000',
      price2: '300.000',
      amount: '1',
      avatarUrl: 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
    },
    {
      id: '4',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '500.000',
      price2: '300.000',
      amount: '1',
      avatarUrl: 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
    },
    {
      id: '5',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '500.000',
      price2: '300.000',
      amount: '1',
      avatarUrl:
        'https://th.bing.com/th/id/R.00182bf023bee72ae785640353db9521?rik=lSDLYCBRazoeVQ&pid=ImgRaw&r=0',
    },
    {
      id: '6',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '200',
      price2: '300',
      amount: '1',
      avatarUrl:
        'https://th.bing.com/th/id/R.00182bf023bee72ae785640353db9521?rik=lSDLYCBRazoeVQ&pid=ImgRaw&r=0',
    },
    {
      id: '7',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '200',
      price2: '300',
      amount: '1',
      avatarUrl:
        'https://th.bing.com/th/id/R.00182bf023bee72ae785640353db9521?rik=lSDLYCBRazoeVQ&pid=ImgRaw&r=0',
    },
    {
      id: '8',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '200',
      price2: '300',
      amount: '1',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '9',
      Name: 'Áo cardigan nữ siêu đẹp',
      Size: '12',
      Clore: 'White',
      price1: '200',
      price2: '300',
      amount: '1',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

  const dataColor = [
    {
      title: 'Cyan',
      data: 'cyan.500',
    },
    {
      title: 'Yellow',
      data: 'yellow.100',
    },
    {
      title: 'Violet',
      data: 'violet.200',
    },
    {
      title: 'red',
      data: 'red.200',
    },
    {
      title: 'blue',
      data: 'blue.200',
    },
    {
      title: 'white',
      data: 'white',
    },
    {
      title: 'green',
      data: 'green.300',
    },
    {
      title: 'black',
      data: 'black',
    },
  ];

  const dataSize = [
    {
      title: 'Size S',
      data: 'S',
    },
    {
      title: 'Size M',
      data: 'M',
    },
    {
      title: 'Size L',
      data: 'L',
    },
    {
      title: 'Size XL',
      data: 'XL',
    },
    {
      title: 'Size XXL',
      data: 'XXL',
    },
    {
      title: 'Size XXXL',
      data: 'XXXL',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  let [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>();

  const renderItem1 = ({ item }: any) => {
    return (
      <View flexDirection={'row'} mt={2} w={'100%'} h={110} alignItems={'center'} borderRadius={10}>
        <View w={'6%'}>
          <Pressable
            justifyContent={'center'}
            alignItems={'center'}
            w={6}
            h={6}
            backgroundColor={'primary.600'}
            borderRadius={20}
          >
            <Icon.Check stroke="#FFFFFF" width={20} height={20} />
          </Pressable>
        </View>

        <View flexDirection={'row'} w={'100%'}>
          <View ml={1} w={'27%'} h={'100%'} borderRadius={10}>
            <Image
              alt="Image nè"
              borderRadius={10}
              w={'100%'}
              h={'100%'}
              source={{
                uri: item.avatarUrl,
              }}
            />
          </View>
          <View
            flexDirection={'column'}
            ml={2}
            w={'72%'}
            height={'100%'}
            justifyContent={'space-between'}
          >
            <Text variant={'subtitle1'}>{item.Name}</Text>

            <Pressable
              mt={1}
              borderWidth={0.5}
              borderColor={'coolGray.400'}
              w={'40%'}
              borderRadius={4}
              flexDirection={'row'}
              alignItems={'center'}
              onPress={() => setShowModal(true)}
            >
              <View flexDirection={'row'} ml={2} w={'70%'}>
                <Text variant={'caption'}>{item.Clore},</Text>
                <Text ml={1} variant={'caption'}>
                  {item.Size}
                </Text>
              </View>

              <Icon.ChevronDown stroke="black" width={24} height={24} />
            </Pressable>
            <View w={'100%'} flexDirection={'row'}>
              <View w={'60%'}>
                <Text mt={1} fontSize={12} strikeThrough color={'gray.400'}>
                  {item.price1} đ
                </Text>

                <Text mt={1} color={'primary.600'} variant={'button'}>
                  {item.price2} đ
                </Text>
              </View>
              <View flexDirection={'row'} alignItems={'center'} mt={4}>
                <Pressable onPress={() => setQuantity(quantity--)}>
                  <Icon.Minus stroke="black" width={18} height={18} />
                </Pressable>

                <View
                  w={6}
                  h={6}
                  borderRadius={4}
                  borderWidth={0.5}
                  borderColor={'coolGray.400'}
                  ml={2}
                  mr={2}
                >
                  <Text fontWeight={'bold'} fontSize={14} textAlign={'center'}>
                    {quantity}
                  </Text>
                </View>
                <Pressable onPress={() => setQuantity(quantity++)}>
                  <Icon.Plus stroke="black" width={18} height={18} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View w={'100%'} h={'100%'} flex={1} p={3} mt={2} alignItems={'center'} justifyItems={'center'}>
      <View w={'100%'} flexDirection={'row'} mt={3} alignItems={'center'}>
        <Icon.ChevronLeft stroke="#1C1C1C" width={24} height={24} />
        <Text>Cart</Text>
      </View>

      <View w={'100%'} flexDirection={'row'} justifyItems={'center'} mt={3}>
        <View w={'95%'} flexDirection={'row'}>
          <Pressable
            justifyContent={'center'}
            alignItems={'center'}
            w={6}
            h={6}
            backgroundColor={'primary.600'}
            borderRadius={20}
          >
            <Icon.Check stroke="#FFFFFF" width={20} height={20} />
          </Pressable>

          <Text ml={2}>Select All</Text>
        </View>
        <View w={'5%'}>
          <Icon.Trash2 stroke="#ac1506" width={24} height={24} />
        </View>
      </View>

      <View h={'70%'}>
        <FlatList keyExtractor={(item) => item.id} data={data} renderItem={renderItem1} />
      </View>

      <View flex={1} flexDirection={'row'} w={'100%'} mt={110}>
        <Text flex={1} fontSize={20} fontWeight={'bold'}>
          Total
        </Text>
        <Text ml={3} color={'primary.600'} textAlign={'right'} variant={'title'}>
          500.000đ
        </Text>
      </View>
      <View backgroundColor={'amber.200'} width={'100%'}>
        <Button width={'100%'}>
          <Text fontSize={14} color="light.100" fontWeight={'bold'}>
            Buy Now
          </Text>
        </Button>
      </View>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={'100%'} style={{ marginBottom: 0, marginTop: 'auto' }}>
          <Modal.CloseButton />

          <Modal.Body height="auto" w="full">
            <Flex direction="row" marginBottom="3">
              <Image
                source={{
                  uri: 'https://th.bing.com/th/id/OIP.oUOPI9UXvoNDMrG-0D9KTgHaJL?pid=ImgDet&rs=1',
                }}
                alt="Alternate Text"
                size="full"
                w={100}
                h={100}
                borderRadius={10}
              />
              <Flex marginLeft="2" direction="column" height="100" justifyContent="space-between">
                <Box>
                  <Text fontSize={18} fontWeight="700" color="primary.600" fontFamily={'heading'}>
                    200.000đ
                  </Text>
                  <Text
                    fontSize={14}
                    strikeThrough
                    color="gray.500"
                    fontFamily={'heading'}
                    fontWeight="400"
                  >
                    250.000đ
                  </Text>
                </Box>
                <Flex
                  direction="row"
                  width="77%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={16}>Warehouse: 20</Text>
                  <Flex direction="row" ml={5} justifyItems={'center'} alignItems={'center'}>
                    <Pressable onPress={() => setQuantity(quantity--)}>
                      <Icon.Minus stroke="black" width={18} height={18} />
                    </Pressable>
                    <Box
                      borderWidth="1"
                      borderColor="#C9C9C9"
                      borderRadius="5"
                      marginX={2}
                      w="6"
                      h="6"
                      justifyContent="center"
                      alignItems="center"
                      textAlign={'center'}
                    >
                      <Text textAlign={'center'} fontSize={14} fontWeight={'bold'}>
                        {quantity}
                      </Text>
                    </Box>
                    <Pressable onPress={() => setQuantity(quantity++)}>
                      <Icon.Plus stroke="black" width={18} height={18} />
                    </Pressable>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="row">
              <FlatList
                data={dataColor}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                ListHeaderComponent={
                  <Text fontSize="14" fontWeight="bold" mb={2}>
                    Color
                  </Text>
                }
                renderItem={({ item }) => (
                  <Pressable
                    marginRight="3"
                    marginBottom="3"
                    backgroundColor={item.data}
                    borderWidth="1"
                    borderColor={item.data === 'white' ? '#C9C9C9' : 'transparent'}
                    w={39}
                    h={39}
                    borderRadius="full"
                  />
                )}
                keyExtractor={(item) => item.title}
              />

              <FlatList
                data={dataSize}
                scrollEnabled={false}
                numColumns={3}
                ListHeaderComponent={
                  <Text fontSize="14" fontWeight="bold" mb={2}>
                    Size
                  </Text>
                }
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => setSelectedSize(item.data)}
                    marginRight="3"
                    marginBottom="3"
                    borderWidth="1"
                    backgroundColor={item.data === selectedSize ? 'primary.600' : 'transparent'}
                    borderColor="primary.600"
                    w={39}
                    h={39}
                    borderRadius={[5, 10]}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text
                      fontSize={[14]}
                      color={item.data === selectedSize ? 'white' : 'primary.600'}
                      fontWeight="bold"
                    >
                      {item.data}
                    </Text>
                  </Pressable>
                )}
                keyExtractor={(item) => item.title}
              />
            </Flex>
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
                Confirm
              </Text>
            </Pressable>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default Cart;
