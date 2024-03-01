import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image, TextInput } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Image source={require('../assets/logo_preep.png')} style={styles.logo} />

      <Header>Welcome back.</Header>
      <View style={styles.card}>
      <View style={styles.group}>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={styles.input}
          />
          <View style={styles.bar}></View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.highlight}></View>
        </View>
        <View style={styles.group}>
          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            style={styles.input}
          />
          <View style={styles.bar}></View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.highlight}></View>
        </View>
      
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('PreSignupScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  logo:{
    marginBottom: 150,
  },
  card: {
    position: 'absolute',
    top: '50%',
    left: '40%',
       transform: [{ translateX: -150 }, { translateY: -150 }],
    backgroundColor: '#fff',
    width: 400,
    height:483,
    border:1,
    marginTop: 150,
    borderRadius: 20,
    textAlign: 'center',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  // input: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ccc',
  // },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    textAlign:'center',
    left:'20%'

  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  group: {
    position: 'relative',
    marginBottom: 45,
  },
  input: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 350,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#757575',
  },
  label: {
    color: '#999',
    fontSize: 18,
    fontWeight: 'normal',
    position: 'absolute',
    left: 5,
    bottom: 40,
    // transition: '0.2s ease all',
  },
  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 350,
    height: 2,
    backgroundColor: '#5264AE',
  },
  highlight: {
    position: 'absolute',
    height: '60%',
    width: 100,
    top: '25%',
    left: 0,
    opacity: 0.5,
  },
})
