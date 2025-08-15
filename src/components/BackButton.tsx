import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { s } from 'react-native-size-matters';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        height: s(40),
        width: s(40),
        backgroundColor: "#ECF0F4",
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    }
})