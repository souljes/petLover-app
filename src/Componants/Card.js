import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import FontAwsome from "@expo/vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../../assets/back.jpg";

const Card = ({ item, onPress }) => {
  if (item.isAd) {
    return (
      <View style={styles.adContainer}>
        <Image
          style={styles.adImage}
          source={{ uri: item.image }}
          blurRadius={3}
        />
        <View style={styles.overlay} />
        <Text style={styles.adText}>{item.shortDescription}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.cardContainer}
      key={item._id}
    >
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle} numberOfLines={3} ellipsizeMode="tail">
          {item.shortDescription}
        </Text>
        <Text style={styles.price}>{`${item.price} د.ك`}</Text>
        <View style={styles.container1}>
          <Text
            style={{
              color: "gray",
              fontSize: 8,
              marginTop: 10,
              textAlign: "left",
            }}
          >{`${item._id}`}</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        {item.video ? (
          <Icon1
            name="play-circle"
            color={"#2a595b"}
            size={35}
            style={styles.playIcon}
          />
        ) : null}
        <Image
          style={styles.image}
          source={
            Array.isArray(item.images) && item.images.length > 0
              ? { uri: item.images[0] }
              : item.image
              ? { uri: item.image }
              : logo
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    shadowOffset: { width: 0, height: 3 },
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
    color: "gray",
    fontSize: 15,
    textAlign: "left",
  },
  price: {
    color: "#1d3f40",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  container1: {
    alignItems: "right",
    backgroundColor: "transparent",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: "cover",
  },
  adContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    aspectRatio: 849 / 768,
    marginVertical: 10,
    borderRadius: 0,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(29, 63, 64, 0.5)",
  },
  adImage: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    position: "absolute",
    resizeMode: "contain",
  },
  adText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  resize: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: "contain",
  },
  imageContainer: {
    position: "relative",
  },
  playIcon: {
    position: "absolute",
    top: "40%",
    left: "40%",
    zIndex: 99,
  },
});

export default Card;
