import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateTimePickerEvent,
  Event,
} from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

// Define types for state and functions
type Mode = "date" | "time";

const Preference3: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<Mode>("date");
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: Mode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.lightBlue }}>
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
            flex: 5,
            backgroundColor: color.green,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
          }}
        ></View>
        <View style={{ flex: 5, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: "10%",
          }}
        >
          <View style={{ flex: 8 }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[32]),
                //lineHeight: 48,
              }}
            >
              Do you need responses by a certain date?
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </View>
        <View style={{ flex: 5, justifyContent: "flex-start", gap: 20 }}>
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
                backgroundColor: color.blueGreen,
                paddingVertical: "5%",
                paddingHorizontal: "8%",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: color.white,
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[18]),
                  //lineHeight: 22,
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: color.blueGreen,
                padding: "5%",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: color.white,
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[18]),
                  //lineHeight: 22,
                }}
              >
                1 day before
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: color.blueGreen,
                padding: "5%",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: color.white,
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[18]),
                  //lineHeight: 22,
                }}
              >
                1 week before
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 12,
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            or
          </Text>

          <TouchableOpacity onPress={showDatepicker}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[18]),
                color: color.navyBlue,
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
          onPress={() => router.navigate("ReviewEvent")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default Preference3;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
});
