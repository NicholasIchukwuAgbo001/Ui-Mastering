import { StyleSheet, View, Text } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        <SocialSection
          icon={<FontAwesome name="whatsapp" size={24} color="green" />}
          title="WhatsApp"
        />
        <SocialSection
          icon={<FontAwesome name="twitter" size={24} color="#1DA1F2" />}
          title="X"
        />
        <SocialSection
          icon={<FontAwesome name="instagram" size={24} color="#E1306C" />}
          title="Instagram"
        />
        <SocialSection
          icon={<FontAwesome name="snapchat-ghost" size={24} color="#FFFC00" />}
          title="Snapchat"
        />
        <SocialSection
          icon={<FontAwesome name="music" size={24} color="black" />}
          title="TikTok"
        />
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
    fontWeight: "600",
    paddingBottom: vs(10),
  },

  screenTitle: {
    fontSize: s(24),
    fontWeight: "600",
    color: "blue",
    marginTop: vs(20),
    marginStart: s(19),
  },
});
