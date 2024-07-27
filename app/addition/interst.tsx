import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import HR from '@/components/hr';
import Feather from 'react-native-vector-icons/Feather'; 
import CustomButton from '@/components/custombutton';

const Interest = ({ navigate }: any) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const iconData = [
    { name: 'pen-tool', label: 'Design' },
    { name: 'camera', label: 'Photos' },
    { name: 'code', label: 'Coding' },
    { name: 'code', label: 'Coding' },
    { name: 'pen-tool', label: 'Design' },
    { name: 'camera', label: 'Photos' },
    { name: 'camera', label: 'Photos' },
    { name: 'code', label: 'Coding' },
    { name: 'pen-tool', label: 'Design' },
    { name: 'code', label: 'Coding' },
    { name: 'pen-tool', label: 'Design' },
    { name: 'camera', label: 'Photos' },
  ];

  const handlePress = (index: number, label: string) => {
    const isSelected = selectedItems.includes(index);
    const updatedSelectedItems = isSelected
      ? selectedItems.filter(item => item !== index)
      : [...selectedItems, index];
      
    setSelectedItems(updatedSelectedItems);
    setSelectedValues(isSelected
      ? selectedValues.filter(value => value !== label)
      : [...selectedValues, label]);
  };

  return (
    <View style={styles.container}>
      <HR color="#59368C" thickness={3} style={styles.hr} />
      <Text style={styles.title}>I'm interested in:</Text>
      <Text style={styles.subtitle}>Choose your interest for a better search</Text>
      
      <View style={styles.grid}>
        {iconData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.iconContainer,
              selectedItems.includes(index) && styles.selectedIconContainer
            ]}
            onPress={() => handlePress(index, item.label)}
          >
            <Feather name={item.name} style={[
              styles.icon,
              selectedItems.includes(index) && styles.selectedIcon
            ]} />
            <Text style={[
              styles.iconLabel,
              selectedItems.includes(index) && styles.selectedLabel
            ]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <CustomButton 
        title="Continue" 
        onPress={() => {
       
          console.log('Selected Values:', selectedValues);
          navigate('_Layout');
        }} 
        containerStyle={styles.button} 
        textStyle={styles.text} 
      />

      <TouchableOpacity style={styles.skipButton} onPress={() => navigate('_Layout')}>
        <Text style={styles.skipText}>SKIP THIS</Text>
        <Image
          source={require('@/assets/images/Path 3(2).png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginVertical: 10,
    marginLeft: -70
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: -30
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 100, 
    height: 100,
    margin: 5, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white', 
  },
  selectedIconContainer: {
    backgroundColor: '#59368C',
    borderColor: '#59368C',
  },
  icon: {
    fontSize: 30, 
    color: 'black', 
  },
  selectedIcon: {
    color: 'white', 
  },
  iconLabel: {
    fontSize: 15, 
    color: 'black',
    marginTop: 5, 
  },
  selectedLabel: {
    color: 'white', 
  },
  button: {
    backgroundColor: '#59368C',
    width: 332,
    marginVertical: 20,
    borderRadius: 64,
    height: 60,
    marginTop: 70
  },
  text: {
    fontSize: 18,
    marginTop: 10
  },
  hr: {
    width: '100%',
    marginVertical: 10,
    marginTop: 40,
    backgroundColor: '#59368C'
  },
  skipButton: {
    width: 332,
    alignItems: 'center',
    borderRadius: 64,
    display: "flex",
    flexDirection: "row",
    height: 60,
    gap: 20,
    marginLeft: 230
  },
  skipText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
});
