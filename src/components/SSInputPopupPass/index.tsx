import React, { useState } from 'react';
import { View, Pressable, Input } from 'native-base';
import * as Icon from 'react-native-feather';
type Props = {
  placeholder: string;
  type: string;
  inputLeftElement: JSX.Element;
  setEyes: boolean;

  value: string;
  changeValue: Function;
};

const SSInputPopupPass = (props: Props) => {
  const [showPass, setShowPass] = useState(true);
  const { placeholder, value, changeValue, inputLeftElement, setEyes, type } = props;
  return (
    <View flexDirection="row" w="100%" alignItems="center" borderBottomWidth={1} px={4} mt={5}>
      <Input
        autoCapitalize="none"
        fontSize={16}
        fontFamily="heading"
        fontStyle="normal"
        w={{ base: '100%' }}
        variant="unstyled"
        secureTextEntry={type === 'password' ? showPass : false}
        InputRightElement={
          setEyes === true ? (
            <Pressable
              onPress={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <Icon.Eye stroke="grey" width={24} height={24} />
              ) : (
                <Icon.EyeOff stroke="grey" width={24} height={24} />
              )}
            </Pressable>
          ) : undefined
        }
        InputLeftElement={inputLeftElement}
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => changeValue(value)}
      />
    </View>
  );
};

export default SSInputPopupPass;
