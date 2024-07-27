import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '@/components/custombutton'

const Passcode = ({navigate}:any) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.pass}>Passcode</Text>
      <Text style = {styles.check}>Ckeck your email for a passcode . Enter it below</Text>
      <Text style={{color:"gray"}}>to securely reset you password</Text>

      <Image
          source={require('@/assets/images/email 2.png')}
          style={styles.img}
        />

        <View style = {styles.square}>

            <TouchableOpacity style={styles.roleButton}>
                <Text style={styles.roleText}></Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.roleButton}>
                <Text style={styles.roleText}></Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.roleButton}>
                <Text style={styles.roleText}></Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.roleButton}>
                <Text style={styles.roleText}></Text>

                </TouchableOpacity>

        </View>

        <Text style = {{"marginTop":20}}>Code expires in : <Text style={{color:"blue"}}>00:54</Text></Text>
        <Text style = {{"marginTop":20}}>Didn't receive code?  <Text style={{color:"blue"}}>Resend Code</Text></Text>

        <CustomButton
        title="Verify"
        onPress={() => navigate('rest')}
        containerStyle={styles.button}
        textStyle={styles.text}
        />
    </View>
  )
}

export default Passcode

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    square:{
        display:"flex",
        flexDirection:"row",
        gap:10,
        marginTop:30
    },
    pass:{
        fontSize:37,
        fontWeight:"700"    
    },
    check:{
        color:"gray",
        marginTop:10,
        marginLeft:1,
        fontSize:16,
        fontWeight:"400"

    },
    img:{
      marginTop:16
    },
    marleft:{
        textAlign:"center"
    },
    roleButton: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#59368C',
        justifyContent: 'center',
        alignItems: 'center',
      },
      roleText: {
        fontSize: 16,
        color: 'rgb(45, 16, 102)',
      },

      button: {
        backgroundColor: '#59368C',
        width: 340,
        borderRadius: 30,
        height:60,
        marginTop:40
      },
      text: {
        fontSize: 18,
        paddingTop:5,
      },
})