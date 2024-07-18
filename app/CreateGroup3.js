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
import { Ionicons } from "@expo/vector-icons";

const CreateGroup3 = () => {
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
        <View style={{ flex: 7, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 3, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 25, paddingLeft: 15, paddingRight: 55 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "600",
              lineHeight: 52,
            }}
          >
            Invite others to join the group!
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#00C187",
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
            backgroundColor: "rgba(255, 255, 255, 5)",
          }}
        >
          <View
            style={{
              flex: 2,
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
          </View>
          <View
            style={{
              flex: 6,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: 14,
                lineHeight: 18.23,
              }}
            >
              Confirm new group members before they join
            </Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          ></View>
        </View>
        <View
          style={{
            width: 330,
            marginTop: 20,

            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              lineHeight: 15,
              fontWeight: "500",
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            Share this link
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: "#0286BA40",
              backgroundColor: "rgba(255, 255, 255, 5)",
              borderRadius: 8,
              height: 48,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput style={{ flex: 0.9 }} />
            <Ionicons
              name="copy-outline"
              size={24}
              color="#00C187"
              style={{ flex: 0.1 }}
            />
          </View>
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
            <Text style={{ fontSize: 11, textAlign: "center" }}>imessage</Text>
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
            <Text style={{ fontSize: 11, textAlign: "center" }}>Messenger</Text>
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
            <Text style={{ fontSize: 11, textAlign: "center" }}>WhatsApp</Text>
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
            <Text style={{ fontSize: 11, textAlign: "center" }}>SnapChat</Text>
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
          paddingHorizontal: 15,
          shadowColor: "black",
          shadowOffset: { width: 1, height: 5 },
          //shadowOpacity: 0.8,
          shadowRadius: 2,
          // Android Shadow
          elevation: 18,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#00C187",
            flex: 1,
            padding: 5,
          }}
          onPress={() => router.navigate("(Group)")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup3;

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
  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
});
