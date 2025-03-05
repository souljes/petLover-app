import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import {globalStyles} from "../../Global Styles/Global"
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/FontAwesome"
import Icon from "react-native-vector-icons/Ionicons"

function Contact() {
  // Assuming you have these functions defined somewhere
  const sendEmail = () => {
    // Implement your send email logic here
  }

  const openWhatsApp = () => {
    // Implement your open WhatsApp logic here
  }
  const callPhoneNumber = () => {
    // Linking.openURL("tel:+96555885252");
  }
  return (
    <React.Fragment>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}>
        <Text style={globalStyles.h1}>تواصل معنا</Text>
      </View>
      <View style={styles.container1}>
        <Text style={globalStyles.h5}>
          <Text
            style={{color: "blue", textDecorationLine: "underline"}}
            onPress={sendEmail}>
            {/* <FontAwesome name="envelope" size={30} color="#1d3f40" /> */}
            <Icon1 name="envelope-o" size={30} color="#1d3f40" />
          </Text>
        </Text>
        <TouchableOpacity onPress={openWhatsApp}>
          {/* <FontAwesome name="whatsapp" size={35} color="#1d3f40" /> */}
          <Icon name="logo-whatsapp" size={35} color="#25d366"/>
        </TouchableOpacity>

        {/* Add phone number */}
        <Text
          style={{color: "blue", textDecorationLine: "underline"}}
          onPress={callPhoneNumber}>
          {/* <FontAwesome name="phone" size={30} color="#1d3f40" /> */}
          <Icon name="phone-portrait-outline" size={30} color="#1d3f40"/>
        </Text>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    elevation: 0,
    zIndex: 9,
    alignItems: "center",
    textAlign: "center",
    padding: 16,
    backgroundColor: "transparent",
    borderRadius: 8,
    margin: 16,
  },
})

export default Contact
