import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CreateEvent6 = () => {
  const router = useRouter();

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
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 32,
              fontWeight: "700",
              lineHeight: 44,
              marginVertical: 10,
            }}
          >
            Need additional info from your guests?
          </Text>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "500",
              lineHeight: 27,
            }}
          >
            Add questions for guests to answer when RSVP’ing to the event.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 0.5,
              borderColor: "#00C187",
              borderRadius: 5,
              padding: 8,
              backgroundColor: "#FFFFFF",
              marginVertical: 15,
            }}
          >
            <View
              style={{
                flex: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <AntDesign name="pluscircleo" size={24} color="#00C187" />
              <Text
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: "900",
                  lineHeight: 22,
                  color: "#00C187",
                  marginLeft: 14,
                }}
              >
                Text Answer
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: "flex-end",
              }}
            >
              <Entypo name="chevron-right" size={24} color="#00C187" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 0.5,
              borderColor: "#00C187",
              borderRadius: 5,
              padding: 8,
              backgroundColor: "#FFFFFF",
            }}
          >
            <View
              style={{
                flex: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AntDesign name="pluscircleo" size={24} color="#00C187" />
              <Text
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: "900",
                  lineHeight: 22,
                  color: "#00C187",
                }}
              >
                List of Options
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: "flex-end",
              }}
            >
              <Entypo name="chevron-right" size={24} color="#00C187" />
            </View>
          </View>
        </View>
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
          onPress={() => router.navigate("/Preference1")}
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
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateEvent6;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",

    fontFamily: "sans-serif",
  },

  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
});
