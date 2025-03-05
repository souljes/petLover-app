import {useNavigation} from "@react-navigation/native"
import React from "react"
import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

function Termes() {
  const navigation = useNavigation()
  const goToTerms = () => {
    navigation.navigate("Terms")
  }
  const goToAbout = () => {
    navigation.navigate("About")
  }
  return (
    <View style={styles.forget}>
      <TouchableOpacity onPress={goToAbout}>
        <Text style={styles.newRegisterText}>عنا</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToTerms}>
        <Text style={styles.newRegisterText}>الشروط و القواعد</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  forget: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Distribute items evenly with space in between
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  newRegisterText: {
    color: "blue",
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
  },
})

export default Termes
