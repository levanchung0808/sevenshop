import React from 'react';
import { View, Input } from 'native-base';
import * as Icon from 'react-native-feather';
type Props = {
  placeholder: string;
  // inputrightelement: JSX.Element;

  // value: string;
  // changeValue: Function;
};

const SSInputSearch = (props: Props) => {
  const { placeholder } = props;
  return (
    <View
      flexDirection="row"
      w="100%"
      alignItems="center"
      backgroundColor={'primary.600'}
      px={2}
      mt={5}
      borderRadius={7}
    >
      <Input
        autoCapitalize="none"
        fontSize={16}
        fontFamily="heading"
        fontStyle="normal"
        w={{ base: '100%' }}
        variant="unstyled"
        color={'white'}
        placeholderTextColor={'white'}
        // secureTextEntry={type === 'password' ? showPass : false}
        // InputRightElement={
        //   setEyes === true ? (
        //     <Pressable
        //       onPress={() => {
        //         setShowPass(!showPass);
        //       }}
        //     >
        //       {showPass ? (
        //         <Icon.Eye stroke="grey" width={24} height={24} />
        //       ) : (
        //         <Icon.EyeOff stroke="grey" width={24} height={24} />
        //       )}
        //     </Pressable>
        //   ) : undefined
        // }
        InputRightElement={<Icon.Search stroke="white" width={24} height={24} />}
        placeholder={placeholder}
        // value={value}
        // onChangeText={(value) => changeValue(value)}
      />
    </View>
  );
};

export default SSInputSearch;
