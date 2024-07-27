import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomButton from '@/components/custombutton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Filter = ({ navigate }: any) => {
  console.log("mounted");
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.title}>Filter</Text>
        <Text style={styles.subtitle}>Search for</Text>
        <CustomButton
          title="Any"
          onPress={() => navigate('interst')}
          containerStyle={styles.button}
          textStyle={styles.text}
        />
        <CustomButton
          title="Course"
          onPress={() => navigate('interst')}
          containerStyle={styles.button}
          textStyle={styles.text}
        />
        <CustomButton
          title="Coach"
          onPress={() => navigate('interst')}
          containerStyle={styles.button}
          textStyle={styles.text}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Course Status</Text>
        <CustomButton
          title="Any"
          containerStyle={styles.button}
          textStyle={styles.text}
        />
        <CustomButton
          title="Completed"
          containerStyle={styles.button}
          textStyle={styles.text}
        />
        <CustomButton
          title="Up Coming"
          containerStyle={styles.button}
          textStyle={styles.text}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Categories</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Category List</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Skill Level</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Skill Levels</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Instructor Expertise</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Instructor Expertise</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Techniques</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Techniques</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Country</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Country List</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Price Range</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Price Range</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
       
        
      </View>
            <CustomButton
            title="Sign Up"
            onPress={() => navigate('rolepage')}
            containerStyle={styles.button}
            textStyle={styles.text}
          />
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#59368C',
    width: 350,
    marginLeft: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rowText: {
    fontSize: 18,
  },
  
});

export default Filter;
