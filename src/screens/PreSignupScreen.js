import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Background from '../components/Background';
import { theme } from '../core/theme';

const PreSignupScreen = ({ navigation }) => {
  const handleOptionPress = () => {
    // Navigate to the sign-up screen when an option is selected
    navigation.navigate('RegisterScreen');
  };

  return (
    <Background>
      <View style={styles.container}>
        <Logo />
        <Header style={styles.headermainText}>Welcome to Afternoonprep</Header>
        <Text style={styles.headerText}>At Afternoonprep, you can get started as a tutor and empower others, or get started as a student and get empowered.</Text>
        <View style={styles.optionsContainer}>
          <View style={styles.row}>
            <Button mode="outlined" style={styles.option} onPress={handleOptionPress}>
              <Text style={styles.optionText}>As a Student</Text>
            </Button>
            <Button mode="outlined" style={styles.option} onPress={handleOptionPress}>
              <Text style={styles.optionText}>As a Tutor</Text>
            </Button>
          </View>
          <View style={styles.row}>
            <Button mode="outlined" style={styles.option} onPress={handleOptionPress}>
              <Text style={styles.optionText}>As a School</Text>
            </Button>
            <Button mode="outlined" style={styles.option} onPress={handleOptionPress}>
              <Text style={styles.optionText}>As a Parent/Guardian</Text>
            </Button>
          </View>
        </View>
        <Text style={styles.loginLink} onPress={() => navigation.navigate('LoginScreen')}>
          Already have an account? Log in
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 20,   // Add vertical padding
  },
  headerText: {
    fontSize: 13,
    marginBottom: 20,
    textAlign: 'center',
  },
  headermainText: {
    fontSize: 32,
    color: theme.colors.primary,
    fontWeight: '900',
    paddingVertical: 10,
    paddingHorizontal: 2,
    textAlign: 'center'
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 40,   // Add vertical padding
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 20, // Adjust marginBottom for space between rows
  },
  option: {
    flex: 1, // Allow buttons to expand to fill available space
    marginHorizontal: 5,
    minWidth: 180, // Set a minimum width for the buttons
    justifyContent: 'center', // Align text content vertically
  },
  optionText: {
    fontSize: 17,
    textAlign: 'center', // Align text content horizontally
  },
  loginLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default PreSignupScreen;
