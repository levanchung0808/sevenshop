import React, { useState } from 'react';
import { ScrollView, View, Text, FlatList } from 'native-base';
import { RefreshControl } from 'react-native';
import ItemProductForYou from 'components/ItemProductForYou';
import { GetProductSuccessData } from 'interfaces/Auth';
import styles from './styles';

type Props = {
  data: GetProductSuccessData[];
  footer: any;
  // readChy: Function;
  size: number;
};

const FlatListProductForYou = (props: Props) => {
  const { data, footer, size } = props;
  const [refreshScroll, setrefreshScroll] = useState(false);
  // const [size, setSize] = useState(6);

  const RenderItemForYou = ({ data }: { data: GetProductSuccessData }) => {
    return (
      <ItemProductForYou
        name={data.name}
        image={
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lvse-monogram-degrade-crewneck--HKN44WUSO904_PM2_Front%20view.png?wid=656&hei=656'
        }
        price={data.price}
        selled={123}
        onPress={() => alert('item nè')}
      />
    );
  };
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      nestedScrollEnabled
    >
      <View>
        <Text fontWeight={'bold'} style={styles.headerForYou}>
          FOR YOU
        </Text>
        <FlatList
          contentContainerStyle={styles.flashList}
          numColumns={2}
          data={data.slice(0, size)}
          // scrollEnabled={false}
          renderItem={({ item }) => <RenderItemForYou data={item} />}
          ListFooterComponent={footer}
          refreshControl={
            <RefreshControl
              refreshing={refreshScroll}
              onRefresh={() => {
                // console.log('lam moi');
                setrefreshScroll(true);
              }}
              colors={['red']}
            />
          }
          onEndReached={() => {
            size;
          }}
          onEndReachedThreshold={0.1}
          nestedScrollEnabled
        />
      </View>
    </ScrollView>
  );
};

export default FlatListProductForYou;
