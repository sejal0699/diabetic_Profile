import React, {useEffect, useRef, useState} from 'react';
import {TextInput,Text,View,Animated,TouchableOpacity,Image,ImageSourcePropType, TextStyle} from 'react-native';
import {Controller,RegisterOptions} from 'react-hook-form';
import { styles } from './styles';

interface CustomTextInputProps {
  control?: any;
  name?: any;
  rules?: RegisterOptions;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  rightIconSource?: ImageSourcePropType;
  secureTextEntry?: boolean;
  onRightIconPress?: () => void;
  customIconContainerStyle?: object; 
  onChangeText?: (text: string) => void;
}

const CustomTextInput = ({
  control,
  name,
  rules,
  placeholder,
  errorMessage,
  value,
  rightIconSource,
  secureTextEntry,
  onRightIconPress,
  customIconContainerStyle,
  onChangeText,
  ...props 
}: CustomTextInputProps) => {
  const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [isFocused, setIsFocused] = useState(false);
  const [rightIcon, setRightIcon] = useState(rightIconSource);

  useEffect(() => {
    if (isFocused || value) {
      Animated.timing(labelPosition, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isFocused, value]);

  const labelStyle: Animated.WithAnimatedObject<TextStyle>= {
    position: 'absolute',
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -18],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 12],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
    paddingLeft: 10,
  };

  return (
    <View>
      <View style={styles.container}>
        <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder=""
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              onFocus={() => {
                setIsFocused(true);
              }}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              {...props}
              value={value}
              style={styles.input}
            />
          )}
        />
        {rightIcon && (
          <TouchableOpacity
          style={[customIconContainerStyle]} 
            onPress={onRightIconPress}>
            <Image source={rightIconSource} 
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomTextInput

