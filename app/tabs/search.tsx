import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
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

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(search.toLowerCase())
  );

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

          {search.length > 0 && (
            <Pressable onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={22} color="#777" />
            </Pressable>
          )}
        </View>

        <Text style={styles.sectionTitle}>
          {search ? "Search results" : "Popular categories"}
        </Text>

        {filteredCategories.map((category) => (
          <Pressable key={category} style={styles.category}>
            <Ionicons
              name="restaurant-outline"
              size={22}
              color="black"
            />

            <Text style={styles.categoryText}>
              {category}
            </Text>

            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#777"
              style={styles.arrow}
            />
          </Pressable>
        ))}

        {filteredCategories.length === 0 && (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search-outline"
              size={45}
              color="#999"
            />

            <Text style={styles.emptyText}>
              No results found
            </Text>
          </View>
        )}

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

  emptyContainer: {
    alignItems: "center",
    marginTop: 60,
  },

  emptyText: {
    fontSize: 16,
    color: "#777",
    marginTop: 10,
  },
});