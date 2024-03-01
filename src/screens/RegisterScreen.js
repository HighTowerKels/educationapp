import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { confirmpasswordValidator } from '../helpers/confirmpasswordValidator';
import Background from '../components/Background';
import BackButton from '../components/BackButton'


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement your login logic here
    navigation.navigate('Dashboard');

  };
  const onGoogleSignUpPressed = () => {
    // Handle Google sign up
  };

  const onFacebookSignUpPressed = () => {
    // Handle Facebook sign up
  };


  return (
    <Background>
            <BackButton goBack={navigation.goBack} />

 <View style={styles.container}>
      <ImageBackground  style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
        <Image source={require('../assets/logo_preep.png')} style={styles.logo} />
        </View>
        
        <View style={styles.formContainer}>
        <View style={styles.card}>
            <TextInput
              placeholder="Usernmame"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={styles.input}
              value={confirmpassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Signup</Text>
          </TouchableOpacity>

          <View style={styles.row}>
        <Text>Have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('PreSignupScreen')}>
        <Text style={styles.loginLink} onPress={() => navigation.navigate('LoginScreen')}>
           Log in
        </Text>
        </TouchableOpacity>
      </View>
        </View>
      </ImageBackground>
    </View>
    </Background>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#cf0558',
    top: '8%',
    width:400
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 160,
    padding:6,
    borderRadius:10,
    transform: [{ translateX: -5 }, { translateY: -150 }],
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#B0C4DE'
  },
  loginButton: {
    backgroundColor: '#7B68EE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 8,
    marginBottom: 15,
    color: theme.colors.primary,
  },
  socialText: {
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  socialButtonText: {
    color: theme.colors.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  orText: {
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    textAlign:'center',
    left:'20%'

  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default RegisterScreen;
