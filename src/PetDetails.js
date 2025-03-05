import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Linking,
} from "react-native";
import logo from "../assets/back.jpg";
import { Video } from "expo-av";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow error to be caught in fetchData
  }
};

const PetDetails = ({ route }) => {
  const [pet1, setPet1] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  // Assuming pet details are passed in route.params
  const { pet } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetch("http://192.168.171.103:3000/approved")
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data); // Ensure you map data correctly
      })
      .catch((error) => console.error("Error fetching approved data:", error));
  }, []);

  const fetchData = async () => {
    try {
      const dataResponse = await getData(
        "http://192.168.171.103:3000/approved"
      );

      const petId = String(pet._id);

      const currentPet = dataResponse.find((p) => p._id === petId);

      if (currentPet) {
        setPet1(currentPet);

        // Set categoryData based on the currentPet
        setCategoryData([
          {
            category: currentPet.category,
            subCategory0: currentPet.subCategory0,
            subCategory1: currentPet.subCategory1,
            subCategory2: currentPet.subCategory2,
            subCategory3: currentPet.subCategory3,
            subCategory4: currentPet.subCategory4,
            subCategory5: currentPet.subCategory5,
            subCategory6: currentPet.subCategory6,
            subCategory7: currentPet.subCategory7,
          },
        ]);
      } else {
        console.log("Pet not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleWhatsApp = () => {
    const url = `whatsapp://send?phone=${pet.phone}&text=Hello! From Pet Lover
    السلام عليكم, من بت لوفر`;
    Linking.openURL(url).catch((err) =>
      console.error("Error opening WhatsApp:", err)
    );
  };

  const handleCall = () => {
    const url = `tel:${pet.phone}`;
    Linking.openURL(url).catch((err) =>
      console.error("Error making call:", err)
    );
  };

  const renderMediaItem = ({ item }) => {
    if (item.type === "video") {
      return (
        <Video
          source={{ uri: item.uri }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isLooping
          shouldPlay
        />
      );
    } else {
      return (
        <Image
          source={{ uri: item.uri }}
          style={styles.image}
          accessibilityLabel={pet.name}
        />
      );
    }
  };

  const renderImageOrLogo = () => {
    if (pet.image) {
      return (
        <Image
          source={{ uri: pet.image }}
          style={styles.image}
          accessibilityLabel={pet.name}
        />
      );
    } else {
      return (
        <Image
          source={logo}
          style={styles.resize}
          accessibilityLabel={pet.name}
        />
      );
    }
  };

  const media = [];

  if (pet.video) {
    media.push({ type: "video", uri: pet.video });
  }

  if (pet.images && pet.images.length > 0) {
    pet.images.forEach((image) => {
      media.push({ type: "image", uri: image });
    });
  }

  // Display category and subcategories
  const renderCategories = () => {
    if (!categoryData || categoryData.length === 0) {
      console.log("No category data available");
      return <Text>No category data available</Text>;
    }

    const filteredCategoryData = categoryData.filter(
      (item) => item._id === pet._id
    );

    if (filteredCategoryData.length === 0) {
      return <Text>No category data available for this pet</Text>;
    }

    return (
      <>
        {filteredCategoryData.map((item, index) => {
          const { category, ...subCategories } = item;
          const subCategoryNames = [
            subCategories.subCategory0?.name,
            subCategories.subCategory1?.name,
            subCategories.subCategory2?.name,
            subCategories.subCategory3?.name,
            subCategories.subCategory4?.name,
            subCategories.subCategory5?.name,
            subCategories.subCategory6?.name,
            subCategories.subCategory7?.name,
          ].filter((name) => name);

          const subCategoryString = subCategoryNames.join(" - ").toString();

          return (
            <View key={index}>
              <Text style={styles.sctions}>التصنيف</Text>
              <Text style={styles.sctions}>{category?.name || "Unknown"}</Text>
              {subCategoryNames.length > 0 && (
                <>
                  <Text style={styles.sctions}>التصنيفات الفرعية</Text>
                  <Text style={styles.sctions}>{subCategoryString}</Text>
                </>
              )}
            </View>
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.detailsContainer}
        contentContainerStyle={styles.detailsContent}
      >
        <View style={styles.imageContainer}>
          {media.length > 0 ? (
            <FlatList
              data={media}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderMediaItem}
              style={styles.imageContainer}
            />
          ) : (
            renderImageOrLogo()
          )}
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.sctions}>اعلان رقم:</Text>
          <Text style={styles.sctions}>{pet._id}</Text>
          {renderCategories()}
          <Text style={styles.description}>{pet.shortDescription}</Text>
          <Text style={styles.name}>السعر: </Text>
          <Text style={styles.price}>{`${pet.price} دك`}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleWhatsApp}>
              <Text style={styles.buttonText}>التواصل من خلال الواتساب</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCall}>
              <Text style={styles.buttonText}>التواصل من خلال المكالمة</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "snow",
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContent: {
    alignItems: "center", // Center content horizontally
  },
  details: {
    padding: 15,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "right",
    color: "#1d3f40",
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "left",
    fontWeight: "bold",
    color: "#1d3f40",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 20,
    textAlign: "right",
    color: "#1d3f40",
  },
  button: {
    width: 250,
    alignSelf: "center",
    backgroundColor: "#1d3f40",
    padding: 10,
    margin: 7,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "gray",
    shadowOpacity: 0.6,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonText: {
    color: "snow",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    alignSelf: "center",
  },
  imageContainer: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: 300,
    overflow: "hidden",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
    resizeMode: "contain",
  },
  resize: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  sctions: {
    alignContent: "center",
    textAlign: "center",
    color: "gray",
    margin: 10,
  },
  video: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});

export default PetDetails;
