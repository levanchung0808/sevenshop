import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, FlatList, Pressable, Text } from 'native-base';
// import { ActivityIndicator } from 'react-native';
import * as Icons from 'react-native-feather';
import * as Progress from 'react-native-progress';
import ButtonCategory from 'components/ButtonCategory';
import ItemProductCategory from 'components/ItemProductCategory';
import { GetProductSuccessData } from 'interfaces/Auth';
// import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

type Props = {
  data: GetProductSuccessData[];
  // onEndReadChy: any;
  // ListFooterComponent: any;
};
const FlatListProductCategory = (props: Props) => {
  // const navigation = useNavigation<AppNavigationProp>();
  const { data } = props;
  const [ItemSelected, setItemSelected] = useState([
    {
      _id: 1,
      title: 'Hoddies',
      isSelected: true,
    },
    {
      _id: 2,
      title: 'Sweeters',
      isSelected: false,
    },
    {
      _id: 3,
      title: 'Bombies',
      isSelected: false,
    },
    {
      _id: 4,
      title: 'Joggers',
      isSelected: false,
    },
    {
      _id: 5,
      title: 'Jeans',
      isSelected: false,
    },
    {
      _id: 6,
      title: 'T-shirts',
      isSelected: false,
    },
    {
      _id: 7,
      title: 'Vests',
      isSelected: false,
    },
  ]);
  // const [isLoaddingItemCategory, setIsLoaddingItemCategory] = useState(false);

  const [progressEnable, setProgressEnable] = useState(true);
  // const [data1, setdata1]: any = useState([]);
  // const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);

  const id_Category: any = () => {
    let category;
    ItemSelected.map((item) => {
      if (item.isSelected === true) {
        return (category = item._id);
      }
    });
    return category;
  };
  useEffect(() => {
    // setdata1(
    //   data
    //     .filter(function (item) {
    //       return item.categories_type === id_Category();
    //     })
    //     .slice(0, 1)
    // );
    setInterval(() => {
      setProgressEnable(false);
    }, 3000);
  }, [id_Category()]);

  // useEffect(() => {
  //   set
  // }, [isLoaddingItemCategory]);

  // const setTimeLoad = () => {
  //   // setIsLoaddingItemCategory(true);
  //   let varibale: any;
  //   setTimeout(() => setIsLoaddingItemCategory(false), 1000);
  //   // setTimeout(() => setIsLoaddingItemCategory(true), 1000);

  //   // console.log(isLoaddingItemCategory);
  //   // setTimeout(() => clearTimeout(varibale), 1000);
  // };
  const RenderItemCategory = ({ data }: { data: GetProductSuccessData }) => {
    return (
      <ItemProductCategory
        onPress={() => alert('')}
        name={data.name}
        image={
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656'
        }
        price={data.price}
      />
    );
  };

  return (
    <View>
      <View style={styles.coverCategories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ItemSelected.map((item) => (
            <ButtonCategory
              onPress={() => {
                const ItemSelected2 = ItemSelected.map((item2) => {
                  return { ...item2, isSelected: item.title === item2.title };
                });
                setItemSelected(ItemSelected2);
              }}
              title={item.title}
              isSelected={item.isSelected}
              key={item._id}
            />
          ))}
        </ScrollView>
      </View>
      {progressEnable ? (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30%',
          }}
        >
          <Progress.Circle size={30} indeterminate={true} />
        </View>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <ScrollView>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={styles.flashListFlashSale}
              data={
                data
                  .filter(function (item) {
                    return item.categories_type === id_Category();
                  })
                  .slice(0, end)
                // .concat(data1)
              }
              renderItem={({ item }) => <RenderItemCategory data={item} />}
              keyExtractor={(item1) => item1._id}
              onEndReached={() => {
                // setdata1(data1.concat(data1));
                setEnd(end + 1);
                // setTimeLoad();
              }}
              onEndReachedThreshold={0.1}
              ListFooterComponent={
                // !isLoaddingItemCategory ? (
                //   <View style={{ marginBottom: 100, marginHorizontal: 20 }}>
                //     <ActivityIndicator size={30} />
                //   </View>
                // ) : (
                //   <View style={{ marginRight: -100 }}></View>
                // )
                <Pressable
                  style={{
                    width: 150,
                    height: '75%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 100,
                    borderWidth: 0.2,
                    borderRadius: 2,
                    flexDirection: 'row',
                  }}
                  borderColor={'gray.300'}
                  backgroundColor={'gray.100'}
                >
                  <Text marginRight={2} variant={'button'}>
                    See All
                  </Text>
                  <Icons.ArrowRight fontSize={24} stroke={'black'} />
                </Pressable>
              }
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default FlatListProductCategory;
