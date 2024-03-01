import React from "react";
import { View } from "react-native";
import styles from "./styles";
import MenuButton from "../components/MenuButton/MenuButton";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function DrawerContainer() {
  const navigation = useNavigation(); // Access navigation using useNavigation hook

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require("../assets/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require("../assets/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../assets/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}
