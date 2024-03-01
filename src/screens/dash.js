import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Header from '../components/Header'

import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
const HistoryScreen = ({ navigation }) => {
    const testData = [
        {
            id: 1,
            testName: 'Math Test',
            date: '2019-03-25 09:12:00',
            score: 85,
            completed: 0,
        },
        {
            id: 2,
            testName: 'Science Test',
            date: '2019-03-25 10:23:00',
            score: 90,
            completed: 0,
        },
        {
          id: 3,
          testName: 'Science Test',
          date: '2019-03-25 10:23:00',
          score: 90,
          completed: 0,
      },
      {
        id: 4,
        testName: 'Math Test',
        date: '2019-03-25 09:12:00',
        score: 85,
        completed: 0,
    },
        // Add more test data as needed
    ];

    const [tests, setTests] = useState(testData);

    const handleTestClick = (test) => {
        Alert.alert('Test Selected', `Test Name: ${test.testName}\nDate: ${test.date}\nScore: ${test.score}`);
    };

    const getCompletedIcon = (test) => {
        return test.completed ? require('../assets/checkmark.png') : require('../assets/delete.png');
    };

    const getDescriptionStyle = (test) => {
        return test.completed ? styles.completedDescription : null;
    };
    const handleGoBack = () => {
      // If there's no previous screen in the stack, navigate to a specific screen
      if (!navigation.canGoBack()) {
          navigation.navigate('Dashboard'); // Navigate to your desired screen
      } else {
          navigation.goBack(); // Otherwise, go back to the previous screen
      }
  };
  const handleDashboard = () => {
    navigation.navigate('Dashboard');
};
    return (
        <Background>
            <View style={styles.container}>
            <TouchableOpacity onPress={handleDashboard} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>  
            <View style={[styles.headerContainer, styles]}>
            <Text style={styles.headerText}>Test History</Text>
        </View> 
                         <FlatList
                    contentContainerStyle={styles.contentContainer}
                    data={tests}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.testItem, { borderColor: item.color }]}
                            onPress={() => handleTestClick(item)}
                        >
                            <Image style={styles.icon} source={getCompletedIcon(item)} />
                            <View style={styles.testInfo}>
                                <Text style={[styles.testName, getDescriptionStyle(item)]}>{item.testName}</Text>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:400,
        backgroundColor: 'transparent', // Changed background color to transparent
    },
    contentContainer: {
        flexGrow: 1, // Make content container flexible
        paddingVertical: 20, // Added padding
        marginTop: 60,
    },
    testItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,

        borderBottomWidth: 1,
        borderColor: '#CED0CE', // Changed border color
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 15,
    },
    testInfo: {
        flex: 1,
    },
    testName: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: '#666666',
        marginTop: 5,
    },
    completedDescription: {
        textDecorationLine: 'line-through',
        fontStyle: 'italic',
        color: '#808080',
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 2,
      padding: 10,
      borderRadius: 5,
  },
  headerContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    top: 24,
},
headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333', // Example text color
},
});

export default HistoryScreen;
