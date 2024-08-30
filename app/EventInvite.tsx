import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { TextInput } from "react-native-element-textinput";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const EventInvite: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // Get the screen width
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageDimension = windowWidth / 6.5;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
        }}
      >
        <Text style={styles.heading}>Invite Guests</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[20]),
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 2,
            backgroundColor: color.green,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
          }}
        ></View>
        <View style={{ flex: 8, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 7.5,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{ gap: 35, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[32]),
              fontFamily: fontFamily.DMSans_700,
              //lineHeight: 48,
              textAlign: "left",
            }}
          >
            Various ways to invite your guests
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: color.white,
              borderRadius: 8,
              width: wp("70%"),
              padding: "4%",
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
                fontFamily: fontFamily.DMSans_500,
                fontSize: wp(fontSizes[13]),
              }}
            >
              Confirm guests before they join
            </Text>
          </View>
        </View>

        <View style={{ gap: 5 }}>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: wp(fontSizes[13]),
              lineHeight: 22,
              textAlign: "left",
            }}
          >
            Add guests from groups you are in
          </Text>

          <TextInput
            style={styles.Inputstyle}
            placeholderStyle={{ fontSize: wp(fontSizes[10]) }}
            placeholderTextColor={color.black}
            placeholder="Search..."
            renderRightIcon={() => (
              <Feather
                name="search"
                size={wp(fontSizes[26])}
                color={color.black}
              />
            )}
            fontFamily={fontFamily.DMSans_400}
          />
        </View>
        <View style={{ width: "100%", gap: 5 }}>
          <View
            style={{
              backgroundColor: color.white,
              borderRadius: 4,
              borderWidth: 3,
              borderColor: color.borderBlue,
              padding: "4%",
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[22]),
                //lineHeight: 22,
                textAlign: "center",
                color: color.blueGreen,
              }}
            >
              Download QR Code
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_400,
              fontSize: wp(fontSizes[12]),
              //lineHeight: 22,
              textAlign: "center",
            }}
          >
            Download a QR code to use on your own invites!
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: wp(fontSizes[13]),
              //lineHeight: 22,
              textAlign: "left",
            }}
          >
            Share this link
          </Text>
          <TextInput
            style={styles.Inputstyle}
            renderRightIcon={() => (
              <Ionicons
                name="copy-outline"
                size={wp(fontSizes[26])}
                color={color.green}
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
              gap: 5,
            }}
          >
            <Image
              source={require("./../assets/images/imessageicon.png")}
              style={{
                height: imageDimension,
                width: imageDimension,
              }}
              resizeMode="stretch"
              resizeMethod="scale"
            />
            <Text
              style={{
                fontSize: wp(fontSizes[10]),
                textAlign: "center",
                //lineHeight: 13,
                fontFamily: fontFamily.Avenir_500,
              }}
            >
              imessage
            </Text>
          </View>
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
              gap: 5,
            }}
          >
            <Image
              source={require("./../assets/images/messengericon.png")}
              style={{
                height: imageDimension,
                width: imageDimension,
              }}
              resizeMode="stretch"
              resizeMethod="scale"
            />
            <Text
              style={{
                fontSize: wp(fontSizes[10]),
                textAlign: "center",
                //lineHeight: 13,
                fontFamily: fontFamily.Avenir_500,
              }}
            >
              Messenger
            </Text>
          </View>
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
              gap: 5,
            }}
          >
            <Image
              source={require("./../assets/images/whatsappicon.png")}
              style={{
                height: imageDimension,
                width: imageDimension,
              }}
              resizeMode="contain"
              resizeMethod="scale"
            />
            <Text
              style={{
                fontSize: wp(fontSizes[10]),
                textAlign: "center",
                //lineHeight: 13,
                fontFamily: fontFamily.Avenir_500,
              }}
            >
              WhatsApp
            </Text>
          </View>
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
              gap: 5,
              backgroundColor: color.white,
            }}
          >
            <Image
              source={require("./../assets/images/snapicon.png")}
              style={{
                height: imageDimension,
                width: imageDimension,
              }}
              resizeMode="cover"
              resizeMethod="scale"
            />
            <Text
              style={{
                fontSize: wp(fontSizes[10]),
                textAlign: "center",
                //lineHeight: 13,
                fontFamily: fontFamily.Avenir_500,
              }}
            >
              SnapChat
            </Text>
          </View>
        </View>
      </View>
      <ShadowedView
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: color.white,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 30,
            offset: [0, -2],
          }),
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1.5,
            borderColor: color.green,
            borderRadius: 4,
            flex: 2,
            marginHorizontal: "5%",
            paddingVertical: "4%",
            paddingHorizontal: "2%",
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              color: color.green,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: color.blueGreen,
            flex: 3,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: color.green,
            marginRight: "5%",
            padding: "4%",
          }}
          onPress={() => router.navigate("(Event)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Create Event
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default EventInvite;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },

  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
  Inputstyle: {
    backgroundColor: color.white,
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: spacing.sm,
    paddingHorizontal: "5%",
    width: "100%",
    //height: hp("6%"),
  },
});
