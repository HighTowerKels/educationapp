import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import BackButton from '../components/BackButton'

const ProfileScreen = ({navigation}) => {

  const handleEditPress = () => {

  }
  const handleEditProfilePress = () =>{

  }
  const handleChangePasswordPress = () =>{
    
  }
  const handleLogoutPress = () =>{
    
  }
  const handleDeleteAccountPress = () =>{
    
  }
  const handleNotificationsPress = () =>{
    
  }
  const handlePrivacyPress = () =>{
    
  }
  const handleLanguagePress = () =>{
    
  }
  return (
    <ScrollView style={styles.container}>
                  <BackButton goBack={navigation.goBack} />

      <View style={styles.headerContainer}>
      <Image
      style={styles.coverPhoto}
      source={require('../assets/profilebig.png')}
    />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={require('../assets/avatar1.png')}
          />
          <Text style={styles.nameText}>Your Name</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          ullamcorper nisi.
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>1234</Text>
          <Text style={styles.statLabel}>Test Score</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>5678</Text>
          <Text style={styles.statLabel}>Number of award</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>9101</Text>
          <Text style={styles.statLabel}>Number of courses</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
  <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={handleEditProfilePress}>
      <Text style={styles.buttonText}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleChangePasswordPress}>
      <Text style={styles.buttonText}>Change Password</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleDeleteAccountPress}>
      <Text style={styles.buttonText}>Delete Account</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={handleNotificationsPress}>
      <Text style={styles.buttonText}>Notifications</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handlePrivacyPress}>
      <Text style={styles.buttonText}>Privacy Settings</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button} onPress={handleLanguagePress}>
      <Text style={styles.buttonText}>Language</Text>
    </TouchableOpacity>
    {/* Add more buttons as needed */}
  </View>
</View>


    </ScrollView>
  );
};

const styles = {
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    padding: 3
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    top: 60
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    width: 200, // Set a fixed width for the button
    height: 50, // Set a fixed height for the button
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default ProfileScreen;
