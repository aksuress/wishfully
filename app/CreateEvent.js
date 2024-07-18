import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";

const CreateEvent = () => {
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
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Create Event</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: "#DF0000",
              fontWeight: "700",
              fontSize: 14,
              fontFamily: "sans-serif",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 2, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 8, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 8.2,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            lineHeight: 48,
            marginHorizontal: 5,
            paddingRight: 55,
          }}
        >
          What’s the name of your event?
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginTop: 15,
            lineHeight: 27,
            marginHorizontal: 5,
            paddingRight: 65,
            marginBottom: 45,
          }}
        >
          Managing wedding invitations is great to do in Wishfully!
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            borderColor: "#0386BA40",
            borderWidth: 2,
            width: "100%",
            height: 48,
            borderRadius: 8,
            paddingLeft: 5,
            backgroundColor: "rgba(255, 255, 255, 5)",
          }}
        >
          <TextInput
            placeholder="Event name..."
            placeholderTextColor={"#00000073"}
            style={{ width: "100%" }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          ...Platform.select({
            ios: {
              shadowColor: "black",
              shadowOffset: { width: 0, height: -3 }, // Only top shadow
              shadowOpacity: 0.5,
              shadowRadius: 3,
            },
            android: {
              elevation: 25,
            },
          }),
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#00C187",
            width: "90%",
            borderRadius: 8,
          }}
          onPress={() => router.navigate("/CreateEvent2")}
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

export default CreateEvent;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "700",
    lineHeight: 36,
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
