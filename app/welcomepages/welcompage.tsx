import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, TextInput, Animated, Dimensions } from 'react-native';
import HR from '@/components/hr';
import Carousel from 'pinar'
import Constants from 'expo-constants'

const WelcomePage = ({ navigate }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [coachId, setCoachId] = useState('');
  const [animation] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;



  const images = [
    {
      img: require('@/assets/images/Welcome-Page 1.png'),
      text: 'Connect with 7k+ expert coaches',
    },
    {
      img: require('@/assets/images/Welcome-Student 1.png'),
      text: 'Study anytime, anywhere',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(translateX, {
        toValue: -currentIndex * 270, 
        duration: 500,
        useNativeDriver: true,
      }).start();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); 
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex, translateX]);

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

 useEffect(()=>{
   
 },[3])





  return (
    <View style={styles.container}>
      <View style={styles.carusolcontainer}>
        <Carousel showsControls={false} style = {styles.carousel}>
        
          <Image
              source={require('@/assets/images/Welcome-Page 1.png')}
              style={styles.imgeicon}
            
            />
            {/*{images.map(imge=><Image source = {imge.img} key={imge.text}/>)}*/}
              
            <Image
              source={require('@/assets/images/Welcome-Student 1.png')}
              style={styles.imgeicon}
            />
          
        </Carousel>
       </View>
      
      
      <Text style={styles.headerText}>
        Connect with 7k+ expert coaches
       
      </Text>

      <View style={styles.About}>
        <Text style={styles.heading}>Online Courses</Text>
        <Text style={styles.description}>
          Welcome to <Text style={styles.highlight}>Hanafy</Text>, join up to share your skills or learn something new
        </Text>

        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
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
                    <HR color="#000000" thickness={1} style={styles.hr} />
                  </>
                )}
              </Animated.View>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modalButtonText}>Continue</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modalButtonText2}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
          <Image
            source={require('@/assets/images/Social Icons.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Continue with Facebook')}>
          <Image
            source={require('@/assets/images/Social Icons(1).png')}
            style={styles.socialIcon}
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Continue with LinkedIn')}>
          <Image
            source={require('@/assets/images/Vector.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.buttonText}>Continue with LinkedIn</Text>
        </TouchableOpacity>

        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={() => navigate('Login')}>
            <Text style={styles.buttonText1}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={() => navigate('Signup')}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.skipButton} onPress={() => navigate('_Layout')}>
          <Text style={styles.skipText}>SKIP FOR NOW</Text>
          <Image
            source={require('@/assets/images/Path 3(1).png')}
            style={styles.skipIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
    width: '100%',
    marginTop:50
  },
  carusolcontainer:{
   height:263,
   width:345
  },
  slider: {
    flexDirection: 'row',
    width: 840,
  },
  image: {
    width: 270,
    height: 200, 
    resizeMode: 'contain',
  },
  headerText: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:0

  },
  About: {
    backgroundColor: "#330072",
    padding: 20,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 400,
    alignItems: 'center',

    height:567
    
  },
  heading: {
    color: "white",
    fontSize: 37,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: "700",
  },
  description: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#FAE178',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderWidth: 2,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
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
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 11,
  },
  socialIcon: {
    marginLeft: 40,
  },
  imgeicon:{
   width:354,
   height:263
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

  hr: {
    width: '100%',
    marginVertical: 10,
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
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#FAE1787D',
    flex: 1,
  },
  orText: {
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: -22,
  
  },
  button2: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: '#330072',
    borderWidth: 1,
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText1: {
    color: "white",
    fontSize: 16,
  },
  skipButton: {
    marginTop: 7,
    width: '100%',
    alignItems: 'center',
    flexDirection: "row",
    marginLeft: 220,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  skipIcon: {
    marginLeft: 10,
  },
  carousel:{
    height:"100%",
    width:"100%"
  }
});

export default WelcomePage;
