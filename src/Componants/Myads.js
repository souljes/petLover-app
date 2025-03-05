import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import logo from '../../assets/back.jpg';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const items = [
  {
    id: '1',
    name: 'حيوان اليف 1',
    shortDescription: 'أي حيوان يُربيه الإنسان بغرض الرفقة والمتعة',
    description:
      'أي حيوان يُربيه الإنسان بغرض الرفقة والمتعة، وغالبًا ما تكون هذه الحيوانات من الطيور أو الكلاب أو القطط أو الخيول',
    price: '25.000',
    phone: '23546578',
    image:
      'https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=2048x2048&w=is&k=20&c=XVTY2T1Na9NNQ7hj06jYZGURaUd4NjvJPjpxrpXq9C8=',
  },
  {
    id: '2',
    name: 'حيوان اليف 2',
    shortDescription: 'أي حيوان يُربيه الإنسان بغرض الرفقة والمتعة',
    description:
      'أي حيوان يُربيه الإنسان بغرض الرفقة والمتعة، وغالبًا ما تكون هذه الحيوانات من الطيور أو الكلاب أو القطط أو الخيول',
    price: '30.000',
    phone: '23546578',
    image:
      'https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=2048x2048&w=is&k=20&c=XVTY2T1Na9NNQ7hj06jYZGURaUd4NjvJPjpxrpXq9C8=',
  },
  {
    id: '3',
    name: 'حيوان اليف 3',
    shortDescription: 'أي حيوان يُربيه الإنسان بغرض الرفقة والمتعة',
    description:
      'أي حيوان يُربيه الإنسان بغرض الرفقة والمتعة، وغالبًا ما تكون هذه الحيوانات من الطيور أو الكلاب أو القطط أو الخيول',
    price: '40.000',
    phone: '23546578',
    image:
      'https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=2048x2048&w=is&k=20&c=XVTY2T1Na9NNQ7hj06jYZGURaUd4NjvJPjpxrpXq9C8=',
  },
];

function Myads() {
  const navigation = useNavigation(); // Initialize navigation object
  const handlePress = item => {
    if (item.isAd) {
      console.log('Ad clicked', item);
      return;
    }
    navigation.navigate('MayAddDetails', {pet: item}); // Navigate to MayAddDetails screen with pet details
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.cardContainer}
            onPress={() => handlePress(item)}>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text
                style={styles.subtitle}
                numberOfLines={3}
                ellipsizeMode="tail">
                {item.shortDescription}
              </Text>
              <Text style={styles.price}>{`${item.price} دك`}</Text>
              <View style={styles.phoneContainer}>
                {/* <Text style={styles.phoneLabel}>رقم الاعلان:</Text> */}
                <Text style={styles.phoneValue}>{item.id}</Text>
              </View>
            </View>
            <Image style={styles.image} source={{uri: item.image}} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    elevation: 10,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    height: 160,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  title: {
    color: '#2a595b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    color: '#1d3f40',
    fontSize: 15,
    color: 'gray',
    textAlign: 'left',
  },
  price: {
    color: '#2a595b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    alignItems: 'right',
    backgroundColor: 'transparent',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  adContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    aspectRatio: 849 / 768,
    marginVertical: 10,
    borderRadius: 0,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(29, 63, 64, 0.5)',
  },
  adImage: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    position: 'absolute',
    resizeMode: 'contain',
  },
  adText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resize: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  phoneLabel: {
    color: '#2a595b',
  },
  phoneValue: {
    color: 'gray',
    textAlign: 'left',
  },
});
export default Myads;
