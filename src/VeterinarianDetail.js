import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

const veterinarianDoctors = [
  {
    id: '1',
    name: 'دكتور بيطري 1',
    shortDescription: 'متخصص في علاج الحيوانات الأليفة.',
    phone: '12345678',
    image:
      'https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t',
  },
  {
    id: '2',
    name: 'دكتور بيطري 2',
    shortDescription: 'متخصص في الجراحة البيطرية.',
    phone: '87654321',
    image:
      'https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t',
  },
  {
    id: '3',
    name: 'دكتور بيطري 3',
    shortDescription: 'متخصص في علاج الحيوانات الأليفة.',
    phone: '12345678',
    image:
      'https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t',
  },
  {
    id: '4',
    name: 'دكتور بيطري 4',
    shortDescription: 'متخصص في الجراحة البيطرية.',
    phone: '87654321',
    image:
      'https://veterinary.rossu.edu/sites/g/files/krcnkv416/files/styles/atge_crop_freeform/public/2020-08/what-is-a-vetMain-banner.jpg?h=d969a192&itok=M20InR_t',
  },
];

const VeterinarianDetail = ({route}) => {
  const {veterinarian} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: veterinarian.image}} />
        <Text style={styles.name}>نبذة عن المستشفى</Text>

        <View style={styles.Box}>
          <Text style={styles.description}>
            {veterinarian.shortDescription}
          </Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <Text>
              <Icon
                name="phone-portrait-outline"
                size={35}
                color="#1d3f40"
                style={styles.item}
              />
              {/* <FontAwesome
                style={styles.item}
                name="phone"
                size={35}
                color="red"
              /> */}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              <Icon
                name="location-outline"
                size={35}
                color="orange"
                style={styles.item}
              />
              {/* <FontAwesome
                style={styles.item}
                name="location-arrow"
                size={35}
                color="orange"
              /> */}
            </Text>
          </TouchableOpacity>
        </View>

        {veterinarianDoctors.map(veterinarian => (
          <View key={veterinarian.id} style={styles.cardContainer}>
            <Image
              style={styles.cardImage}
              source={{uri: veterinarian.image}}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{veterinarian.name}</Text>
              <Text
                style={styles.subtitle}
                numberOfLines={3}
                ellipsizeMode="tail">
                {veterinarian.shortDescription}
              </Text>
              <Text
                style={styles.cardPhone}>{`Phone: ${veterinarian.phone}`}</Text>
            </View>
            <View
              style={{
                flex: -1,
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 10,
                  top: '100%',
                }}>
                <TouchableOpacity>
                  <Text>
                    <Icon
                      name="phone-portrait-outline"
                      size={25}
                      color="#1d3f40"
                      style={styles.item}
                    />
                    {/* <FontAwesome
                      style={styles.item}
                      name="phone"
                      size={25}
                      color="red"
                    /> */}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <Icon
                      name="logo-whatsapp"
                      size={25}
                      color="#25d366"
                      style={styles.item}
                    />
                    {/* <FontAwesome
                      style={styles.item}
                      name="whatsapp"
                      size={25}
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
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: '#f0f0f0',
    direction: 'rtl',
  },
  image: {
    width: '100vw',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d3f40',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'black',
    marginBottom: 0,
    textAlign: 'center',
  },
  phone: {
    fontSize: 16,
    color: '#1d3f40',
  },
  Box: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '100vw',
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    marginLeft: 5,
  },
  // Cards
  cardContainer: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    height: 160,
    paddingHorizontal: 10,
  },
  detailsContainer: {
    flex: 1,
    gap: 5,
    justifyContent: 'start',
  },
  title: {
    color: '#2a595b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'left',
  },
  cardPhone: {
    fontSize: 14,
    color: '#1d3f40',
    textAlign: 'left',
  },
  cardImage: {
    width: 125,
    height: 125,
    borderRadius: 300,
    resizeMode: 'cover',
    marginRight: 10,
    // width: 160,
    // height: 160,
    // borderRadius: 10,
    // resizeMode: "cover",
  },
});

export default VeterinarianDetail;
