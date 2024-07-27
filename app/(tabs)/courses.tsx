import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Courses = () => {
  return (
    <View style={styles.container}>
      <Text>Courses</Text>
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})