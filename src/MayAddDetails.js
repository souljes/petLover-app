import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from '../Global Styles/Global';
import {ScrollView} from 'react-native-gesture-handler';

function MayAddDetails({route}) {
  const {pet} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: pet.image}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{pet.name}</Text>
          <Text style={styles.description}>{pet.description}</Text>
          <Text style={styles.price}>{`${pet.price} دك`}</Text>
          <View style={styles.phoneContainer}>
            <Text style={styles.phoneLabel}>رقم الاعلان</Text>
            <Text style={styles.phoneValue}>{pet.phone}</Text>
          </View>
        </View>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>تم البيع</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>تعديل</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>الغاء الاعلان</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2a595b',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'gray',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#1d3f40',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneLabel: {
    marginRight: 5,
    color: '#1d3f40',
  },
  phoneValue: {
    fontWeight: 'bold',
    color: '#1d3f40',
  },
});

export default MayAddDetails;
