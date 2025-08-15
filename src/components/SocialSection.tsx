import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SendButton from './SendButton'
import SocialCircle from './SocialCircle'
import { s } from 'react-native-size-matters'

const SocialSection = () => {
  return (
    <View style={styles.container}>
        <SocialCircle />
        <Text 
        style={styles.text}
        >
        Whatsaap
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
        borderBottomColor: "#E4E6E8" 
    },

    text: {
        marginStart: s(14),
        flex: 1,  
        fontSize: 12,
        color: "#8083A3"
    }
})