import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import FoodLogo from '../assets/FoodLogo'
import SunImage from '../assets/SunImage'

const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FoodLogo />

      <SunImage style={styles.sunImage}/>
    </SafeAreaView>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    sunImage:{
        position: "absolute",
        bottom: 0,
        right: 0
    }
})