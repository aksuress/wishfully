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
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Preference2 = () => {
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
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            flex: 6,
            width: "90%",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 31,
              fontWeight: "700",
              lineHeight: 40,
            }}
          >
            Ask for an answer
          </Text>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 31,
              fontWeight: "700",
              lineHeight: 40,
              marginVertical: 10,
              textAlign: "left",
            }}
          >
            from your guests
          </Text>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "500",
              lineHeight: 22,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            Ask your guests a question for them to respond to, such as ‘what
            song would you like to add to the playlist’?
          </Text>

          <View
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              position: "relative",
              elevation: 2,
              justifyContent: "center",
              elevation: 5,
              marginVertical: 15,
            }}
          >
            <Text
              style={{
                zIndex: 0,
                padding: 5,
                fontStyle: "italic",
                opacity: 0.5,
                fontSize: 16,
                paddingLeft: 15,
              }}
            >
              Questions...
            </Text>
            <TextInput
              placeholderTextColor={"#00000073"}
              style={{
                height: 40,
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              elevation: 5,
              width: "60%",
              height: 40,
              marginVertical: 15,
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
              style={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Answer required
            </Text>
          </View>
        </View>
        <View style={{ flex: 4 }}></View>
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
          onPress={() => router.navigate("/Preference3")}
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

export default Preference2;

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
