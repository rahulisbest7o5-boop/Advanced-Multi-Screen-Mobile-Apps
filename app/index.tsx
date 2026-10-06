import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../scr/components/Categories";
import Filters from "../scr/components/Filters";
import Header from "../scr/components/Header";
import RestaurantSections from "../scr/components/RestaurantSections";
import Services from "../scr/components/Services";

export default function Index() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
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
            style={({ pressed }) => [
              styles.alertButton,
              pressed && styles.alertButtonPressed,
            ]}
            onPress={() =>
              Alert.alert("Alert", "Alert has been added to the system.")
            }
          >
            <Text style={styles.alertButtonText}>Press Me</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 48,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  alertButton: {
    backgroundColor: "#db3939",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  alertButtonPressed: {
    opacity: 0.8,
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
 
});
