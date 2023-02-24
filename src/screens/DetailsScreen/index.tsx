import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Flex, Pressable, Image, Center, FlatList, ScrollView } from 'native-base';
import { Dimensions } from 'react-native';
import * as Icon from 'react-native-feather';
import { Rating } from 'react-native-ratings';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import ItemRating from 'components/ItemRating';
import ModalPopupCart from 'components/ModalPopupCart';
import { AppNavigationProp, DetailRouteProp } from 'providers/navigation/types';
import { DATA3, DATA4, DATA2 } from '../../mocks';

type DetailScreenProps = {
  route: DetailRouteProp;
};

const DetailsScreen = (props: DetailScreenProps) => {
  const { name, description, price, image } = props.route.params;
  const navigation = useNavigation<AppNavigationProp>();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [statusLike, setStatusLike] = useState(false);
  const initialWidth = Dimensions.get('window').width;
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const DescriptionRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <ScrollView>
        <Text fontSize={[12, 16, 20]}>{description}</Text>
        <Flex direction="row" justifyContent="space-between">
          <Text fontSize={[12, 16, 20]} fontWeight="bold">
            Recommend for you
          </Text>
          <Pressable>
            <Text fontSize={[12, 16, 20]} fontWeight="bold">
              See all
            </Text>
          </Pressable>
          <FlatListProductFlashSale />
        </Flex>
      </ScrollView>
    </View>
  );
  const ReviewRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Rating readonly={true} imageSize={15} style={{ paddingVertical: 5, width: '30%' }} />
      <FlatList
        data={DATA3}
        renderItem={({ item }) => (
          <ItemRating
            name={item.name}
            time={item.time}
            comment={item.comment}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Description',
    },
    {
      key: 'second',
      title: 'Review',
    },
  ]);

  const renderScene = SceneMap({
    first: DescriptionRoute,
    second: ReviewRoute,
  });

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 12,
        paddingHorizontal: 10,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Flex direction="row" justifyContent={'space-between'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft stroke="black" />
        </Pressable>
        <Pressable>
          <Icon.ShoppingCart stroke="black" />
        </Pressable>
      </Flex>

      <Image
        source={{
          uri: image,
        }}
        alt="Alternate Text"
        size="full"
        shadow="9"
        alignSelf="center"
        w="90%"
        h="50%"
      />

      <Text fontSize={[18, 24, 26]} fontWeight="semibold">
        {name}
      </Text>
      <Flex direction="row" alignItems="center" justifyContent="flex-start">
        <Text fontSize={[16, 20, 24]} fontWeight="semibold" color="red.600" marginRight="1.5">
          {price}đ
        </Text>
        <Text fontSize={[12, 16, 20]} strikeThrough color="gray.500">
          400.000đ
        </Text>
      </Flex>

      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(prop) => (
          <TabBar
            {...prop}
            indicatorStyle={{ backgroundColor: 'transparent' }}
            style={{
              backgroundColor: 'transparent',
            }}
            renderLabel={({ route, focused }) => (
              <Text
                padding={[2, 4, 8]}
                fontSize={[10, 16, 20]}
                color={focused ? 'black' : 'gray'}
                borderBottomColor={focused ? 'black' : 'green'}
                borderBottomWidth={focused ? 1 : 0}
              >
                {route.title}
              </Text>
            )}
            pressColor={'transparent'}
            tabStyle={{
              width: 'auto',
            }}
          />
        )}
        initialLayout={{ width: initialWidth, height: 0 }}
      />

      <Center
        height="auto"
        width="100%"
        borderTopRadius={[5, 10]}
        flexDirection="row"
        backgroundColor="white"
        paddingTop="5"
        paddingBottom="5"
        justifyContent="space-evenly"
        shadow="9"
      >
        <Pressable
          width={[8, 43, 50]}
          height={[8, 43, 50]}
          borderRadius="6"
          alignItems="center"
          backgroundColor="primary.600"
          onPress={() => setStatusLike(!statusLike)}
          justifyContent="center"
        >
          <Icon.Heart width="60%" stroke="white" fill={statusLike ? 'white' : 'none'} />
        </Pressable>
        <Pressable
          flexDirection="row"
          width="40%"
          height={[8, 43, 50]}
          borderRadius="6"
          borderWidth="1"
          borderColor="#C9C9C9"
          backgroundColor="transparent"
          alignItems="center"
          justifyContent="center"
          onPress={() => setShowModal(true)}
        >
          <Icon.ShoppingCart width="13%" stroke="#AC1506" />
          <Text color="primary.600" fontWeight="bold" marginLeft="3" fontSize="14">
            Add to cart
          </Text>
        </Pressable>
        <Pressable
          width="40%"
          height={[8, 43, 50]}
          borderRadius="6"
          backgroundColor="primary.600"
          alignItems="center"
          justifyContent="center"
          onPress={() => setShowModal(true)}
        >
          <Text color="white" fontWeight="bold" fontSize="14">
            Buy now
          </Text>
        </Pressable>
      </Center>
      <ModalPopupCart
        showModal={showModal}
        setShowModal={setShowModal}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        quantity={quantity}
        setQuantity={setQuantity}
        image={image}
        price={price}
        colors={DATA2}
        size={DATA4}
      />
    </View>
  );
};

export default DetailsScreen;
