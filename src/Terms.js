import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {ScrollView, TextInput} from "react-native-gesture-handler"

const Terms = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>صفحة الشروط و القواعد</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1d3f40",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 12,
    paddingLeft: 8,
    width: "85%",
    textAlign: "center",
    color: "#1d3f40"
  },
})

export default Terms
