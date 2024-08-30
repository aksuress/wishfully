import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { TextInput } from "react-native-element-textinput";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CreateEvent: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
        }}
      >
        <Text style={styles.heading}>Create Event</Text>

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
          flex: 5.7,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 8,
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
              What’s the name of your event?
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
            flexDirection: "row",
            marginTop: "4%",
            marginBottom: "10%",
          }}
        >
          <View
            style={{
              flex: 7,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[22]),
                fontFamily: fontFamily.DMSans_500,
                lineHeight: 27,
              }}
            >
              Managing wedding invitations is great to do in Wishfully!
            </Text>
          </View>
          <View
            style={{
              flex: 3,
            }}
          ></View>
        </View>
        <TextInput
          placeholder="Event name..."
          inputStyle={styles.Inputstyle}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
      </View>
      <View style={{ flex: 0.5 }}></View>
      <ShadowedView
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "5%",
          backgroundColor: color.white,
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
          onPress={() => router.navigate("/CreateEvent2")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
              //lineHeight: 22,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
  Inputstyle: {
    backgroundColor: color.white,
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: spacing.sm,
    paddingHorizontal: "5%",
  },
});
