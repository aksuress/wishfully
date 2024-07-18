import {
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
import { Link, useRouter } from "expo-router";

const CreateEvent2 = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
        <View style={{ flex: 1, width: "100%", marginVertical: 5 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "sans-serif",
              lineHeight: 48,
              fontWeight: "700",
              textAlign: "left",
            }}
          >
            When is the event?
          </Text>
        </View>
        <View
          style={{
            flex: 7.7,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Calendar
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
            style={{
              width: 400,
              transform: [{ scale: 0.7 }],
              backgroundColor: "#F2F8FC",
              elevation: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "90%",
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            marginVertical: 12,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: 15,
              backgroundColor: "#F2F8FC",
              paddingHorizontal: 10,
            }}
          >
            <Switch
              trackColor={{ false: "#C4EBD6", true: "#C4EBD6" }}
              thumbColor={isEnabled ? "#14AE5C" : "#14AE5C"}
              ios_backgroundColor="#F7FBFD"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
            <Text
              styles={{
                lineHeight: 20.83,
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "sans-serif",
              }}
            >
              Time
            </Text>
          </View>
          <View style={{ backgroundColor: "#F2F8FC", borderRadius: 15 }}>
            <Text
              style={{
                lineHeight: 28,
                fontSize: 22,
                fontWeight: "400",
                fontFamily: "sans-serif",
                padding: 6,
              }}
            >
              07.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F2F8FC",
              padding: 6,
            }}
          >
            <Text
              style={{
                lineHeight: 20,
                fontSize: 13,
                fontWeight: "500",
                fontFamily: "sans-serif",
                padding: 5,
              }}
            >
              AM
            </Text>
            <Text
              style={{
                lineHeight: 20,
                fontSize: 13,
                fontWeight: "500",
                fontFamily: "sans-serif",
                padding: 6,
                backgroundColor: "#FFFFFF",
                elevation: 5,
              }}
            >
              PM
            </Text>
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
          onPress={() => router.navigate("/CreateEvent3")}
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

export default CreateEvent2;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "700",
    lineHeight: 36,
    fontFamily: "sans-serif",
  },

  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
});
