import { Text, View, FlatList, Pressable, Image } from 'native-base';
import * as Icon from 'react-native-feather';

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

const ProductFavoritesScreen = () => {
  return (
    <View flex={1} py={5} px={3} backgroundColor={'white'}>
      <View flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Text variant={'title'}>Your Favorites</Text>
        <View flexDirection={'row'} justifyContent={'space-between'}>
          <Icon.Search stroke="black" width={24} height={24} />
          <Icon.ShoppingCart stroke="black" width={24} height={24} />
        </View>
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

export default ProductFavoritesScreen;
