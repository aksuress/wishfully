import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const EventInvite = () => {
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
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Invite Guests</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "#DF0000", fontWeight: "700" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 7, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 7.8,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 30,
              fontWeight: "700",
              lineHeight: 40,
            }}
          >
            Various ways to invite your guests
          </Text>
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
            width: "80%",
            marginVertical: 5,
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
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Confirm guests before they join
          </Text>
        </View>
        <View style={{ width: "90%", marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 22,
              textAlign: "left",
            }}
          >
            Add guests from groups you are in
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: "#0386BA40",
              padding: 5,
              elevation: 2,
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 5,
            }}
          >
            <TextInput
              placeholderTextColor={"#000000"}
              placeholder="Search..."
              style={{
                flex: 0.9,
              }}
            />
            <Feather
              name="search"
              size={24}
              color="black"
              style={{ flex: 0.1 }}
            />
          </View>
        </View>
        <View style={{ width: "90%", marginBottom: 10 }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#0386BA40",
              padding: 7,
              elevation: 2,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 18,
                fontWeight: "700",
                lineHeight: 22,
                textAlign: "center",
                color: "#00A876",
              }}
            >
              Download QR Code
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            Download a QR code to use on your own invites!
          </Text>
        </View>
        <View style={{ width: "90%", marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 22,
              textAlign: "left",
            }}
          >
            Share this link
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: "#0386BA40",
              padding: 5,
              elevation: 2,
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 5,
            }}
          >
            <TextInput
              style={{
                flex: 0.9,
              }}
            />
            <Ionicons
              name="copy-outline"
              size={16}
              color="#00C187"
              style={{ flex: 0.1 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginTop: 25,
            }}
          >
            <View
              style={{
                height: 60,
                width: 60,
              }}
            >
              <ImageBackground
                source={require("./../assets/images/imessage.png")}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 11, textAlign: "center" }}>
                imessage
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 60,
              }}
            >
              <ImageBackground
                source={require("./../assets/images/messenger.png")}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 11, textAlign: "center" }}>
                Messenger
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 60,
              }}
            >
              <ImageBackground
                source={require("./../assets/images/whatsapp.png")}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 11, textAlign: "center" }}>
                WhatsApp
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: 60,
              }}
            >
              <ImageBackground
                source={require("./../assets/images/snapchat.png")}
                style={{ flex: 1 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 11, textAlign: "center" }}>
                SnapChat
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
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
          //   onPress={() => router.navigate("/ReviewEvent")}
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
            Create Event
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EventInvite;

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
