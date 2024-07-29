import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WishList from "./WishList";
import Feed from "./Feed";
import Details from "./Details";
import { color, fontFamily } from "../../../../utils/Color";
import React from "react";
const Tab = createMaterialTopTabNavigator();

const Topbar: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 18,
          fontFamily: fontFamily.DMSans_500,
        },

        tabBarActiveTintColor: color.green, // Color when tab is active
        tabBarInactiveTintColor: color.black, // Color when tab is inactive
        tabBarIndicatorStyle: {
          borderColor: color.green,
          borderWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Wishlist" component={WishList} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

export default Topbar;
