import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme'


const AddCourseScreen = ({ navigation }) => {
    const [courseName, setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseImage, setCourseImage] = useState(null); // State for storing the selected course image

    const handleAddCourse = () => {
        // Implement the logic to add the new course
        // For example, you might call an API or update local state
        console.log('Course Name:', courseName);
        console.log('Course Code:', courseCode);
        console.log('Course Duration:', courseDuration);
        console.log('Course Image:', courseImage);

        // Navigate back to the previous screen or any other screen
        navigation.goBack();
    };

    const handleGoBack = () => {
        if (!navigation.canGoBack()) {
            navigation.navigate('Dashboard');
        } else {
            navigation.goBack();
        }
    };

    // Function to handle image selection
    const handleChooseImage = () => {
        // Implement image selection logic here
        // For example, you can use a library like React Native Image Picker
    };

    return (
        <Background>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity> 
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Add New Course</Text>
                </View>
                <Text style={styles.label}>Course Name:</Text>
                <Input
                    value={courseName}
                    onChangeText={setCourseName}
                    placeholder="Enter course name"
                    inputStyle={styles.input}
                />
                <Text style={styles.label}>Course Code:</Text>
                <Input
                    value={courseCode}
                    onChangeText={setCourseCode}
                    placeholder="Enter course code"
                    inputStyle={styles.input}
                />
                <Text style={styles.label}>Course Duration:</Text>
                <Input
                    value={courseDuration}
                    onChangeText={setCourseDuration}
                    placeholder="Enter course duration"
                    inputStyle={styles.input}
                />
                <TouchableOpacity style={styles.chooseImageButton} onPress={handleChooseImage}>
                    <Text style={styles.chooseImageText}>Choose Course Image</Text>
                </TouchableOpacity>
                {courseImage && (
                    <Image source={{ uri: courseImage }} style={styles.courseImage} />
                )}
                <Button
                    title="Add Course"
                    buttonStyle={styles.addButton}
                    titleStyle={styles.buttonText}
                    onPress={handleAddCourse}
                />
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        top: 100,
        width: 400,
        backgroundColor: 'transparent',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    addButton: {
        backgroundColor:theme.colors.primary,

        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 1,
        padding: 10,
        borderRadius: 5,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 80,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333', 
    },
    chooseImageButton: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    chooseImageText: {
        fontSize: 16,
        color: 'black',
    },
    courseImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
});

export default AddCourseScreen;
