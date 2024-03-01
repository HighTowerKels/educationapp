import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BackButton from '../components/BackButton'
import Background from '../components/Background';
import { Ionicons } from '@expo/vector-icons'; 
import { theme } from '../core/theme'

const TestPreparationScreen = ({navigation}) => {
    const handleDashboard = () => {
        navigation.navigate('Dashboard');
    }
    const gotoTest = () => {
        navigation.navigate('TakeTest')
    }
    return (
        <View style={styles.container}>
            <Image resizeMode="repeat" source={require('../assets/background_dot.png')} style={styles.backgroundImage} />
     <TouchableOpacity onPress={handleDashboard} style={styles.backButton}>
             <Ionicons name="arrow-back" size={24} color="black" />
         </TouchableOpacity>
     <View style={[styles.headerContainer, styles]}>
         <Text style={styles.headerText}>Take Test </Text>
     </View>
             <View style={styles.header}>
                    <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                    <View style={styles.informationContainer}>
                        <Text style={styles.name}>Hello, John Doe</Text>

                    </View>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                <Text onPress={gotoTest} style={styles.buttonText}>Start Test</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Test how prepared you are</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Review Material</Text>
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
    button: {
        backgroundColor:theme.colors.secondary,
        paddingVertical: 15,
        paddingHorizontal: 130,
        borderRadius: 10,
        marginBottom: 20,
        width: 400,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        
    },
    header:{
        backgroundColor:theme.colors.primary,
        height:150,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        borderRadius:29,
        width:400,
        top: -180
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
    backButton: {
        position: 'absolute',
        top: 50,
        left:10,
        padding: 10,
        borderRadius: 5,
    },
    headerContainer: {
      alignItems: 'center', 
      justifyContent: 'center', 
      top:-210 ,
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333', 
      right:10
    },
    buttonContainer:{
        top:-150
    }
});

export default TestPreparationScreen;
