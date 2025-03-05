import * as React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import {globalStyles} from "../Global Styles/Global"
import Login from "./Componants/Login.js"
import Contact from "./Componants/Contact.js"
import Wallet from "./Componants/Wallet.js"
import Termes from "./Componants/Termes.js"
// import Myads from "./Componants/Myads.js";
import {useNavigation} from "@react-navigation/native"
import Language from "./Componants/Languge.js"

export default function ProfileSC() {
  const navigation = useNavigation()

  const handleMyAdsPress = () => {
    navigation.navigate("Myads")
  }
  return (
    <View>
      <ScrollView>
        <Login />
        {/* <View style={globalStyles.separator}></View> */}
        <View style={styles.container}>
          <Text style={globalStyles.userName}>الاسم المستعار</Text>
          {/* <View style={globalStyles.separator}></View> */}
          <TouchableOpacity
            onPress={handleMyAdsPress}
            style={globalStyles.button}>
            <View style={styles.sectionContainer}>
              <Text style={globalStyles.buttonText}>اعلاناتي</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <Myads /> */}
        {/* <View style={globalStyles.separator}></View> */}
        <Language />
        <Wallet />

        <Termes />
        {/* <View style={globalStyles.separator}></View> */}
        <Contact />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "transparent",
  },
})
