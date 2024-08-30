import {
  Switch,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { TextInput } from "react-native-element-textinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CreateGroup3: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Get the screen width
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageDimension = windowWidth / 6; // Dividing by 4 to get 25% of the screen width

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
        <Text style={styles.heading}>‘Groups Name’</Text>

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
          flex: 6.2,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "5%",
          gap: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 9,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[32]),
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 48,
                textAlign: "left",
              }}
            >
              Invite others to join the group!
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.pureWhite,
            padding: "3%",
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
              flex: 7,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: wp(fontSizes[13]),
                //lineHeight: 18.23,
                fontFamily: fontFamily.DMSans_500,
              }}
            >
              Confirm new group members before they join
            </Text>
          </View>
          <View
            style={{
              flex: 3,
            }}
          ></View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[10]),
              //lineHeight: 15,
              fontFamily: fontFamily.DMSans_500,
              textAlign: "left",
              marginBottom: "2%",
            }}
          >
            Share this link
          </Text>

          <TextInput
            style={{
              paddingHorizontal: "3%",
              borderWidth: 0.5,
              borderColor: color.blueGreen,
              backgroundColor: color.pureWhite,
              borderRadius: spacing.sm,
            }}
            renderRightIcon={() => (
              <Ionicons name="copy-outline" size={24} color={color.green} />
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
              gap: 10,
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
                fontSize: wp(fontSizes[12]),
                textAlign: "center",
                lineHeight: 13,
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
              gap: 10,
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
                fontSize: wp(fontSizes[12]),
                textAlign: "center",
                lineHeight: 13,
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
              gap: 10,
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
                fontSize: wp(fontSizes[12]),
                textAlign: "center",
                lineHeight: 13,
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
              gap: 10,
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
                fontSize: wp(fontSizes[12]),
                textAlign: "center",
                lineHeight: 13,
                fontFamily: fontFamily.Avenir_500,
              }}
            >
              SnapChat
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
        }}
      ></View>
      <ShadowedView
        style={{
          flex: 1.3,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color.white,
          paddingHorizontal: "5%",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.25,
            radius: 30,
            offset: [0, -2],
          }),
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: color.blueGreen,
            borderRadius: 4,
            padding: "5%",
          }}
          onPress={() => router.navigate("(Group)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              //lineHeight: 22,
            }}
          >
            Finish
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default CreateGroup3;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },

  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: color.white,
  },
});
