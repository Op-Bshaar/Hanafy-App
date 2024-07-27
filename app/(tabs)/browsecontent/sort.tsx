import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import HR from '@/components/hr';

const Sort = ({ navigate }: any) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Price: Low to High', value: 'price_low' },
    { label: 'Price: High to Low', value: 'price_high' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Recently Added', value: 'recently_added' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort</Text>
      <HR />
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => setSelectedOption(option.value)}
        >
          <View style={[styles.circle, selectedOption === option.value && styles.selectedCircle]} />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#59368C',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  selectedCircle: {
    backgroundColor: 'black',
  },
  optionText: {
    fontSize: 16,
  },
});

export default Sort;
