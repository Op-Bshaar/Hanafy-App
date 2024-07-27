import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View, Button } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Browse = ({ navigate }: any) => {
  return (
    <View>
      
      <View style={styles.search}>
        <Ionicons name="search" size={28} color="black" />
        <TextInput placeholder='Search' style={styles.searchInput} />
      </View>


      <View style={styles.sortFilter}>
      
          <Ionicons name="options" size={28} color="white" />
          <Text style={styles.sortText}>Sort by</Text>
   

        <TouchableOpacity onPress={() => navigate('filter')} style={styles.filterButton}>
          <Ionicons name="search" size={28} color="white" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.img1}>
        <Image
          source={require('@/assets/images/Rectangle 6.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Introduction to Graphic Design</Text>
        <Text style={styles.description}>Lorem ipsumscipit pariatur ndask;alks;lkslihil doloremque!</Text>
        <View style={styles.position}>
        <Text style={{marginLeft:-17}}>Coach Name</Text>
          <MaterialIcons
                    name="verified"
                    size={20}
                    color="blue"
                    style={styles.verifiedIcon} />
          <Text style={styles.any}>Photoshop</Text>
          <Text style={styles.price}>75$</Text>
        </View>
      </View>

      <View style={styles.img2}>
        <Image
          source={require('@/assets/images/Rectangle 6.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Introduction to Graphic Design</Text>
        <Text style={styles.description}>Lorem ipsumscipit pariatur ndask;alks;lkslihil doloremque!</Text>
        <View style={styles.position}>
          <Text style={{marginLeft:-17}}>Coach Name</Text>
          <MaterialIcons
                    name="verified"
                    size={20}
                    color="blue"
                    style={styles.verifiedIcon} />
          <Text style={styles.any}>Photoshop</Text>
          <Text style={styles.price}>75$</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    paddingLeft: 30,
    alignItems: "center",
    marginTop:60
  },
  searchInput: {
    marginLeft: 20,
    flex: 1,
  },
  sortFilter: {
    flexDirection: "row",
    paddingLeft: 30,
    marginTop: 20,
    backgroundColor: '#59368C',
    marginBottom: 20,
    padding: 10,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  sortText: {
    color: "white",
    marginLeft: 5,
  },
  filterButton: {
    flexDirection: "row",
    marginLeft:130
  },
  filterText: {
    color: "white",
    marginLeft: 5,
  },
  img1: {
    backgroundColor: "#59368C33",
    height: 270,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingTop: 20,
    width: 330,
    borderRadius: 15,
   
  },
  img2: {
    backgroundColor: "#59368C33",
    height: 270,
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingTop: 20,
  
    borderRadius: 15,
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  image: {
    width: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: -70,
  },
  description: {
    color: "gray",
    marginTop: 10,
  },
  position: {
    flexDirection: "row",
    gap: 5,
  },
  any: {
    fontSize: 14,
    backgroundColor: '#666',
    marginLeft: 10,
  },
  price: {
    marginLeft: 40,
  },
});

export default Browse;
