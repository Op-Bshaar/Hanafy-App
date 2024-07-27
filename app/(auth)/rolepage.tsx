import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '@/components/custombutton';

const Rolepage = ({ navigate }: any) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [coachId, setCoachId] = useState<string | null>(null);
  const [inputCoachId, setInputCoachId] = useState<string>('');

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
    if (role === 'coach') {
      setCoachId('');
    } else if (role === 'student') {
      setCoachId(null);
    }
  };

  const handleContinue = () => {
    if (selectedRole === 'coach') {
      setCoachId(inputCoachId);
      console.log('Coach ID:', coachId);
    }
    navigate('profilesetting');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Choose Your Role</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === 'student' ? styles.selectedRoleButton : styles.unselectedRoleButton,
          ]}
          onPress={() => handleSelectRole('student')}
        >
          <Text
            style={[
              styles.roleText,
              selectedRole === 'student' && styles.selectedRoleText,
            ]}
          >
            Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleButton,
            selectedRole === 'coach' ? styles.selectedRoleButton : styles.unselectedRoleButton,
          ]}
          onPress={() => handleSelectRole('coach')}
        >
          <Text
            style={[
              styles.roleText,
              selectedRole === 'coach' && styles.selectedRoleText,
            ]}
          >
            Coach
          </Text>
        </TouchableOpacity>
      </View>

      {selectedRole === 'coach' && (
        <TextInput 
          style={styles.input} 
          placeholder="Coach ID" 
          value={inputCoachId}
          onChangeText={setInputCoachId}
        />
      )}

      <CustomButton
        title="Continue"
        onPress={() => navigate('welcompage')}
        containerStyle={styles.button}
        textStyle={styles.text}
      />
      <CustomButton
        title="Cancel"
        onPress={() => navigate('welcompage')}
        containerStyle={styles.button2}
        textStyle={styles.text2}
      />
    </View>
  );
};

export default Rolepage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', 
    
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roleContainer: {
    flexDirection: 'row',
    gap: 30,
    margin: 10,
  },
  roleButton: {
    paddingVertical: 30,
    paddingHorizontal: 30, 
    borderRadius: 7,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRoleButton: {
    borderColor: '#59368C',
  },
  unselectedRoleButton: {
    borderColor: '#59368C',
    opacity: 0.5,
  },
  roleText: {
    fontSize: 18,
    color: 'rgb(45, 16, 102)',
  },
  selectedRoleText: {
    color: 'rgb(45, 16, 102)',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 20,
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: '#59368C',
    width: 364,
    height:59,
    borderRadius: 30,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  button2: {
    backgroundColor: 'white',
    width: 364,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#59368C',
    marginTop: 20,
    height:59
  },
  text2: {
    color: 'rgb(45, 16, 102)',
    fontSize: 18,
  },
});
