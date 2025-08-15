import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SendButton from './SendButton'
import { s, vs } from 'react-native-size-matters'

const SocialSection = ({title, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {icon}
       </View>
        <Text 
        style={styles.text}
        >
        {title}
        </Text>
        <SendButton />
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center", 
        borderBottomWidth: 1,
        borderBottomColor: "#E4E6E8",
        paddingVertical: vs(15),
    },

    text: {
        marginStart: s(14),
        flex: 1,  
        fontSize: 12,
        color: "#8083A3"
    },

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