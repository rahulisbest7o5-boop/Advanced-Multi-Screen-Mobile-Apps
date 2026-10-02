import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Filters() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>

        <Ionicons name="bag-handle-outline" size={20} color="black" />
        <Text>Pickup</Text>

        <Ionicons name="pricetag-outline" size={20} color="black" />
        <Text>Offers</Text>

        <Ionicons name="cash-outline" size={20} color="black" />
        <Text>Delivery fee</Text>

        <Ionicons name="time-outline" size={20} color="black" />
        <Text>Under 30</Text>

        <Ionicons name="chevron-down-outline" size={20} color="black" />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});