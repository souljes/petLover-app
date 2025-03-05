import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  I18nManager,
  FlatList,
  Dimensions,
} from "react-native";
import logoBack from "../../assets/back.jpg";
import { useNavigation } from "@react-navigation/native";

I18nManager.forceRTL(true);
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const cardData = [
  { title: "بيع و شراء", screen: "BuySellScreen" },
  { title: "أعلاف", screen: "FoodScreen" },
  { title: "صيدليات", screen: "PharmacyScreen" },
  { title: "مستشفيات", screen: "VeterinarianScreen" },
];

const HomeCom = () => {
  const navigation = useNavigation();
  const [adsData, setAdsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.171.103:3000/ads-img");
        const data = await response.json();
        setAdsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // This must removed After
    const intervalId = setInterval(fetchData, 300000);
    return () => clearInterval(intervalId);
  }, []);

  const renderItems = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
    >
      <ImageBackground
        blurRadius={8}
        source={logoBack}
        style={styles.backImage}
      >
        <View style={styles.blurView}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  const heroTop = 150;
  const heroBot = 250;
  const windowWidth = Dimensions.get("window").width;
  console.log(windowWidth);

  return (
    <View style={styles.container}>
      <View style={styles.heroAdContainerTop}>
        {/* <Image
          source={{
            uri: `${adsData[0]?.picture1}/${windowWidth}/${heroTop}`,
          }}
          style={styles.heroAdImageTop}
        /> */}
        <Image
          source={{
            uri: `${
              adsData[0]?.picture1
            }/${windowWidth}/${heroTop}?timestamp=${new Date().getTime()}`,
          }}
          style={styles.heroAdImageTop}
        />
        <View style={styles.overlay} />
        <Text style={styles.adText}>مساحة إعلانية</Text>
      </View>
      {/* Cards  */}
      <FlatList
        data={cardData}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.container}
        contentContainerStyle={styles.cardsContainer}
      />

      {/* Cards END */}
      <View style={styles.heroAdContainer}>
        {/* <Image
          source={{
            uri: `${adsData[0]?.picture2}/${windowWidth}/${heroBot}`,
          }}
          style={styles.heroAdImage}
        /> */}
        <Image
          source={{
            uri: `${
              adsData[0]?.picture2
            }/${windowWidth}/${heroBot}?timestamp=${new Date().getTime()}`,
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
  container: {
    flex: 1,
  },
  heroAdContainer: {
    height: 250,
    width: Dimensions.get("window").width,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  heroAdContainerTop: {
    // height: 150,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  heroAdImage: {
    height: 250,
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 0,
    left: 0,
    // resizeMode: "contain",
  },
  heroAdImageTop: {
    height: 150,
    width: "100%",
    // marginTop: 0,
    // resizeMode: "inside",
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
