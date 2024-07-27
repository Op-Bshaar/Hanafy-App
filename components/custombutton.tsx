import { StyleSheet, Text, TouchableOpacity, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
