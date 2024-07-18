import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Home Page </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
