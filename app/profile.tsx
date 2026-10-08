import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Rahul Thakur</Text>
            <Text style={styles.badge}>Not verified</Text>
            <Text style={styles.grayText}>
              Manage your public reviews profile
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RT</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.actionBox}>
            <Ionicons name="heart-outline" size={27} color="black" />
            <Text>Favourites</Text>
          </View>

          <View style={styles.actionBox}>
            <Ionicons name="wallet-outline" size={27} color="black" />
            <Text>Wallet</Text>
          </View>

          <View style={styles.actionBox}>
            <Ionicons name="receipt-outline" size={27} color="black" />
            <Text>Orders</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>Travel Pass</Text>
            <Text style={styles.grayText}>
              Discount on airport pickup and more
            </Text>
          </View>
          <Ionicons name="airplane-outline" size={30} color="black" />
        </View>

        {/* Uber One */}
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>Try Uber One free</Text>
            <Text style={styles.grayText}>Unlock $0 Delivery Fee and more</Text>
          </View>
          <Ionicons name="bag-handle-outline" size={30} color="green" />
        </View>

        {/* Menu */}
        <View style={styles.menuItem}>
          <Ionicons name="settings-outline" size={21} color="black" />
          <Text style={styles.menuText}>Account settings</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="people-outline" size={21} color="black" />
          <Text style={styles.menuText}>Family and teens</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="car-outline" size={21} color="black" />
          <Text style={styles.menuText}>Rides</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="pricetag-outline" size={21} color="black" />
          <Text style={styles.menuText}>Promotions</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="gift-outline" size={21} color="black" />
          <Text style={styles.menuText}>Send a gift</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="restaurant-outline" size={21} color="black" />
          <Text style={styles.menuText}>Dine out reservations</Text>
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={21} color="black" />
          <Text style={styles.menuText}>Help</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  badge: {
    fontSize: 11,
    backgroundColor: "#eeeeee",
    alignSelf: "flex-start",
    padding: 3,
    marginVertical: 6,
  },
  grayText: {
    fontSize: 12,
    color: "gray",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 15,
  },
  actionBox: {
    flex: 1,
    height: 78,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  menuText: {
    fontSize: 15,
    marginLeft: 20,
  },
});
