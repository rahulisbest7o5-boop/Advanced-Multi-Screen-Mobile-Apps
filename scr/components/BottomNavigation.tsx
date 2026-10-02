
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BottomNavigation() {
  return (
    <View style={styles.navigation}>
      <Ionicons name="home-outline" size={24} color="black" />
      <Ionicons name="map-outline" size={24} color="black" />
      <Ionicons name="search-outline" size={24} color="black" />
      <Ionicons name="cart-outline" size={24} color="black" />
      <Ionicons name="person-outline" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    height: 75,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});