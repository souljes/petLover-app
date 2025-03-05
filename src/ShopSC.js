import React from "react";
import ShopCom from "./Componants/ShopCom";

// The `navigation` prop should be received by ShopSC automatically if it's used as a screen in a navigator
export default function ShopSC({ navigation }) {
  // Then, you pass the `navigation` prop to ShopCom
  return <ShopCom navigation={navigation} />;
}
