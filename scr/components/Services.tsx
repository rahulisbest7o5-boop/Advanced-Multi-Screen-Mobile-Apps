
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Services() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.item}>
        <Text style={styles.text}>All</Text>
        <Ionicons name="bag" size={28} color="black" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Rides</Text>
        <Ionicons name="car" size={28} color="black" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Grocery</Text>
        <Ionicons name="cart" size={28} color="black" />
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Convenience</Text>
        <Ionicons name="storefront" size={28} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  text: { fontSize: 18 },
});