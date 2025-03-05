import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { globalStyles } from "../../Global Styles/Global";
import placeholderImageSource from "../../assets/LOGO.png";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ChooseFromAdd from "./ChooseFromAdd";
import { Video } from "expo-av";
import { getData } from "../Service/dataService";

let images = [];

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [mainPhoneNumber, setMainPhoneNumber] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
  const [contactByCall, setContactByCall] = useState(false);
  const [contactByWhatsApp, setContactByWhatsApp] = useState(false);
  const [price, setPrice] = useState("");
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleSubmit = async () => {
    if (!title) {
      Alert.alert("Validation Error", "Please fill in the title.");
      return;
    }
    if (!description) {
      Alert.alert("Validation Error", "Please fill in the description.");
      return;
    }
    if (!shortDescription) {
      Alert.alert("Validation Error", "Please fill in the short description.");
      return;
    }
    if (!price) {
      Alert.alert("Validation Error", "Please fill in the price.");
      return;
    }
    if (!selectedCategory) {
      Alert.alert("Validation Error", "Please select a category.");
      return;
    }

    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("shortDescription", shortDescription);
    formData.append("price", price);
    formData.append("phone", mainPhoneNumber);
    formData.append("secondaryPhone", secondaryPhoneNumber);
    formData.append("contactByCall", contactByCall ? "true" : "false");
    formData.append("contactByWhatsApp", contactByWhatsApp ? "true" : "false");
    console.log(typeof selectedCategory);
    // formData.append("category", selectedCategory);
    formData.append("category", JSON.stringify(selectedCategory));
    // formData.append("subcategories", JSON.stringify(selectedSubcategories));
    // formData.append("categoryId", selectedCategory.id);
    // formData.append("categoryName", selectedCategory.name);
    // formData.append("subCategory0Id", selectedSubcategories.id);
    // formData.append("subCategory0Name", selectedSubcategories.name);
    console.log("Test Sub Categories", selectedSubcategories);
    counter = 0;
    selectedSubcategories.forEach((sub) => {
      console.log(sub._id);
      console.log(sub.name);
      formData.append(`subCategory${counter}Id`, sub._id);
      formData.append(`subCategory${counter}Name`, sub.name);
      counter++;
    });

    // For images
    images.forEach((image, index) => {
      formData.append("picture", {
        uri: Platform.OS === "ios" ? image.replace("file://", "") : image,
        // uri: image,
        type: "image/jpeg",
        name: `image${index}`,
      });
    });

    // For video
    if (video) {
      formData.append("video", {
        uri: Platform.OS === "ios" ? video.replace("file://", "") : video,
        // uri: video,
        type: "video/mp4",
        name: "video.mp4",
      });
    }
    console.log(formData);

    try {
      const response = await fetch("http://192.168.171.103:3000/uploadsApp", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to submit the form: ${errorText}`);
      }

      Alert.alert("Success", "Product added successfully!");
      // Clear all fields
      setTitle("");
      setDescription("");
      setShortDescription("");
      setPrice("");
      setMainPhoneNumber("");
      setSecondaryPhoneNumber("");
      setContactByCall(false);
      setContactByWhatsApp(false);
      setImages([]);
      setVideo(null);
      setSelectedCategory("");
      setSelectedSubcategories([]);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const selectImage = async () => {
    if (images.length >= 4) {
      Alert.alert("Limit reached", "You can only upload up to 4 images.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const compressedResults = await Promise.all(
        result.assets.map(async (image) => {
          const compressedImage = await ImageManipulator.manipulateAsync(
            image.uri,
            [], // No resizing, only compression
            { compress: 0.1, format: ImageManipulator.SaveFormat.JPEG }
          );
          return compressedImage.uri;
        })
      );

      setImages((prevImages) => [...prevImages, ...compressedResults]);
    }
  };

  const handleRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const selectVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 0.1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={[globalStyles.h1, { textAlign: "center" }]}>
        إضافة إعلان
      </Text>

      <View style={styles.sectionContainer}>
        <Text
          style={[globalStyles.h1, { textAlign: "center", color: "#1d3f40" }]}
        >
          اختر التصنيف
        </Text>
        {/* Categories gos here  */}
        <ChooseFromAdd
          onCategoryChange={setSelectedCategory}
          onSubcategoriesChange={setSelectedSubcategories}
        />
      </View>

      <Text style={[globalStyles.h1, { textAlign: "center" }]}>العنوان</Text>
      <TextInput
        placeholder="للبيع عنز مطفل"
        placeholderTextColor="black"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <Text style={[globalStyles.h1, { textAlign: "center" }]}>
        الوصف الكامل
      </Text>
      <TextInput
        placeholder="الوصف الكامل"
        placeholderTextColor="black"
        value={description}
        onChangeText={setDescription}
        multiline
        style={[styles.input, { height: 100 }]}
      />
      <Text style={[globalStyles.h1, { textAlign: "center" }]}>
        الوصف المختصر
      </Text>
      <TextInput
        placeholder="الوصف المختصر"
        placeholderTextColor="black"
        value={shortDescription}
        onChangeText={setShortDescription}
        multiline
        style={[styles.input, { height: 100 }]}
      />

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={[globalStyles.h1, { textAlign: "center" }]}>
            رقم التواصل
          </Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              placeholder="رقم التواصل"
              keyboardType="numeric"
              placeholderTextColor="black"
              value={mainPhoneNumber}
              onChangeText={setMainPhoneNumber}
              style={styles.input}
            />
            <BouncyCheckbox
              isChecked={selectedContactIndex === 1}
              onPress={() => setSelectedContactIndex(1)}
              size={25}
              fillColor="#1d3f40"
              unfillColor="#1d3f40"
              iconStyle={{ borderColor: "#1d3f40", borderWidth: 2 }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[globalStyles.h1, { textAlign: "center" }]}>
            رقم اخر
          </Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              placeholder="رقم اخر"
              keyboardType="numeric"
              placeholderTextColor="black"
              value={secondaryPhoneNumber}
              onChangeText={setSecondaryPhoneNumber}
              style={styles.input}
            />
            <BouncyCheckbox
              isChecked={selectedContactIndex === 0}
              onPress={() => setSelectedContactIndex(0)}
              size={25}
              fillColor="#1d3f40"
              unfillColor="#1d3f40"
              iconStyle={{ borderColor: "#1d3f40", borderWidth: 2 }}
            />
          </View>
        </View>
      </View>

      <View style={[styles.container, { alignItems: "center" }]}>
        <Text style={[globalStyles.h1, { textAlign: "center" }]}>
          الطريقة المفضلة للتواصل
        </Text>
        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={contactByCall}
              onValueChange={() => setContactByCall(!contactByCall)}
            />
            <Text style={globalStyles.h5}> التواصل عبر الاتصال</Text>
          </View>
          <View style={[styles.switchRow, { marginLeft: 20 }]}>
            <Switch
              value={contactByWhatsApp}
              onValueChange={() => setContactByWhatsApp(!contactByWhatsApp)}
            />
            <Text style={globalStyles.h5}> التواصل عبر WhatsApp</Text>
          </View>
        </View>
      </View>

      <Text style={[globalStyles.h1, { textAlign: "center" }]}>السعر</Text>
      <TextInput
        placeholder="السعر (KD)"
        placeholderTextColor="black"
        value={price}
        onChangeText={(text) => {
          const numericText = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          setPrice(numericText);
        }}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={[globalStyles.h1, { textAlign: "center" }]}>
        اختيار الصور او الفيديو
      </Text>
      <TouchableOpacity style={globalStyles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>اختيار الصور (يمكن اختيار 4 فقط)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={selectVideo}>
        <Text style={styles.buttonText}>اختيار فيديو</Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <View style={styles.imagePreviewContainer}>
          {images.map((uri, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri }} style={styles.imagePreview} />
              <TouchableOpacity
                onPress={() => handleRemove(index)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>حذف</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {video && (
        <View style={styles.videoPreviewContainer}>
          <Video
            source={{ uri: video }}
            style={styles.videoPreview}
            useNativeControls
            resizeMode="contain" // Optionally add this for better video fitting
          />
        </View>
      )}

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>إرسال</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "48%",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderColor: "#1d3f40",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  imagePreviewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    margin: 5,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 50,
    padding: 5,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  videoPreviewContainer: {
    marginVertical: 10,
  },
  videoPreview: {
    width: "100%",
    height: 200,
  },
  switchContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default AddProduct;
