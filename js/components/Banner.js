import React from 'react';

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Image source={require('./assets/logo.png')} style={styles.image} />
    <Text style={styles.title}>React Navigation Practise</Text>
  </View>
);

export default Banner;
const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#708090',
    margin: 8,
  },
});