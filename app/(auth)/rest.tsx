import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '@/components/custombutton';
import HR from '@/components/hr';

const Rest = ({ navigate }: any) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.pass}>Reset Password</Text>
   
        <Text style={styles.check}>
            Protect your account by entering a new password
            
               

        </Text>
        <Text style={{ marginLeft: -10, marginTop: 3 ,color:"gray"}}>
                below. Make it strong and you're all set.
                </Text>

      
      <Image
        source={require('@/assets/images/newPassword 1.png')}
        style={styles.img}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="New Password" 
            secureTextEntry={!showNewPassword} 
          />
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Icon name={showNewPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <HR color="#000000" thickness={1} style={styles.hr} />

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Confirm Password" 
            secureTextEntry={!showConfirmPassword} 
          />
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <HR color="#000000" thickness={1} style={styles.hr} />
      </View>
      <CustomButton
        title="Reset Password"
        onPress={() => navigate('changepass')}
        containerStyle={styles.button}
        textStyle={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pass: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  check: {
    color: 'gray',
    marginTop: 10,
    textAlign: 'center', 
    fontSize: 15,
  },
  img: {
    marginTop: 16,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#59368C',
    width: 290,
    borderRadius: 30,
    marginTop: 20,
    height:60
  },
  text: {
    fontSize: 18,
    paddingTop:5,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative', 
  },
  input: {
    height: 40,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  hr: {
    width: '100%',
    marginVertical: 10,
  },
});

export default Rest;
