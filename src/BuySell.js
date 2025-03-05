import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  I18nManager,
  FlatList,
} from 'react-native';
import logoBack from '../assets/back.jpg';
import {useNavigation} from '@react-navigation/native';

I18nManager.forceRTL(true);
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

const cardData = [
  {title: 'شراء', screen: 'Buy'},
  {title: 'بيع', screen: 'Sell'},
];

const BuySell = () => {
  const navigation = useNavigation();

  const renderItems = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}>
      <ImageBackground
        blurRadius={5}
        source={logoBack}
        style={styles.backImage}>
        <View style={styles.blurView}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heroAdContainerTop}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1496378856/photo/showing-smartphone-during-conference.jpg?s=2048x2048&w=is&k=20&c=B0o9LRYbzaR5KrkbSFylYJIjwbtg2rLV8biOWSjDqcc=',
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
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1496378856/photo/showing-smartphone-during-conference.jpg?s=2048x2048&w=is&k=20&c=B0o9LRYbzaR5KrkbSFylYJIjwbtg2rLV8biOWSjDqcc=',
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
    justifyContent: 'space-between',
  },
  cardsContainer: {
    padding: 10,
  },
  card: {
    height: '50%',
    width: '50%',
    aspectRatio: 1.4,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1d3f40',
    textAlign: 'center',
  },
  backImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  blurView: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  heroAdContainer: {
    height: 250,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroAdContainerTop: {
    height: 150,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroAdImage: {
    width: '100%',
    height: 250,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'contain',
  },
  heroAdImageTop: {
    height: 150,
    width: '100%',
    marginTop: 0,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(29, 63, 64, 0.5)',
  },
  adText: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BuySell;
