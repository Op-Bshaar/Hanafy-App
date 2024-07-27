// Search.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Search = ({ navigate }: any) => {
  console.log('Search component mounted'); 

  return (
    <ScrollView>
      <View>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text>Search</Text>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  
});

export default Search;
