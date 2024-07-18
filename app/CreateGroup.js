import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, useRouter } from "expo-router";

const CreateGroup = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2F8FC",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Create Group</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "#DF0000", fontWeight: "700" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 5, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 5, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 38,
            fontWeight: "400",
            marginHorizontal: 5,
            paddingRight: 55,
          }}
        >
          What do you want your group to be called?
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            marginTop: 5,
            marginHorizontal: 5,
            paddingRight: 65,
            marginBottom: 15,
          }}
        >
          We recommend creating different groups for friends, family, work
          colleagues etc
        </Text>

        <TextInput
          placeholder="Group name..."
          placeholderTextColor={"#00000073"}
          style={{
            borderColor: "#0386BA40",
            borderWidth: 2,
            width: "100%",
            height: 48,
            borderRadius: 8,
          }}
        />
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#00C187",
            width: "90%",
            borderRadius: 8,
          }}
          onPress={() => router.navigate("/CreateGroup2")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              padding: 4,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",

    fontFamily: "sans-serif",
  },
  card: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRightWidth: 5,
    borderRightColor: "white",
    borderStyle: "dashed",
  },
});
