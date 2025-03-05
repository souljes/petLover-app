import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {globalStyles} from "../../Global Styles/Global"

function Wallet() {
  return (
    <View style={styles.walletContainer}>
      <Text style={globalStyles.h1}>المحفظة</Text>
      <Text style={globalStyles.h5}>المبلغ: ٢٥ د.ك</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  walletContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // You can adjust this based on your layout requirements
    elevation: 0,
    zIndex: 9,
    alignItems: "center",
    textAlign: "right",
    padding: 16,
    backgroundColor: "transparent",
    borderRadius: 8,
    margin: 16,
  },
})

export default Wallet
