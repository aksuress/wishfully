import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";

const circleSize = 80;

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 3,
        }}
      >
        <Text
          style={{
            fontFamily: "sans-serif",
            fontSize: 24,
            lineHeight: 36,
            letterSpacing: 1.7,
            fontWeight: "700",
            marginTop: 15,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2.5,
              borderColor: "#00A876",
              padding: 20,
              borderRadius: circleSize / 2,
              position: "relative",
              zIndex: 1,
              marginHorizontal: 15,
              height: circleSize,
              width: circleSize,
              backgroundColor: "#FFFFFF",
            }}
          >
            <FontAwesome name="user" size={25} color="#00A876" />
            <AntDesign
              name="pluscircle"
              size={20}
              color="#00A876"
              style={{
                position: "absolute",
                right: -0.5,
                top: 0,
                zIndex: 5,
              }}
            />
          </View>
          <View style={{ flex: 7 }}>
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 18,
                lineHeight: 22,

                fontWeight: "700",
              }}
            >
              Firstname Surname
            </Text>
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              DD/MM/YYYY
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 9 }}>
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default index;

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
