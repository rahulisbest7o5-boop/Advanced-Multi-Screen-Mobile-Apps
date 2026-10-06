import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  "Breakfast",
  "Coffee",
  "Chicken",
  "Pizza",
  "Sushi",
  "Grocery",
  "Thai",
  "Sweets",
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Search</Text>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={22} color="#555" />

          <TextInput
            style={styles.input}
            placeholder="Search food, restaurants..."
            placeholderTextColor="#777"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <Text style={styles.sectionTitle}>Popular categories</Text>

        {categories.map((category) => (
          <View key={category} style={styles.category}>
            <Ionicons name="restaurant-outline" size={22} color="black" />

            <Text style={styles.categoryText}>{category}</Text>

            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#777"
              style={styles.arrow}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  categoryText: {
    fontSize: 16,
    marginLeft: 15,
  },
  arrow: {
    marginLeft: "auto",
  },
});
