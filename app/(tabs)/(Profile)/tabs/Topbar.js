import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WishList from "./WishList";
import MyAccount from "./MyAccount";

const Tab = createMaterialTopTabNavigator();

function Topbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 18,
        },
        tabBarActiveTintColor: "#00C187", // Color when tab is active
        tabBarInactiveTintColor: "#000000", // Color when tab is inactive
        tabBarIndicatorStyle: {
          borderColor: "#00C187",
          borderWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Wishlists" component={WishList} />
      <Tab.Screen name="My Account" component={MyAccount} />
    </Tab.Navigator>
  );
}

export default Topbar;
