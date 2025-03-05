import { StyleSheet, Text, I18nManager } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Nav from "./src/Componants/Naveigation";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);
export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Nav />
      {/* <StatusBar style="white" /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
