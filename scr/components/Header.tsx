import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.locationGroup}>
        <Ionicons name="location-outline" size={20} color="black" />
        <Text>Calgary, AB</Text>
        <Ionicons name="chevron-down-outline" size={20} color="black" />
      </View>
      <Ionicons name="notifications-outline" size={20} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "white",
  },
  locationGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
