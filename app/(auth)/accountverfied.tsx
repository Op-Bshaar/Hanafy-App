import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomButton from '@/components/custombutton'

const Accountverfied = ({navigate}:any) => {
  return (
    <View style = {styles.container}>
         <Image
          source={require('@/assets/images/CompletedPassword 1.png')}
        />
        <Text style={{fontSize:30,fontWeight:"bold",marginTop:10}}>Account Verified </Text>
        <Text style ={{color:"gray",marginTop:6}}>your Account has been verified  </Text>
        <Text style={{color:"gray"}}>Successfully.</Text>
      <CustomButton
        title="Done"
        containerStyle={styles.button}
        textStyle={styles.text}
        onPress={()=>navigate('interst')}
        />
    </View>
  )
}

export default Accountverfied

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },

      button: {
        backgroundColor: '#59368C',
        width: 332,
        height:60,
        borderRadius: 64,
        marginTop: 70,
      },
      text: {
        fontSize: 18,
        color: 'white',
        marginTop:10
      },
})