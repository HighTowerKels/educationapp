import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { theme } from '../core/theme';

const TakeTestScreen = ({navigation}) => {
    const handleDashboard = () => {
        navigation.navigate('Dashboard');
    };
    const handleGoToCBT = () => {
        // Dummy data for the alert
        const testName = "English Test";
        const testTime = "30 minutes";
        const creditUnit = "3";

        Alert.alert(
            testName,
            `Time: ${testTime}\nCredit Unit: ${creditUnit}`,
            [
                { text: 'Start', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    };

    const subjects = [
        { name: 'English' },
        { name: 'Maths' },
        { name: 'Biology' },
        { name: 'Chemistry' },
        { name: 'Physics' },
        { name: 'Geography' },
    ];

    return (
        <View style={styles.container}>
            <Image resizeMode="repeat" source={require('../assets/background_dot.png')} style={styles.backgroundImage} />
            <TouchableOpacity onPress={handleDashboard} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Take Test</Text>
            </View>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                <View style={styles.informationContainer}>
                    <Text style={styles.name}>Hello, John Doe</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {subjects.map((subject, index) => (
                    <TouchableOpacity key={index} style={styles.button}>
                        <Text style={styles.buttonText}>{subject.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.buttons} onPress={handleGoToCBT}>
                <Text style={styles.buttonTexts}>Go to CBT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.secondary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        width: 400,
    },
    buttonText: {
        color: theme.colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: theme.colors.primary,
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 29,
        width: 400,
        top: -3,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    informationContainer: {
        marginLeft: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 10,
        padding: 10,
        borderRadius: 5,
    },
    headerContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        top: -190,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333', 
        right: 10,
    },
    buttonContainer: {
        top: 10,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'cover',
    },
    buttons: {
        backgroundColor:theme.colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 130,
        borderRadius: 10,
        marginBottom: 20,
        width: 400,
    },
    buttonTexts: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center"
    },
});

export default TakeTestScreen;
