import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList } from 'native-base';
import ItemProductFlashSale from 'components/ItemProductFlashSale';
import { GetProductSuccessData } from 'interfaces/Auth';
import styles from './styles';

type Props = {
  data: GetProductSuccessData[];
};

const FlatListProductFlashSale = (props: Props) => {
  const { data } = props;
  const [hour, setHour] = useState(2);
  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(5);

  const myRef: any = useRef();
  const decreaseSecond = () => setSecond((second) => second - 1);
  const time = () => {
    if (second === 0) {
      setMinute(minute - 1);
      setSecond(3);
    }
    if (minute < 0) {
      setHour(hour - 1);
      setMinute(1);
    }
    if (hour === 0 && second === 0) {
      setHour(23);
      setMinute(59);
      setSecond(59);
    }
  };

  const timeBar = () => {
    let secondC = '',
      minuteC = '',
      hourC = '';
    if (second.toString().length === 1) {
      secondC = '0' + second;
    } else {
      secondC = '' + second;
    }
    if (minute.toString().length === 1) {
      minuteC = '0' + minute;
    } else {
      minuteC = minute + '';
    }
    if (hour.toString().length === 1) {
      hourC = '0' + hour;
    } else {
      hourC = '' + hour;
    }
    return hourC + ':' + minuteC + ':' + secondC;
  };
  useEffect(() => {
    time();
    timeBar();
    myRef.current = setInterval(decreaseSecond, 1000);

    return () => clearInterval(myRef.current);
  }, [second]);
  const RenderItemFlashSale = ({ data }: { data: GetProductSuccessData }) => {
    return (
      <ItemProductFlashSale
        onPress={() => alert('item nè')}
        name={data.name}
        image={
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656'
        }
        price={data.price}
      />
    );
  };
  return (
    <View style={{}}>
      <View style={styles.coverHeader}>
        <View style={styles.headerFlashSale}>
          <Text fontWeight={'bold'} textTransform="uppercase" fontSize={14} marginRight={14}>
            Flash sale
          </Text>
          <Text
            style={styles.textTime}
            color="primary.600"
            borderColor="primary.600"
            textAlign="center"
            variant={'body1'}
            fontWeight={'bold'}
          >
            {timeBar()}
          </Text>
        </View>
        <Text fontWeight={'bold'}>See All</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.flashListFlashSale}
        data={data}
        renderItem={({ item }) => <RenderItemFlashSale data={item} />}
        keyExtractor={(item1) => item1._id}
        onEndReached={() => console.log('load ne')}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default FlatListProductFlashSale;
