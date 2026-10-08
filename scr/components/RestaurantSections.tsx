import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function RestaurantSections() {
  return (
    <>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Delivery Fees & Service Fees are charged for delivery orders in
          addition to item prices.{" "}
          <Text style={styles.learnMore}>Learn more</Text>
        </Text>
      </View>

      <SectionTitle title="Featured on Uber Eats" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/starbucks.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/chaihut.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/dq.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/subway.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/mcDon.png")}
          style={styles.image}
        />
      </ScrollView>

      <SectionTitle title="Places you might like" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/walmart.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/pizza.png")}
          style={styles.image}
        />

        <Image
          source={require("../../assets/images/superStore.png")}
          style={styles.image}
        />
      </ScrollView>
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionText}>{title}</Text>

      <Ionicons name="chevron-forward-outline" size={20} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },

  description: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },

  learnMore: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#333",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },

  sectionText: {
    fontSize: 24,
    fontWeight: "700",
    flex: 1,
  },

  image: {
    width: 210,
    height: 190,
    marginLeft: 10,
    resizeMode: "cover",
    borderRadius: 12,
  },
});
