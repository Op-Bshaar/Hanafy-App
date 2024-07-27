import { StyleSheet, Text,Image,TextInput, View } from 'react-native'
import React from 'react'
import HR from '@/components/hr'
import CustomButton from '@/components/custombutton'

const Forgotpass = ({navigate}:any) => {

  return (
    <View style={styles.container}>
      <Text style = {styles.first}>Forgot Password</Text>
      <Text style = {styles.longText}>Enter your email, and we'll send you  a code to </Text>
        <Text  style = {styles.longText}>reset you password.Stay secure!</Text>

      <Image
          source={require('@/assets/images/forgotPassword 1.png')}
        />

     <TextInput 
        style={styles.input} 
        placeholder="Email" 
      />
      <HR color="#000000" thickness={1} style={styles.hr} />

      <CustomButton 
        title="Send Passcode" 
        onPress={()=> navigate('passcode')}
        
        containerStyle={styles.button} 
        textStyle={styles.text} 
      />
    </View>
  )
}

export default Forgotpass

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    first:{
      fontSize:37,
      fontWeight:"700",
      width:287,
      height:50,
    },
    input: {
      height: 40,
      borderColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginVertical: 5,
      paddingHorizontal: 10,
      width: '100%', 
      marginLeft:30,
      paddingTop:20
    },
  

    longText:{
      color:"gray",
      margin:1,
      fontSize:16,
      fontWeight:"400"
    },
    hr: {
      width: '90%', 
      marginVertical: 10,
     
    },
    button: {
      backgroundColor: '#59368C',
      width: 340,
      borderRadius: 30,
      height:60,
      marginTop:20
    },
    text: {
      fontSize: 18,
      paddingTop:5,
    },
})