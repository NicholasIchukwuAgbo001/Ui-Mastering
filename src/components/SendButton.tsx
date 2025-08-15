import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SendIcons } from '../assets/Icons.tsx'

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendIcons />
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
  circle:{
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1077AF',
    justifyContent: 'center',
    alignItems: 'center',
  }
})