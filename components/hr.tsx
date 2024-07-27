// HR.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const HR = ({ color = '#000', thickness = 1, width = '100%', style }:any) => {
  return (
    <View
      style={[
        styles.hr,
        {
          borderBottomColor: color,
          borderBottomWidth: thickness,
          width: width,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default HR;
