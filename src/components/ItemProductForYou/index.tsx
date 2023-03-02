import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { formatCurrency } from 'react-native-format-currency';
import styles from './styles';

type Props = {
  name: string;
  image: string;
  price: number;
  selled: number;
  onPress: Function;
};

const ItemProductForYou = (props: Props) => {
  const { name, image, price, selled, onPress } = props;
  return (
    <Pressable style={styles.itemProductForYou} onPress={() => onPress()}>
      <Image
        alt="gsgsdg"
        style={styles.imageItemForYou}
        resizeMode="cover"
        source={{ uri: image ? image + '' : '123' }}
      />
      <View>
        <Text numberOfLines={1} fontSize={16}>
          {name}
        </Text>
        <View style={styles.coverTextSeller}>
          <Text color="primary.600" variant={'subtitle1'}>
            {formatCurrency({ amount: price, code: 'VND' }).slice(0, 1)}
          </Text>
          <Text fontSize={12}>Đã bán {selled}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductForYou;
