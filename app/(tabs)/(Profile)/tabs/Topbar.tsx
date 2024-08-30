import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WishList from "./WishList";
import MyAccount from "./MyAccount";
import { color, fontFamily } from "../../../../utils/Color";
import { fontSizes, spacing } from "../../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tab = createMaterialTopTabNavigator();

const Topbar: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: wp(fontSizes[24]),
          fontFamily: fontFamily.DMSans_700,
          lineHeight: 27,
        },
        tabBarActiveTintColor: color.green, // Color when tab is active
        tabBarInactiveTintColor: color.black, // Color when tab is inactive
        tabBarIndicatorStyle: {
          borderColor: color.green,
          borderWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Wishlists" component={WishList} />
      <Tab.Screen name="My Account" component={MyAccount} />
    </Tab.Navigator>
  );
};

export default Topbar;
