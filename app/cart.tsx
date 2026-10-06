import Ionicons from "@expo/vector-icons/build/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="cart" size={27} color="green" />
      <Text style={styles.title}>Your Cart</Text>
      <Text>Your cart is currently empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
