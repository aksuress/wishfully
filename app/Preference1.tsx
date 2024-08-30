import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { TextInput } from "react-native-element-textinput";
const Preference1: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          flex: 6,
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "5%",
          gap: 20,
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
                //lineHeight: 48,
                textAlign: "left",
              }}
            >
              Give guests options to choose from
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
        </View>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[24]),
            lineHeight: 26,
            textAlign: "left",
            width: "100%",
          }}
        >
          Ask your guests what they would prefer from a list of options, such as
          meal preferences.
        </Text>
        <TextInput
          placeholder="Question..."
          inputStyle={styles.Inputstyle}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.white,
            borderRadius: 8,
            padding: "2%",
            width: "60%",
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
              fontSize: wp(fontSizes[18]),
            }}
          >
            Answer required
          </Text>
        </View>

        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[22]),
            //lineHeight: 27,
            textAlign: "left",
            width: "100%",
          }}
        >
          Options
        </Text>
        <TextInput
          placeholder="Option 1..."
          inputStyle={styles.Inputstyle}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
      </View>
      <View style={{ flex: 2 }}></View>
      <ShadowedView
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
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
          onPress={() => router.navigate("Preference2")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default Preference1;

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
  },
});
