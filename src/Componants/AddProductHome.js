import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {globalStyles} from '../../Global Styles/Global';
import LOGO from '../../assets/LOGO.png';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const images = [
  'https://st.depositphotos.com/1594920/2452/i/600/depositphotos_24523447-stock-photo-group-of-pets-dog-cat.jpg',
  'https://st.depositphotos.com/1594920/2452/i/600/depositphotos_24523447-stock-photo-group-of-pets-dog-cat.jpg',
  'https://st.depositphotos.com/1594920/2452/i/600/depositphotos_24523447-stock-photo-group-of-pets-dog-cat.jpg',
  'https://st.depositphotos.com/1594920/2452/i/600/depositphotos_24523447-stock-photo-group-of-pets-dog-cat.jpg',
];

const SectionCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const AddProductHome = () => {
  const [section, setSection] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mainPhoneNumber, setMainPhoneNumber] = useState('');
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState('');
  const [contactByCall, setContactByCall] = useState(false);
  const [contactByWhatsApp, setContactByWhatsApp] = useState(false);
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted!');
  };

  //   const sectionsData = [
  //     { title: "قسم 1", image: LOGO },
  //     { title: "قسم 2", image: LOGO },
  //     { title: "قسم 3", image: LOGO },
  //     { title: "قسم 4", image: LOGO },
  //   ];

  //   const renderSectionCard = ({ item }) => (
  //     <SectionCard
  //       // title={item.title}
  //       image={item.image}
  //       onPress={() => setSection(item.title)}
  //     />
  //   );

  const selectImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (!response.didCancel && !response.error && response.assets) {
        const uri = response.assets[0].uri;
        // Handle the selected image URI
        console.log(uri);
      }
    });
  };

  const selectVideo = () => {
    ImagePicker.launchImageLibrary({mediaType: 'video'}, response => {
      if (!response.didCancel && !response.error && response.assets) {
        const uri = response.assets[0].uri;
        // Handle the selected video URI
        console.log(uri);
      }
    });
  };

  const [selectedIndex, setIndex] = React.useState(0);
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={[globalStyles.h1, {textAlign: 'center'}]}>إضافة إعلان</Text>
      {/* <View style={styles.sectionContainer}>
        <Text style={[globalStyles.h1, { textAlign: "center" }]}>
          قسم القطط - شيرازي
        </Text>
        <FlatList
          data={sectionsData}
          renderItem={renderSectionCard}
          keyExtractor={(item) => item.title}
          horizontal
        />
      </View> */}
      <Text style={[globalStyles.h1, {textAlign: 'center'}]}>العنوان</Text>
      <TextInput
        placeholder="للبيع عنز مطفل"
        placeholderTextColor="black"
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={[globalStyles.h1, {textAlign: 'center'}]}>الوصف الكامل</Text>
      <TextInput
        placeholder="الوصف الكامل"
        placeholderTextColor="black"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
        style={[styles.input, {height: 100}]}
      />

      {/* <View style={styles.row}>
        <View style={styles.flex}>
          <Text style={[globalStyles.h1, { textAlign: "center" }]}>
            رقم التواصل
          </Text>
          <TextInput
            placeholder="رقم التواصل"
            placeholderTextColor="black"
            value={mainPhoneNumber}
            onChangeText={(text) => setMainPhoneNumber(text)}
            style={styles.input}
          />
        </View>
        <Text>h</Text>
        <View style={styles.flex}>
          <Text style={[globalStyles.h1, { textAlign: "center" }]}>
            رقم اخر
          </Text>
          <TextInput
            placeholder="رقم اخر"
            placeholderTextColor="black"
            value={secondaryPhoneNumber}
            onChangeText={(text) => setSecondaryPhoneNumber(text)}
            style={styles.input}
          />
        </View>
        <Text>h</Text>
      </View> */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={[globalStyles.h1, {textAlign: 'center'}]}>
            رقم التواصل
          </Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              placeholder="رقم التواصل"
              placeholderTextColor="black"
              value={mainPhoneNumber}
              onChangeText={text => setMainPhoneNumber(text)}
              style={styles.input}
            />
            <BouncyCheckbox
              isChecked={selectedContactIndex === 1}
              onPress={() => setSelectedContactIndex(1)}
              size={25}
              fillColor="#1d3f40"
              unfillColor="#1d3f40"
              iconStyle={{borderColor: '#1d3f40', borderWidth: 2}}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[globalStyles.h1, {textAlign: 'center'}]}>رقم اخر</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              placeholder="رقم اخر"
              keyboardType="numeric"
              placeholderTextColor="black"
              value={secondaryPhoneNumber}
              onChangeText={text => setSecondaryPhoneNumber(text)}
              style={styles.input}
            />
            <BouncyCheckbox
              isChecked={selectedContactIndex === 0}
              onPress={() => setSelectedContactIndex(0)}
              size={25}
              fillColor="#1d3f40"
              unfillColor="#1d3f40"
              iconStyle={{borderColor: '#1d3f40', borderWidth: 2}}
            />
          </View>
        </View>
      </View>

      <View style={[styles.container, {alignItems: 'center'}]}>
        <Text style={[globalStyles.h1, {textAlign: 'center'}]}>
          الطريقة المفظلة للتواصل
        </Text>
        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={contactByCall}
              onValueChange={() => setContactByCall(!contactByCall)}
            />
            <Text style={globalStyles.h5}> التواصل عبر الاتصال</Text>
          </View>

          <View style={[styles.switchRow, {marginLeft: 20}]}>
            <Switch
              value={contactByWhatsApp}
              onValueChange={() => setContactByWhatsApp(!contactByWhatsApp)}
            />
            <Text style={globalStyles.h5}> التواصل عبر WhatsApp</Text>
          </View>
        </View>
      </View>
      <Text style={[globalStyles.h1, {textAlign: 'center'}]}>السعر</Text>
      <TextInput
        placeholder="السعر (KD)"
        placeholderTextColor="black"
        value={price}
        onChangeText={text => {
          if (typeof text === 'string') {
            const numericText = text.replace(/[^0-9]/g, ''); // Remove non-English numeric characters
            setPrice(numericText);
          }
        }}
        keyboardType="numeric" // Set the keyboard type to numeric
        style={styles.input}
      />
      <Text style={[globalStyles.h1, {textAlign: 'center'}]}>
        اختيار الصور او الفيديو
      </Text>
      <TouchableOpacity style={globalStyles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>اختيار الصور (يمكن اختيار 4 صور)</Text>
      </TouchableOpacity>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{uri}} style={styles.image} />
            <TouchableOpacity style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={globalStyles.button} onPress={selectVideo}>
        <Text style={styles.buttonText}>اختيار الفيديو (اختياري)</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}>
        {/* Display only the first image */}
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: images.length > 0 ? images[0] : ''}}
            style={styles.image}
          />
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleSubmit} style={globalStyles.button}>
        <Text style={styles.buttonText}>إضافة المنتج</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    width: 200,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 12,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  inputWithIcon: {
    flexDirection: 'row-reverse',
    // alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: '#1d3f40',
    borderWidth: 1,
    padding: 10,
    marginRight: 0,
    borderRadius: 5,
    alignSelf: 'center',
    textAlign: 'center',
    height: 50,
    width: '60%',
    color: '#1d3f40',

    // borderColor: "gray",
    // borderRadius: 10,
    // borderWidth: 2,
    // marginTop: 5,
    // margin: 2,
    // height: 50,
    // width: 200,
    // alignSelf: "center",
    // textAlign: "center",
    // padding: 0,
  },
  icon: {
    padding: 0,
    margin: 0,
  },
});

export default AddProductHome;
