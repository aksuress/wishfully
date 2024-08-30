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
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FinishAccount2: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
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
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "6%",
        }}
      >
        <Text style={styles.heading}>Finish Account</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontSize: wp(fontSizes[20]),
              fontFamily: fontFamily.DMSans_700,
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
            flex: 9,
            backgroundColor: color.green,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
          }}
        ></View>
        <View style={{ flex: 1, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 7,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "2%",
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "4%",
          }}
        >
          <View
            style={{
              flex: 7,
              paddingHorizontal: "3%",
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[32]),
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 52,
                textAlign: "left",
              }}
            >
              What’s your date of birth?
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
            flex: 8,
            width: "100%",
          }}
        >
          <Calendar
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
            style={{
              width: "100%",

              backgroundColor: color.lightBlue,
            }}
          />
        </View>
      </View>
      <ShadowedView
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: color.pureWhite,
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
            backgroundColor: color.green,
            flex: 3,
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 4,
            marginRight: "5%",
            padding: "4%",
          }}
          onPress={() => router.navigate("(tabs)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Let's Go!
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default FinishAccount2;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },

  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
});
