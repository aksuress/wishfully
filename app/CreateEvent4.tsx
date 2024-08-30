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
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CreateEvent4: React.FC = () => {
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
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flex: 3,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 7,
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
                Confirm event location
              </Text>
            </View>
            <View
              style={{
                flex: 3,
              }}
            ></View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 9 }}>
              <Text
                style={{
                  fontSize: wp(fontSizes[24]),
                  fontFamily: fontFamily.DMSans_500,
                  lineHeight: 27,
                }}
              >
                Confirm the entrance of the venue or meeting location by moving
                the map.
              </Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
        <View style={{ flex: 6.5, width: "100%" }}>
          {/* <MapView style={styles.map} /> */}
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
          onPress={() => router.navigate("CreateEvent5")}
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

export default CreateEvent4;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
  map: {
    flex: 1,
  },
});
