import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '@/components/custombutton';

const Account = ({ navigate }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account Under Review</Text>

      <Image
        source={require('@/assets/images/Coach-Revision 1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={{color:"gray"}}>your account is currently under review </Text>
      <Text style={{color:"gray"}}>we will notify you via email once the  </Text>
      <Text style={{color:"gray"}}>review process is complete </Text>

      <CustomButton
        title="I Got It"
        onPress={() => navigate('Login')}
        containerStyle={styles.button}
        textStyle={styles.text}
      />
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#59368C',
    width: 350,
    borderRadius: 30,
    marginTop: 30,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
