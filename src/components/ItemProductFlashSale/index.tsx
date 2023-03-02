import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { formatCurrency } from 'react-native-format-currency';
import styles from './styles';

type Props = {
  name: string;
  image: string;
  price: number;
  onPress: Function;
};

const ItemProductFlashSale = (props: Props) => {
  const { name, image, price, onPress } = props;
  return (
    <Pressable style={styles.itemProductFlastSale} onPress={() => onPress()}>
      <Image
        alt="1241"
        style={styles.imageItemFlashSale}
        resizeMode="cover"
        source={{ uri: image ? image + '' : '123' }}
      />
      <View>
        <Text numberOfLines={1}>{name}</Text>
        <View style={styles.coverTextPrice}>
          <Text fontSize={14} textDecorationLine="line-through">
            {price}đ
          </Text>
          <Text color="primary.600" fontSize={16}>
            {formatCurrency({ amount: price, code: 'VND' }).slice(0, 1)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductFlashSale;
