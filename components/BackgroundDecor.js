import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BackgroundDecor = () => (
  <>
    <View style={styles.topCircle} />
    <View style={styles.bottomCircle} />
    <View style={styles.circle1} />
    <View style={styles.circle2} />
    <View style={styles.circle3} />
    <Image source={require('../assets/logo/star.png')} style={styles.star1} />
    <Image source={require('../assets/logo/star.png')} style={styles.star2} />
  </>
);

const styles = StyleSheet.create({
  topCircle: {
    position: 'absolute',
    top: height * 0.02,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    backgroundColor: '#5993D0',
  },
  bottomCircle: {
    position: 'absolute',
    bottom: -height * 0.2,
    width: width * 0.75,
    height: width * 0.75,
    backgroundColor: '#5D93D3',
    borderRadius: width * 0.375,
  },
  circle1: {
    position: 'absolute',
    top: height * 0.335,
    left: width * 0.3,
    width: 10,
    height: 10,
    borderRadius: width * 0.25,
    backgroundColor: '#FFD700',
  },
  circle2: {
    position: 'absolute',
    top: height * 0.25,
    right: width * 0.3,
    width: 10,
    height: 10,
    borderRadius: width * 0.25,
    backgroundColor: '#FFD700',
  },
  circle3: {
    position: 'absolute',
    top: height * 0.36,
    right: width * 0.251,
    width: 10,
    height: 10,
    borderRadius: width * 0.25,
    backgroundColor: '#FFD700',
  },
  star1: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    transform: [{ rotate: '850deg' }],
  },
  star2: {
    position: 'absolute',
    top: height * 0.30,
    right: width * 0.16,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    transform: [{ rotate: '20deg' }],
  },
});

export default BackgroundDecor;
