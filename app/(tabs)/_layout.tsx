import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeTab from './home';
import BrowseTab from './browse';
import CoursesTab from './courses';
import FavoriteTab from './favorite';
import ProfileTab from './profile';
import Search from './search';
import Setting from './setting';

const _Layout = ({navigate}: any) => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeTab navigate={setActiveTab} />;
      case 'Favorite':
        return <FavoriteTab />;
      case 'Browse':
        return <BrowseTab />;
      case 'Courses':
        return <CoursesTab />;
      case 'Profile':
        return <ProfileTab navigate={setActiveTab}/>;
      case 'Search':
        return <Search navigate={setActiveTab} />
      case 'Setting':
        return <Setting navigate={setActiveTab}/>
      default:
        return <HomeTab />;
    }
  };

  const TabButton = ({ tabName, iconName }:any) => (
    <TouchableOpacity 
      onPress={() => setActiveTab(tabName)} 
      style={styles.tab}
    >
      <Icon 
        name={activeTab === tabName ? iconName : `${iconName}-outline`} 
        size={30} 
        color={activeTab === tabName ? '#59368C' : 'black'} 
      />
      <Text style={[styles.tabLabel, activeTab === tabName && styles.activeTabLabel]}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderTabContent()}
      </View>
      <View style={styles.tabContainer}>
        <TabButton tabName="Home" iconName="home" />
        <TabButton tabName="Favorite" iconName="heart" />
        <TabButton tabName="Browse" iconName="search"  />
        <TabButton tabName="Courses" iconName="school" />
        <TabButton tabName="Profile" iconName="person" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    // iOS shadow
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Android shadow
    elevation: 4,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0', // Optional, for visual separation
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  tabLabel: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  activeTabLabel: {
    color: '#59368C',
  },
});

export default _Layout;
