import React, { useEffect, useState, } from 'react';
import * as Font from 'expo-font'

import { StyleSheet, View, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import WelcomePage from './welcomepages/welcompage';
import LoginPage from './(auth)/login';
import Signup from './(auth)/signup';
import _Layout from './(tabs)/_layout';
import Interest from './addition/interst';
import Rolepage from './(auth)/rolepage';
import Passcode from './(auth)/passcode';
import Forgotpass from './(auth)/forgotpass';
import Account from './(auth)/account';
import Accountverfied from './(auth)/accountverfied';
import Filter from './(tabs)/browsecontent/filter';
import Search from './(tabs)/search';
import Profilesetting from './dashboard/coash/profilesetting';
import Item from './(tabs)/favorite/item';
import Home from './(tabs)/home';
import Rest from './(auth)/rest';
import ChangePass from './(auth)/changepass';
import Passcode1 from './(auth)/passcode1';

const fetchFonts = ()=>{
 return Font.loadAsync({
    'NotoSans-Italic-VariableFont_wdth,wght':require('../assets/fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf')
  })
}


const OpeningPage = () => {

  const [currentPage, setCurrentPage] = useState('Welcome');

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

 
  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return (
          <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1" style={styles.page}>
              <Image
                source={require('@/assets/images/Hanafy_Logo 1.png')}
              />
              {/* <Image
                source={require('@/assets/images/Hanafy_Logo 1(1).png')}
              /> */}
            </View>
            <View key="2" style={styles.page}>
              <WelcomePage navigate={navigate} />
            </View>
          </PagerView>
        );
      case 'Login':
        return <LoginPage navigate={navigate} />;
        case 'welcompage':
          return <WelcomePage navigate={navigate} />;
      case 'Signup':
        return <Signup navigate={navigate} />;
      case '_Layout':
        return <_Layout navigate={navigate} />;
      case 'interst':
        return <Interest navigate={navigate} />;
      case 'rolepage':
        return <Rolepage navigate={navigate} />;
      case 'passcode':
        return <Passcode navigate={navigate} />;
      case 'forgotpass':
        return <Forgotpass navigate={navigate} />;
      case 'Account':
        return <Account navigate={navigate} />;
      case 'accountverfied':
        return <Accountverfied navigate={navigate} />;
      case 'filter':
        return <Filter navigate={navigate} />;
        case 'Search':
          return <Search navigate={navigate} />;
        case'profilesetting':
          return <Profilesetting navigate={navigate}/>
        case 'item':
          return <Item navigate = {navigate}/>
        case '_Layout':
          return <Item navigate = {navigate}/>

        case 'home':
            return <Home navigate = {navigate}/>
        case 'rest':
              return <Rest navigate = {navigate}/>

        case 'changepass':
             return <ChangePass navigate = {navigate}/>
                 
        case 'passcode1':
          return <Passcode1 navigate = {navigate}/>
    
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderPage()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OpeningPage;
