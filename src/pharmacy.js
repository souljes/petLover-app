import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native"
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/FontAwesome"
import Icon from "react-native-vector-icons/Ionicons"
import {ScrollView} from "react-native-gesture-handler"

const pharmacy = [
  {
    id: "1",
    name: "صيدلية بيطرية 1",
    shortDescription: "متخصصة في الأدوية والعلاجات البيطرية.",
    phone: "12345678",
    whatsapp: "12345678",
    image:
      "https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t",
    address: "شارع الملك عبدالله، الرياض، المملكة العربية السعودية",
    openingHours: "من السبت إلى الخميس، 9 صباحاً - 9 مساءً",
  },
  {
    id: "2",
    name: "صيدلية بيطرية 2",
    shortDescription: "تقدم خدمات التطعيم والرعاية الوقائية.",
    phone: "87654321",
    whatsapp: "12345678",
    image:
      "https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t",
    address: "شارع التحلية، جدة، المملكة العربية السعودية",
    openingHours: "من السبت إلى الخميس، 10 صباحاً - 8 مساءً",
  },
  {
    id: "3",
    name: "صيدلية بيطرية 3",
    shortDescription: "متخصصة في الأغذية والمكملات الغذائية للحيوانات.",
    phone: "12348765",
    whatsapp: "12345678",
    image:
      "https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t",
    address: "شارع الملك فهد، الدمام، المملكة العربية السعودية",
    openingHours: "من السبت إلى الخميس، 8 صباحاً - 10 مساءً",
  },
  {
    id: "4",
    name: "صيدلية بيطرية 4",
    shortDescription: "تقدم استشارات بيطرية وخدمات الطوارئ.",
    phone: "87651234",
    whatsapp: "12345678",
    image:
      "https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t",
    address: "شارع الملك عبدالعزيز، الخبر، المملكة العربية السعودية",
    openingHours: "من السبت إلى الخميس، 24 ساعة",
  },
]

const Pharmacy = () => {
  const handlePressPhone = phone => {
    Linking.openURL(`tel:${phone}`).catch(err => {
      Alert.alert("Error", "Unable to make a call. Please try again later.")
    })
  }

  const handlePressWhatsApp = whatsapp => {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=Hello`).catch(
      err => {
        Alert.alert("Error", "Unable to open WhatsApp. Please try again later.")
      },
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        {pharmacy.map(pharmacy => (
          <View key={pharmacy.id} style={styles.cardContainer}>
            <Image style={styles.cardImage} source={{uri: pharmacy.image}} />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{pharmacy.name}</Text>
              <Text
                style={styles.subtitle}
                numberOfLines={3}
                ellipsizeMode="tail">
                {pharmacy.shortDescription}
                {pharmacy.openingHours}
              </Text>
              {/* <Text style={styles.cardPhone}>{`Phone: ${pharmacy.phone}`}</Text> */}
            </View>
            <View
              style={{
                flex: -1,
                justifyContent: "flex-end",
              }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  // gap: 10,
                  top: "0%",
                }}>
                <TouchableOpacity
                  style={{marginRight: 20}}
                  onPress={() => handlePressPhone(pharmacy.phone)}>
                  <Text>
                    <Icon name="phone-portrait-outline" size={30} color="#1d3f40" style={styles.item}/>
                    {/* <FontAwesome
                      style={styles.item}
                      name="phone"
                      size={30}
                      color="red"
                    /> */}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handlePressWhatsApp(pharmacy.whatsapp)}>
                  <Text>
                    <Icon name="logo-whatsapp" size={30} color="#25d366" style={styles.item}/>
                    {/* <FontAwesome
                      style={styles.item}
                      name="whatsapp"
                      size={30}
                      color="orange"
                    /> */}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: "#f0f0f0",
    direction: "rtl",
  },
  image: {
    width: "100vw",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1d3f40",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "black",
    marginBottom: 0,
    textAlign: "center",
  },
  phone: {
    fontSize: 16,
    color: "#1d3f40",
  },
  Box: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "100vw",
    height: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    // width: 50,
    // height: 50,
    // borderRadius: 5,
    // marginHorizontal: 5,
    // marginLeft: 5,
  },
  // Cards
  cardContainer: {
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    height: 160,
    paddingHorizontal: 10,
  },
  detailsContainer: {
    flex: 1,
    gap: 5,
    justifyContent: "start",
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
  cardPhone: {
    fontSize: 14,
    color: "#1d3f40",
    textAlign: "left",
  },
  cardImage: {
    width: 125,
    height: 125,
    borderRadius: 300,
    resizeMode: "cover",
    marginRight: 10,
    // width: 160,
    // height: 160,
    // borderRadius: 10,
    // resizeMode: "cover",
  },
})

export default Pharmacy
