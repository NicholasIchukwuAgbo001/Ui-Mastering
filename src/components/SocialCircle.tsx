import { StyleSheet, View} from 'react-native'
import React from 'react'
import { SendIcons } from '../assets/Icons.tsx'
import { s } from 'react-native-size-matters'

const SocialCircle = () => {
  return (
    <View style={styles.circle}>
        
    </View>
  )
}

export default SocialCircle

const styles = StyleSheet.create({
  circle:{
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  }
})