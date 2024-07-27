import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import CustomButton from '@/components/custombutton';
import HR from '@/components/hr';
import { CourseCategories } from '@/app/data/category';
// import backgorundImage from '@/assets/images/Background.png'
const Home = ({ navigate }: any) => {
  return (
    <View>
       
      <View style={styles.container}>
        <View style={styles.header}>
         
            <View style={styles.profile}>
              <Text style={styles.profileText}>Bashar Abdalla</Text>
              <TouchableOpacity>
                <Ionicons
                  name="notifications"
                  size={30}
                  style={styles.notificationIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.courseContainer}>
              <Image
                source={require('@/assets/images/Rectangle 6.png')}
                style={styles.courseImage} />
              <View>
                <Text style={styles.courseTitle}>Introduction to Graphic Design</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.coachName}>Coach Name</Text>
                  <MaterialIcons
                    name="verified"
                    size={20}
                    color="blue"
                    style={styles.verifiedIcon} />
                  <Text style={styles.courseSubtitle}>Photoshop</Text>
                </View>
              </View>
              <View style={styles.progressContainer}>
                <Progress.Circle
                  size={50}
                  progress={0.65}
                  showsText={true}
                  color={"#59368C"} />
              </View>
           
        </View>
      </View>

    </View>

    
       <CustomButton
        title="Search for a course..."
        containerStyle={styles.button}
        textStyle={styles.text}
        onPress={() => navigate('Search')} />
        
        
        <View style={styles.popularCategories}>
        <Text style={styles.popularCategoriesTitle}>Popular Categories</Text>
        <Text style={styles.seeAll}>See All</Text>
        <HR color="#000000" thickness={1} style={styles.hr} />
      </View><ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CourseCategories.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <MaterialIcons name={item.icon} size={24} color="white" style={styles.categoryIcon} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <Text>Features Courses</Text>
        <Text>see All</Text>
      </View>
      <Image
                source={require('@/assets/images/Rectangle 6.png')}
                style={styles.courseImage} />
                 <Image
                source={require('@/assets/images/Rectangle 6.png')}
                style={styles.courseImage} />


      <View>
        <Text>Recommended For You</Text>
        <Text>Se All</Text>
      </View>
    </View>

  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59368C',

  },
  header: {
    backgroundColor: "#59368C",
    height: 120,
    paddingHorizontal: 20,
    paddingTop: 30,
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
    marginTop: 20,
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
    marginLeft: 10
  },
  progressContainer: {
    marginLeft: 10,
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
  },
  hr: {
    width: '20%',
    paddingRight: 30
  },
  popularCategories: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  popularCategoriesTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#000000',
    marginLeft:40
  },
  seeAll: {
    marginLeft: 'auto',
    color: "#59368C"
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 1,
    marginTop:-200,
    marginLeft:40,
    gap:1
  },
  categoryTitle: {
    fontSize: 16,
   
    color: '#000000'
  },
  categoryIcon: {
    backgroundColor: '#59368C',
    padding: 5,
    borderRadius: 50,
  }
});
