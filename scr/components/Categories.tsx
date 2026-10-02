
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const categories = [
  { name: "Breakfast", icon: "cafe-outline" },
  { name: "Coffee", icon: "cafe" },
  { name: "Chicken", icon: "restaurant-outline" },
  { name: "Pizza", icon: "pizza-outline" },
  { name: "Great Value", icon: "pricetag-outline" },
  { name: "Sushi", icon: "fish-outline" },
  { name: "Grocery", icon: "basket-outline" },
  { name: "Thai", icon: "restaurant-outline" },
  { name: "Sweets", icon: "ice-cream-outline" },
] as const;

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>
        {categories.map((category) => (
          <View key={category.name} style={styles.item}>
            <Ionicons name={category.icon} size={28} color="black" />
            <Text style={styles.text}>{category.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  item: {
    alignItems: "center",
    marginRight: 20,
    gap: 6,
  },
  text: {
    paddingVertical: 10,
    fontSize: 16,
  },
});