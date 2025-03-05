import React from "react"
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import {useNavigation} from "@react-navigation/native"

const CategoriesScreen = () => {
  const navigation = useNavigation()

  const data = [
    {id: "1", image: "https://loremflickr.com/640/360", name: "cat 1"},
    {id: "2", image: "https://loremflickr.com/640/360", name: "cat 2"},
    {id: "3", image: "https://loremflickr.com/640/360", name: "cat 3"},
    {id: "4", image: "https://loremflickr.com/640/360", name: "cat 4"},
    {id: "5", image: "https://loremflickr.com/640/360", name: "cat 5"},
    {id: "6", image: "https://loremflickr.com/640/360", name: "cat 6"},
    {id: "7", image: "https://loremflickr.com/640/360", name: "cat 7"},
    {id: "8", image: "https://loremflickr.com/640/360", name: "cat 8"},
    {id: "9", image: "https://loremflickr.com/640/360", name: "cat 9"},
    // Add more categories as needed
  ]

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Shop", {screen: "ShopSC"})}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    margin: 5,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    elevation: 10,
    // borderWidth: 1,
    // borderColor: "#2a595b",
    borderRadius: 8,
  },
  imageContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#2a595b",
    textAlign: "center",
  },
})

export default CategoriesScreen
