import {
  Platform,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import MapView from "react-native-maps";

const CreateEvent4 = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2F8FC",
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
          <Text style={{ color: "#DF0000", fontWeight: "700" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 7, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 3,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",

            paddingLeft: 15,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              lineHeight: 42,
              fontSize: 32,
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            Confirm event
          </Text>
          <Text
            style={{
              lineHeight: 42,
              fontSize: 32,
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            location
          </Text>
          <Text
            style={{
              lineHeight: 27,
              fontSize: 18,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            Confirm the entrance of the venue or meeting location by moving the
            map.
          </Text>
        </View>
        <View style={{ flex: 5, width: "100%" }}>
          <MapView style={styles.map} />
        </View>
        <View style={{ flex: 2 }}></View>
      </View>
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#FFFFFF",
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
            borderWidth: 1,
            borderColor: "#00C187",
            flex: 2,
            marginRight: 15,
            marginLeft: 15,
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              color: "#00C187",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              padding: 7,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#00C187",
            flex: 3,
            borderWidth: 1,
            borderColor: "#00C187",
            marginRight: 15,
          }}
          onPress={() => router.navigate("/CreateEvent5")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              paddingVertical: 7,
              paddingHorizontal: 5,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateEvent4;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",

    fontFamily: "sans-serif",
  },
  map: {
    width: 358,
    height: 235,
  },
});
