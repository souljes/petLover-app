import React from "react"
import CategoriesCom from "./Componants/CategoriesCom"

// The `navigation` prop should be received by ShopSC automatically if it's used as a screen in a navigator
export default function CategoriesScreen({navigation}) {
  // Then, you pass the `navigation` prop to ShopCom
  return <CategoriesCom navigation={navigation} />
}
