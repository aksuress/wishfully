import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";

const Preference3 = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

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
        <View style={{ flex: 7, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 3, backgroundColor: "#00C18733" }}></View>
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
            flex: 5,
            width: "90%",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 32,
              fontWeight: "700",
              lineHeight: 48,
            }}
          >
            Do you need responses by a certain date?
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            width: "90%",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#00C187",
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: 16,
                  fontWeight: "700",
                  lineHeight: 22,
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#00C187",
                padding: 15,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: 16,
                  fontWeight: "700",
                  lineHeight: 22,
                }}
              >
                1 day before
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#00C187",
                padding: 15,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: 16,
                  fontWeight: "700",
                  lineHeight: 22,
                }}
              >
                1 week before
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 12,
                fontWeight: "700",
                lineHeight: 22,
                textAlign: "center",
              }}
            >
              or
            </Text>
          </View>
          <TouchableOpacity onPress={showDatepicker}>
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: "700",
                color: "#0386BA",
                textAlign: "center",
              }}
            >
              Select Date
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
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
          onPress={() => router.navigate("/ReviewEvent")}
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

export default Preference3;

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
