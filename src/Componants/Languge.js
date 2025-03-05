import React, {useState} from "react"
import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN")

  const toggleLanguage = () => {
    setSelectedLanguage(selectedLanguage === "EN" ? "AR" : "EN")
    // Here you can implement logic to switch the language in your application
    // For demonstration, I'm just toggling between EN and AR in state
  }

  return (
    <View style={styles.languageContainer}>
      <Text style={styles.lantext}>اللغة</Text>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === "EN" ? styles.selectedLanguage : null,
        ]}
        onPress={toggleLanguage}>
        <Text
          style={[
            styles.languageText,
            selectedLanguage === "EN" ? styles.selectedText : null,
          ]}>
          EN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === "AR" ? styles.selectedLanguage : null,
        ]}
        onPress={toggleLanguage}>
        <Text
          style={[
            styles.languageText,
            selectedLanguage === "AR" ? styles.selectedText : null,
          ]}>
          عربي
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center items horizontally
    marginTop: 20,
  },
  languageButton: {
    color: "#1d3f40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1d3f40",
    marginHorizontal: 5, // Add margin between buttons
  },
  selectedLanguage: {
    backgroundColor: "#1d3f40",
  },
  languageText: {
    color: "#1d3f40",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText: {
    color: "white",
  },
  lantext: {
    color: "#1d3f40",
    marginRight: 50,
    fontSize: 25,
  },
})

export default Language
