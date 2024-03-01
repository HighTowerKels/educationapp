import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
// import { PricingScreen } from '.';
import BackButton from '../components/BackButton'
import Background from '../components/Background';
import { Ionicons } from '@expo/vector-icons'; 
import { theme } from '../core/theme'

const items = [
  {
    id: 1,
    name: 'Apples',
    price: 0.99,
    image: 'https://www.bootdey.com/image/280x280/FF00FF/000000',
  },
  {
    id: 2,
    name: 'Bananas',
    price: 0.79,
    image: 'https://www.bootdey.com/image/280x280/00BFFF/000000',
  },
  {
    id: 3,
    name: 'Bread',
    price: 2.99,
    image: 'https://www.bootdey.com/image/280x280/20B2AA/000000',
  },
  {
    id: 4,
    name: 'fufu',
    price: 2.99,
    image: 'https://www.bootdey.com/image/280x280/20B2AA/000000',
  },
]

const PricingScreen = ({ navigation }) => {
    // const handleGoBack = () => {
    //     // If there's no previous screen in the stack, navigate to a specific screen
    //     if (!navigation.canGoBack()) {
    //         navigation.navigate('Dashboard'); // Navigate to your desired screen
    //     } else {
    //         navigation.goBack(); // Otherwise, go back to the previous screen
    //     }
    // };
    const handleDashboard = () => {
        navigation.navigate('Dashboard');
    }
    const handleCheckout = () => {
        navigation.navigate('Congratulation')
    }
  return (
 
    
    <View style={styles.container} showsVerticalScrollIndicator={false}>
     <Image resizeMode="repeat" source={require('../assets/background_dot.png')} style={styles.backgroundImage} />
     <TouchableOpacity onPress={handleDashboard} style={styles.backButton}>
             <Ionicons name="arrow-back" size={24} color="black" />
         </TouchableOpacity>
     <View style={[styles.headerContainer, styles]}>
         <Text style={styles.headerText}>Pricing Plan </Text>
     </View>
     <View style={styles.header}>
                    <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                    <View style={styles.informationContainer}>
                        <Text style={styles.name}>Hello, John Doe</Text>

                    </View>
                </View>
   <Text style={styles.title}></Text>
   <FlatList
     data={items}
     renderItem={({ item }) => (
       <View style={styles.card}>
         <View style={styles.item}>
           <Image source={{ uri: item.image }} style={styles.itemImage} />
           <View style={styles.itemContent}>
             <Text style={styles.itemName}>{item.name}</Text>
             <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
             <View style={{ marginTop: 20 }}>
           <Text>Feature 1</Text>
           <Text>Feature 2</Text>
           <Text>Feature 3</Text>
         </View>
           </View>
         </View>
         <View style={styles.buttons}>
           <TouchableOpacity   onPress={handleCheckout} style={styles.button}>
             <Text style={styles.buttonText}>Add to Cart</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={handleCheckout} style={styles.button}>
             <Text style={styles.buttonText}>Add to Wishlist</Text>
           </TouchableOpacity>
         </View>
       </View>
     )}
     keyExtractor={item => item.id}
   />
 </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    padding:0,
    flex: 1,
    width:390,
    backgroundColor: 'transparent',
    marginHorizontal: 5
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    color: '#fff',
    marginHorizontal:20,
  },
  card: {
    marginHorizontal:5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
    width:1000,
    height:220
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#999',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor:theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header:{
    backgroundColor:theme.colors.primary,
    height:150,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:16,
    borderRadius:29,
    width:400,
    top: 80
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
  top:60 ,
},
headerText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#333', 
  right:10
},
})

export default PricingScreen;
