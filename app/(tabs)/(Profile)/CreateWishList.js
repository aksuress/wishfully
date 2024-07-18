import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";
const CreateWishList = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View style={{ flex: 2 }}>
        <LinearGradient
          colors={["#00C187", "#017CC1"]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 1, y: 0.9 }}
          style={styles.Background}
        >
          <Ionicons name="image-outline" size={24} color="white" />
          <Text style={{ fontSize: 14, fontWeight: "700", color: "white" }}>
            Add cover photo
          </Text>
        </LinearGradient>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity onPress={() => router.navigate("WishList")}>
              <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "700",
                lineHeight: 48,
                fontFamily: "sans-serif",
                marginLeft: 15,
              }}
            >
              Leroy’s Birthday
            </Text>
          </View>
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            // borderColor: "red",
            // borderWidth: 1,
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: 16,
              paddingVertical: 7,
              marginHorizontal: 15,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 16,
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              1 Going
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 6,
              backgroundColor: "#DCF4ED",
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 16,
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              10/07/2024
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 15,
            justifyContent: "flex-start",
          }}
        >
          <FontAwesome name="user-circle" size={18} color="#00C187" />
          <Text style={{ marginLeft: 5, color: " #00000099" }}>created by</Text>
          <Text style={{ fontWeight: "500", marginHorizontal: 4 }}>You</Text>
        </View>
      </View>
      <View style={{ flex: 7 }}></View>
    </SafeAreaView>
  );
};

export default CreateWishList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
