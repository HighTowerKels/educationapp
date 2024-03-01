import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Swiper from 'react-native-swiper';

const OnboardingScreen = ({ navigation }) => {
    
  const handleSkip = () => {
    // Navigate to the next screen or any other action
    navigation.navigate('StartScreen');
  };

  const handleNext = () => {
    // Navigate to the next screen or any other action
    console.log('Next button pressed');
  };

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('../assets/home_page_hero-1.webp')} />
          <Text style={styles.text}>Welcome to Onboarding Screen 1</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.images} source={require('../assets/boy.png')} />
          <Text style={styles.text}>Welcome to Onboarding Screen 2</Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.imagey} source={require('../assets/girl.png')} />
          <Text style={styles.text}>Welcome to Onboarding Screen 3</Text>
        </View>
      </Swiper>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  images: {
    width: '80%',
    height: 410,
    resizeMode: 'contain',
    backgroundColor:'#6178F1',
    borderRadius: 29
    
  },
  imagey: {
    width: '80%',
    height: 410,
    resizeMode: 'contain',
    backgroundColor:'#A663FE',
    borderRadius: 29
    
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});

export default OnboardingScreen;
