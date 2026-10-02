import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MapScreen() {
  const [search, setSearch] = useState("");

  const showSubway = "subway".includes(search.trim().toLowerCase());

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Map.png")}
        style={styles.map}
        resizeMode="cover"
      >
        <SafeAreaView edges={["top"]} style={styles.topArea}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={22} color="black" />

            <TextInput
              style={styles.searchInput}
              placeholder="Search pickup spots nearby"
              placeholderTextColor="#666"
              value={search}
              onChangeText={setSearch}
              autoCorrect={false}
              returnKeyType="search"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filters}
          >
            <View style={styles.filter}>
              <Ionicons name="walk-outline" size={18} color="black" />
              <Text>Pickup</Text>
              <Ionicons name="chevron-down-outline" size={14} color="black" />
            </View>

            <View style={styles.filter}>
              <Text>Cuisine</Text>
              <Ionicons name="chevron-down-outline" size={14} color="black" />
            </View>

            <View style={styles.filter}>
              <Ionicons name="ribbon-outline" size={18} color="black" />
              <Text>Best overall</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>

      <View style={styles.bottomCard}>
        <Text style={styles.heading}>Pickup spots near you</Text>

        {showSubway ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/images/subway.png")}
                style={styles.restaurantImage}
              />

              <View style={styles.offerBadge}>
                <Ionicons name="pricetag" size={13} color="white" />
                <Text style={styles.offerText}>Buy 1, get 1</Text>
              </View>
            </View>

            <Text style={styles.restaurantName}>Subway</Text>
            <Text style={styles.subtitle}>Sandwiches · Pickup</Text>
          </>
        ) : (
          <Text style={styles.subtitle}>
            No pickup spots match your search.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    flex: 1,
  },
  topArea: {
    paddingHorizontal: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 16,
    marginTop: 12,
    gap: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 15,
    color: "#222",
  },
  filters: {
    gap: 8,
    paddingTop: 12,
    paddingBottom: 10,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 6,
  },
  bottomCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    padding: 18,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },
  imageContainer: {
    position: "relative",
  },
  restaurantImage: {
    width: "100%",
    height: 140,
    borderRadius: 14,
    resizeMode: "cover",
  },
  offerBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E60023",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    gap: 5,
  },
  offerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    marginBottom: 6,
  },
});
