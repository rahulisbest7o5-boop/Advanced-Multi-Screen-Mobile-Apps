import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Categories from "../../scr/components/Categories";
import Filters from "../../scr/components/Filters";
import Header from "../../scr/components/Header";
import RestaurantSections from "../../scr/components/RestaurantSections";
import Services from "../../scr/components/Services";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Services />
        <Categories />
        <Filters />
        <RestaurantSections />

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.alertButton}
            onPress={() =>
              Alert.alert("Alert", "Alert has been added to the system.")
            }
          >
            <Text style={styles.alertButtonText}>Press Me</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  alertButton: {
    backgroundColor: "#db3939",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  alertButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
