import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          tabBarShowLabel: false,
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
          tabBarShowLabel: false,
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
          tabBarShowLabel: false,
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
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
