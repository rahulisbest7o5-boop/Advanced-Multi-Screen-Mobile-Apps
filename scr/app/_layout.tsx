import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const icons = {
  index: "home-outline",
  map: "map-outline",
  search: "search-outline",
  cart: "cart-outline",
  profile: "person-outline",
} as const;

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2E7D32",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "#ddd",
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={
              icons[route.name as keyof typeof icons] ??
              "ellipse-outline"
            }
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="map" options={{ title: "Map" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}