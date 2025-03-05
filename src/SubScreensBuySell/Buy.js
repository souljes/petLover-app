import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  RefreshControl,
} from "react-native";
import logoBack from "../../assets/back.jpg";
import { useNavigation } from "@react-navigation/native";

const HomeCom = () => {
  const [categories, setCategories] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://192.168.171.103:3000/categories");
      const data = await response.json();

      // Check if data is an array and not empty
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error("Invalid data format");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCategories();
    setRefreshing(false);
  };

  const navigation = useNavigation();

  const renderItems = ({ item }) => {
    const categoryName = item.name || "Unknown Category";

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("BuySubCat", { categoryId: item._id });
        }}
      >
        <ImageBackground
          blurRadius={8}
          source={logoBack}
          style={styles.backImage}
        >
          <View style={styles.blurView}>
            <Text style={styles.cardText}>{categoryName}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Hero Ad */}
      <View style={styles.heroAdContainerTop}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1496378856/photo/showing-smartphone-during-conference.jpg?s=2048x2048&w=is&k=20&c=B0o9LRYbzaR5KrkbSFylYJIjwbtg2rLV8biOWSjDqcc=",
          }}
          style={styles.heroAdImageTop}
        />
        <View style={styles.overlay} />
        <Text style={styles.adText}>مساحة إعلانية</Text>
      </View>

      {/* Cards */}
      <FlatList
        data={categories}
        renderItem={renderItems}
        keyExtractor={(item) => item._id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.container}
        contentContainerStyle={styles.cardsContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      {/* Hero Ad Bottom */}
      <View style={styles.heroAdContainer}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1496378856/photo/showing-smartphone-during-conference.jpg?s=2048x2048&w=is&k=20&c=B0o9LRYbzaR5KrkbSFylYJIjwbtg2rLV8biOWSjDqcc=",
          }}
          style={styles.heroAdImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.adText}>مساحة إعلانية</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardsContainer: {
    padding: 10,
  },
  card: {
    height: "50%",
    width: "50%",
    aspectRatio: 1.4,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1d3f40",
    textAlign: "center",
  },
  backImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  blurView: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  heroAdContainer: {
    height: 250,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  heroAdContainerTop: {
    height: 150,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  heroAdImage: {
    width: "100%",
    height: 250,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "contain",
  },
  heroAdImageTop: {
    height: 150,
    width: "100%",
    marginTop: 0,
    resizeMode: "contain",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(29, 63, 64, 0.5)",
  },
  adText: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeCom;
