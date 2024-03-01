
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
const accounts = [
  {
    id: 1,
    name: 'Maths',
    balance: 1000,
    image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 2,
    name: 'English',
    balance: 50,
    image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 3,
    name: 'Chemistry',
    balance: 50,
    image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
  },
  {
    id: 4,
    name: 'Physics',
    balance: 10,
    image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
  },
  {
    id: 5,
    name: 'Biology',
    balance: 30,
    image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
  },
];

const HistoryScreen = ({navigation}) => {
  const handleDashboard = () => {
    navigation.navigate('Dashboard');
};
  return (
    <View style={styles.contain}>
      <TouchableOpacity onPress={handleDashboard} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>  
  <View style={styles.container}>
      
      <Text style={styles.title}>Test History</Text>
      {accounts.map(account => (
  <View key={account.id} style={styles.account}>
    <Image source={{ uri: account.image }} style={styles.accountImage} />
    <View style={styles.accountContent}>
      <Text style={styles.accountName}>{account.name}</Text>
      <Text style={styles.accountBalance}>{account.balance}</Text>
    </View>
    <TouchableOpacity onPress={() => handleDeleteAccount(account.id)} style={styles.deleteButton}>
      <Ionicons name="trash-outline" size={20} color="red" />
    </TouchableOpacity>
  </View>
))}

    </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:90,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  accountImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  accountInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 'auto', // Pushes the account name to the left edge
  },
  accountBalance: {
    fontSize: 14,
    color: '#666',
    marginRight: 12, // Add margin for separation between account name and balance
  },
  deleteButton: {
    marginLeft: 200, // Add margin for separation between balance and delete button
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 2,
    padding: 10,
    borderRadius: 5,
},
});

export default HistoryScreen;