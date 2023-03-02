import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, Image, Pressable } from 'native-base';
import { formatCurrency } from 'react-native-format-currency';
import styles from './styles';

type Props = {
  name: string;
  image: string;
  price: number;
  onPress: Function;
};

const ItemProductCategory = (props: Props) => {
  const { name, image, price, onPress } = props;
  return (
    <Pressable onPress={() => onPress()} style={styles.itemProductCategory}>
      <LinearGradient colors={['#FFFFFF', '#FFFFFF00']} start={[0.9, 0.5]} style={{ opacity: 1 }}>
        <View backgroundColor={'gray.100'} style={styles.coverImage}>
          <Image
            alt="hahaha"
            style={styles.imageItemCategory}
            resizeMode="cover"
            source={{ uri: image ? image + '' : '123' }}
          />
        </View>
        <View>
          <Text numberOfLines={1} fontSize={20} style={{ marginBottom: 8 }}>
            {name}
          </Text>
          <View>
            <Text numberOfLines={1} fontWeight="bold" color="primary.600" style={{ fontSize: 20 }}>
              {formatCurrency({ amount: price, code: 'VND' }).slice(0, 1)}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ItemProductCategory;
