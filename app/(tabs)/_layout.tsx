import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Home from "../../assets/SVG/Home.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "white",
                height: heightPercentageToDP("0.5%"),
                width: widthPercentageToDP("1%"),
                borderRadius: 64,
                marginVertical: "2%",
              }}
            ></View>
          ),
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
        }}
      />
      <Tabs.Screen
        name="(Group)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "white",
                height: heightPercentageToDP("0.5%"),
                width: widthPercentageToDP("1%"),
                borderRadius: 64,
                marginVertical: "2%",
              }}
            ></View>
          ),
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
        }}
      />
      <Tabs.Screen
        name="(Event)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "party-popper" : "party-popper"}
              color={color}
              size={30}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "white",
                height: heightPercentageToDP("0.5%"),
                width: widthPercentageToDP("1%"),
                borderRadius: 64,
                marginVertical: "2%",
                marginRight: "10%",
              }}
            ></View>
          ),
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
        }}
      />
      <Tabs.Screen
        name="(Profile)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "white",
                height: heightPercentageToDP("0.5%"),
                width: widthPercentageToDP("1%"),
                borderRadius: 64,
                marginVertical: "2%",
              }}
            ></View>
          ),
          tabBarShowLabel: true,
          tabBarLabelPosition: "below-icon",
        }}
      />
    </Tabs>
  );
}
