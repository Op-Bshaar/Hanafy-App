import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/custombutton'

const ChangePass = ({navigate}:any) => {
  return (
    <View style={styles.container}>
   <Image
        source={require('@/assets/images/CompletedPassword 1.png')}
  
      />
      <Text style={styles.pass}>Password Changed</Text>
      <Text style={{color:"gray",marginTop:30}}>Your password is changed.Keep it confidential </Text>
      <Text style={{ marginLeft: -10, marginTop: 3 ,color:"gray"}}>for the safety of your account. </Text>
    
      <CustomButton
        title="Done"
        onPress={() => navigate('Login')}
        containerStyle={styles.button}
        textStyle={styles.text}
      />
    
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center"
    },
    pass: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
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
      }
})