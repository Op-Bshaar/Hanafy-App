import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import CustomButton from '@/components/custombutton';

const Home = ({ navigate }: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>Bashar Abdalla</Text>
              <TouchableOpacity>
                <Ionicons 
                  name="notifications" 
                  size={30} 
                  style={styles.notificationIcon} 
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.courseContainer}>
            <Image
              source={require('@/assets/images/Rectangle 6.png')}
              style={styles.courseImage}
            />
            <View>
              <Text style={styles.courseTitle}>Introduction to Graphic Design</Text>
              <View style={styles.courseInfo}>
                <Text style={styles.coachName}>Coach Name</Text>
                <MaterialIcons 
                  name="verified" 
                  size={20} 
                  color="blue" 
                  style={styles.verifiedIcon} 
                />
                <Text style={styles.courseSubtitle}>Photoshop</Text>
              </View>
            </View>
            <View style={styles.progressContainer}>
              <Progress.Circle 
                size={50} 
                progress={0.65} 
                showsText={true} 
                color={"#59368C"} 
              />
            </View>
          </View>

          <View style={styles.settingsContainer}>
            {settingsOptions.map((option) => (
              <TouchableOpacity key={option.label} style={styles.optionContainer}>
                <Ionicons 
                  name={option.icon} 
                  size={24} 
                  style={styles.optionIcon} 
                />
                
                    <Text style={styles.optionText} onPress={()=>navigate('Setting')}>{option.label}</Text>
                    <Ionicons onPress={()=>navigate('Setting')}
                      name="chevron-forward" 
                      size={24} 
                      style={styles.optionArrow} 
                    />
           
              </TouchableOpacity>
            ))}
          </View>
          
          <CustomButton 
            title="Logout" 
            containerStyle={styles.button} 
            textStyle={styles.text} 

          />


        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const settingsOptions = [
  { label: 'Edit Profile', icon: 'person-outline' },
  { label: 'Favorite Course', icon: 'star-outline' },
  { label: 'My Certificate', icon: 'document-text-outline' },
  { label: 'Notification', icon: 'notifications-outline' },
  { label: 'FAQ', icon: 'help-circle-outline' },
  { label: 'Settings', icon: 'settings-outline' },
];

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#59368C",
    height: 230,
    paddingHorizontal: 20,
    paddingTop: 50,
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white"
  },
  notificationIcon: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginTop: -150
  },
  courseImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  coachName: {
    fontSize: 14,
    color: '#666',
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  courseSubtitle: {
    fontSize: 14,
    backgroundColor: '#666',
    marginLeft: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    color: '#fff',
  },
  progressContainer: {
    marginLeft: 10,
  },
  settingsContainer: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  optionIcon: {
    color: '#59368C',
  },
  optionArrow: {
    color: '#59368C',
  },
  button: {
    backgroundColor: '#59368C',
    width: 250,
    marginHorizontal: 'auto',
    borderRadius: 30,
    marginTop: 30
  },
  text: {
    fontSize: 18,
  }
});
