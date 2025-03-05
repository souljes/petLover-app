import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native"
import {useNavigation} from "@react-navigation/native"

const veterinarianData = [
  {
    id: "1",
    name: "دكتور بيطري 1",
    shortDescription: "متخصص في علاج الحيوانات الأليفة.",
    phone: "12345678",
    image:
      "https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t", // Replace with actual image URL
  },
  {
    id: "2",
    name: "دكتور بيطري 2",
    shortDescription: "متخصص في الجراحة البيطرية.",
    phone: "87654321",
    image:
      "https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t", // Replace with actual image URL
  },
]

const Card = ({item}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("VeterinarianDetail", {veterinarian: item})
      }>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle} numberOfLines={3} ellipsizeMode="tail">
          {item.shortDescription}
        </Text>
        <Text style={styles.phone}>{`Phone: ${item.phone}`}</Text>
      </View>
      <Image style={styles.image} source={{uri: item.image}} />
    </TouchableOpacity>
  )
}

const Veterinarian = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={veterinarianData}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    elevation: 10,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    height: 160,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
  title: {
    color: "#2a595b",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    textAlign: "left",
  },
  phone: {
    fontSize: 14,
    color: "#1d3f40",
    textAlign: "left",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: "cover",
  },
})

export default Veterinarian
