import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';

interface CustomButtonInputProps{
  title?:string,
  onPress?:  () =>void,
  style?:any,
  disabled?: boolean

}

const CustomButton = ({title, onPress, style}:CustomButtonInputProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


export default CustomButton
