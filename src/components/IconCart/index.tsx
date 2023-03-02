import React from 'react';
import { View, Text, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';

type Props = {
  onPressCart: Function;
  onPressSearch: Function;
  quantityItems: number;
};

const IconCart = (props: Props) => {
  const { onPressCart, onPressSearch, quantityItems } = props;
  return (
    <View
      style={{
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
      }}
    >
      <Pressable onPress={() => onPressSearch()}>
        <Icon.Search
          onPress={() => onPressSearch()}
          stroke="black"
          width={24}
          height={24}
          style={{ marginRight: 12 }}
        />
      </Pressable>
      <Pressable onPress={() => onPressCart()}>
        <Icon.ShoppingCart stroke="black" width={24} height={24} />
        <View
          backgroundColor="primary.600"
          height={7}
          width={7}
          justifyContent="center"
          alignItems="center"
          borderRadius={15}
          position="absolute"
          right={-15}
          top={-15}
        >
          <Text numberOfLines={1} fontSize={'lg'} color="white" lineHeight={17}>
            {quantityItems}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default IconCart;
