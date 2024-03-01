import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { theme } from '../core/theme';

const AccomplishmentScreen = ({navigation}) => {
    const handleDashboard = () => {
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <Image resizeMode="repeat" source={require('../assets/background_dot.png')} style={styles.backgroundImage} />
            <TouchableOpacity onPress={handleDashboard} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Accomplishments</Text>
            </View>
            <View style={styles.contentContainer}>
                <Image style={styles.accomplishmentImage} source={require('../assets/accomplishment_image.png')} />
                <Text style={styles.accomplishmentText}>Congratulations! You've completed the test successfully.</Text>
                <TouchableOpacity style={styles.button} onPress={handleDashboard}>
                    <Text style={styles.buttonText}>Back to Dashboard</Text>
                </TouchableOpacity>
            </View>
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
        top: -50,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333', 
    },
    contentContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    accomplishmentImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    accomplishmentText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'cover',
    },
});

export default AccomplishmentScreen;
