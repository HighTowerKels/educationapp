import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, Alert } from 'react-native'

const CongratulationScreen = ({ navigation }) => {
  showAlert = () => Alert.alert('Alert', 'Button pressed ')

  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={{ uri: 'https://img.icons8.com/color/70/000000/facebook-like.png' }}
      />
      <Text style={styles.title}>Congratulation, your order is accepted</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, sed te sumo euismod, doming molestiae consetetur nec ne. Cu quem
        aeterno labores eos
      </Text>
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={showAlert}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: '#5F6D7A',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: '#A9A9A9',
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
export default CongratulationScreen;