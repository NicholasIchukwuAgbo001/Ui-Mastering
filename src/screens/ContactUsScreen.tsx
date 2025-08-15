import { StyleSheet, View, Text } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>

      <Text style={styles.screenTitle}>Contact Us</Text>

      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platform</Text>
        <SocialSection />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  socialContainer: {
    marginTop: vs(22),
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
  },

  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
    paddingBottom: vs(10),
  },

  screenTitle: {
    fontSize: s(24),
    fontWeight: "semibold",
    color: "blue",
    marginTop: vs(20),
    marginStart: s(19),
  },
});
