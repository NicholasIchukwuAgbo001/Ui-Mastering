import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const UserAvatar = () => {
  return (
    <Image 
    source={require("../assets/avatarImage.jpeg")}
      style={styles.avatar}
    />
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar: {
        height: s(40),
        width: s(40),
        borderRadius: s(20)
    }
})