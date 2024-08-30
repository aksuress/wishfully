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
const CreateEvent2: React.FC = () => {
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
          flex: 7,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "4%",
        }}
      >
        <View
          style={{
            flex: 1.5,
            alignSelf: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[32]),
              fontFamily: fontFamily.DMSans_700,
              //lineHeight: 48,
            }}
          >
            When is the event?
          </Text>
        </View>
        <View
          style={{
            flex: 7,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Calendar
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: color.lightBlue,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "90%",
            padding: "2%",
            borderRadius: 32,
            backgroundColor: color.pureWhite,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: 8,
              backgroundColor: color.lightBlue,
              padding: "3%",
            }}
          >
            <Switch
              trackColor={{ false: "#C4EBD6", true: "#C4EBD6" }}
              thumbColor={isEnabled ? "#14AE5C" : "#14AE5C"}
              ios_backgroundColor={color.lightBlue}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
            <Text
              style={{
                //lineHeight: 20.83,
                fontSize: wp(fontSizes[18]),
                fontFamily: fontFamily.DMSans_500,
              }}
            >
              Time
            </Text>
          </View>
          <View
            style={{
              backgroundColor: color.lightBlue,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                //lineHeight: 28,
                fontSize: wp(fontSizes[24]),
                fontFamily: fontFamily.DMSans_500,
                padding: "3%",
              }}
            >
              07:00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: color.lightBlue,
              padding: "1.5%",

              borderRadius: 8,
            }}
          >
            <Text
              style={{
                //lineHeight: 20,
                fontSize: wp(fontSizes[13]),
                fontFamily: fontFamily.DMSans_500,
                padding: "2.5%",
              }}
            >
              AM
            </Text>
            <Text
              style={{
                //lineHeight: 20,
                fontSize: wp(fontSizes[13]),
                fontFamily: fontFamily.DMSans_500,
                padding: "2.5%",
                backgroundColor: color.white,
                elevation: 5,
              }}
            >
              PM
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.5 }}></View>
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
          onPress={() => router.navigate("CreateEvent3")}
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

export default CreateEvent2;

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
});
