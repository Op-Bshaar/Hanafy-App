import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import HR from '@/components/hr';
import CustomButton from '@/components/custombutton';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginPage = ({ navigate }: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const translateX = useRef(new Animated.Value(0)).current;
  const [coachId, setCoachId] = useState('');
  const [animation] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  useEffect(() => {
    if (!isLogin) {
      setShowModal(true);
    }
  }, [isLogin]);

  const animateTransition = (role: string) => {
    setSelectedRole(role);
    Animated.timing(animation, {
      toValue: role === 'Coach' ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 60],
  });

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handleContinue = () => {

    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('welcompage')}>
        <Image
          source={require('@/assets/images/Path 3.png')}
          style={{ marginLeft: -170 }}
        />
      </TouchableOpacity>
      <Image
        source={require('@/assets/images/Hanafy_Logo 1.png')}
        style={{ marginTop: 50 }}
      />

      <View style={styles.loginandsign}>
        <TouchableOpacity onPress={() => setIsLogin(true)}>
          <View style={[styles.tab, isLogin && styles.activeTab]}>
            <Text style={[styles.tabText, isLogin && styles.activeTabText]}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(false)}>
          <View style={[styles.tab, !isLogin && styles.activeTab]}>
            <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      {isLogin ? (
        <>
          <Text style={styles.firstText}>Login</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <HR color="#000000" thickness={1} style={styles.hr} />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <HR color="#000000" thickness={1} style={styles.hr} />
          <TouchableOpacity onPress={() => navigate('forgotpass')}>
            <Text style={styles.forgotPasswordText}>Forget password</Text>
          </TouchableOpacity>
          <HR color="#000000" thickness={1} style={styles.hr3} />
          <CustomButton
            title="LOGIN"
            onPress={() => navigate('Account')}
            containerStyle={styles.button}
            textStyle={styles.text}
          />
          <View style={styles.lineContainer}>
            <View style={styles.linee} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.linee} />
          </View>
          <Text style={styles.endingText}>Continue Using</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 40 }}>
            <View style={styles.imageWrapper}>
              <TouchableOpacity onPress={() => navigate('rolepage')}>
                <Image
                  source={require('@/assets/images/Social Icons.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('@/assets/images/Social Icons(1).png')}
                style={styles.img}
              />
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={require('@/assets/images/Vector.png')}
                style={styles.img}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <Modal
            transparent={true}
            visible={showModal}
            onRequestClose={handleCancel}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Choose Your Role</Text>
                <View style={styles.optionsContainer}>
                  <TouchableOpacity
                    style={styles.optionBox}
                    onPress={() => animateTransition('Student')}
                  >
                    <Text style={styles.optionText}>Student</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionBox}
                    onPress={() => animateTransition('Coach')}
                  >
                    <Text style={styles.optionText}>Coach</Text>
                  </TouchableOpacity>
                </View>

                <Animated.View style={{ height: animatedHeight, opacity: animatedOpacity }}>
                  {selectedRole === 'Coach' && (
                    <>
                      <TextInput
                        placeholder=" Coach ID"
                        value={coachId}
                        onChangeText={setCoachId}
                      />
                      <HR color="#000000" thickness={1} style={styles.pupphr} />
                    </>
                  )}
                </Animated.View>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleContinue}
                >
                  <Text style={styles.modalButtonText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={handleCancel}
                >
                  <Text style={styles.modalButtonText2}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <TouchableOpacity style={styles.text3} onPress={() => setShowModal(true)}>
            <Text style={styles.firstText}>Sign-up</Text>
          </TouchableOpacity>

          <TextInput style={styles.input} placeholder="First Name" />
          <HR color="#000000" thickness={1} style={styles.hr} />
          <TextInput style={styles.input} placeholder="Email" />
          <HR color="#000000" thickness={1} style={styles.hr} />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <HR color="#000000" thickness={1} style={styles.hr} />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Icon
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <HR color="#000000" thickness={1} style={styles.hr} />
          <View style={styles.agreeContainer}>
            <View style={styles.box}></View>
            <Text>
              I agree to <Text style={styles.agreeText}>Terms of Service and Privacy Policy</Text>
            </Text>
          </View>
          <CustomButton
            title="SIGN UP"
            onPress={() => navigate('passcode1')}
            containerStyle={styles.button}
            textStyle={styles.text}
          />
        </>
      )}
    </View>
  );
};
export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  loginandsign: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: -30,
    gap: 90,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 40, 
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    paddingLeft:15,
  },
  activeTab: {
    borderBottomColor: '#59368C',
    borderBottomWidth: 4, 
    paddingBottom: 10,
    paddingHorizontal: 50, 
 
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"center",
    paddingLeft:25
  },
  activeTabText:{
  
  },
  imageWrapper: {
    marginTop:30,
    padding: 15, 
    borderColor: "#FFFFFF",
    borderWidth: 2, 
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 }, 
    shadowOpacity: 0.3,
  
    elevation: 0.1, 
  },
  img: {
    width: 20, 
    height: 20, 
  },
  firstText: {
    fontSize: 25,
    color: 'rgb(45, 16, 102)',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
    marginLeft: -260,
  },
  input: {
    height: 40,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  passwordInput: {
    flex: 1,
  },
  text3:{
   marginLeft:200
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  hr: {
    width: '100%',
    marginVertical: 0,
  },
  pupphr: {
    width: '10%',
    marginVertical: 10,
    marginLeft:330
  },
  hr3: {
    width: '35%',
    marginVertical: 5,
    marginBottom: 25,
    marginLeft: -215,
  },
  box: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginRight: 10,
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  agreeText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#59368C',
    width: 340,
    borderRadius: 30,
    height:60
  },
  text: {
    fontSize: 18,
    paddingTop:5,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    marginTop: 25,
  },
  linee: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    flex: 1,
  },
  orText: {
    color: '#000000',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  endingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordText: {
    marginTop: 10,
    marginLeft: -170,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 364,
    height: 419,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  optionBox: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#59368C',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 134,
    height: 85,
  },
  optionText: {
    fontSize: 18,
    color: '#59368C',
  },
  coachIdInput: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#59368C',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  modalButton: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#59368C',
    marginVertical: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#59368C',
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
  },
  modalButtonText2: {
    fontSize: 18,
    fontWeight: "400",
    color: "black",
  },
});
