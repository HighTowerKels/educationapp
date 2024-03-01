import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons

const ClassProfileScreen = ({ navigation }) => {
    const matches = [
        {
            id:1,
            avatar :'https://bootdey.com/img/Content/avatar/avatar2.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:2,
            avatar :'https://bootdey.com/img/Content/avatar/avatar3.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:3,
            avatar :'https://bootdey.com/img/Content/avatar/avatar4.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:4,
            avatar :'https://bootdey.com/img/Content/avatar/avatar5.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:5,
            avatar :'https://bootdey.com/img/Content/avatar/avatar6.png',
            name:'John Doe',
            age:'30',
        }
    ];

    const handleGoBack = () => {
        // If there's no previous screen in the stack, navigate to a specific screen
        if (!navigation.canGoBack()) {
            navigation.navigate('Dashboard'); // Navigate to your desired screen
        } else {
            navigation.goBack(); // Otherwise, go back to the previous screen
        }
    };

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                    <View style={styles.informationContainer}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.label}>80% profile completion</Text>
                        <Text style={styles.label}>Age: 30</Text>
                        <Text style={styles.label}>Pronouns: He/Him</Text>
                        <Text style={styles.label}>Single</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.cardContainer}>
                    {matches.map(({avatar, id, name, age}) => (
                        <View style={styles.sectionCard} key={id}>
                            <Image style={styles.sectionImage} source={{ uri: avatar }} />
                            <View style={styles.sectionInfo}>
                                <Text style={styles.sectionLabel}>{name}</Text>
                                <Text style={styles.sectionLabel}>Age: {age}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            {/* Use TouchableOpacity for back button */}
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
      width:400,
        flex: 1,
        backgroundColor:'#FFF',
        paddingTop: 60, // Increase the space from the top
    },
    header:{
        backgroundColor:'#00BFFF',
        height:200,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:50,
    },
    informationContainer:{
        marginLeft:20,
    },
    name:{
        fontSize:22,
        fontWeight:'bold',
        color:'#ffffff'
    },
    label:{
        fontSize:12,
        color:'#ffffff',
        marginTop:5,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 20, // Add some space between the header and cards
        paddingHorizontal: 16,
    },
    sectionCard: {
        width: '48%', // Two cards per row with a bit of space between
        backgroundColor:'#fff',
        marginBottom: 15,
        borderRadius: 6,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    sectionImage: {
        width: '100%',
        aspectRatio: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    sectionInfo: {
        padding: 10,
    },
    sectionLabel: {
        fontSize: 14,
        marginBottom: 2,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 2,
        padding: 10,
        borderRadius: 5,
    },
});

export default ClassProfileScreen;
