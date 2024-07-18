import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WishList from "./WishList";
import Feed from "./Feed";

const Tab = createMaterialTopTabNavigator();

function Topbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 18,
        },
        tabBarItemStyle: {
          // height: 34,
        },
        tabBarActiveTintColor: "#00C187", // Color when tab is active
        tabBarInactiveTintColor: "#000000", // Color when tab is inactive
        tabBarIndicatorStyle: {
          borderColor: "#00C187",
          borderWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Wishlist" component={WishList} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

export default Topbar;
