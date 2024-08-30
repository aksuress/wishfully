import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CreateEvent6: React.FC = () => {
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
          flex: 4.5,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: "5%",
          gap: 20,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: wp(fontSizes[32]),
            //lineHeight: 44,
          }}
        >
          Need additional info from your guests?
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[24]),
            lineHeight: 27,
            paddingRight: "12%",
          }}
        >
          Add questions for guests to answer when RSVP’ing to the event.
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 8,
            padding: "5%",
            backgroundColor: color.white,
            //marginVertical: 15,
          }}
        >
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 15,
            }}
          >
            <AntDesign
              name="pluscircleo"
              size={wp(fontSizes[26])}
              color={color.green}
            />
            <Text
              style={{
                fontFamily: fontFamily.Avenir_700,
                fontSize: wp(fontSizes[22]),
                //lineHeight: 22,
                color: color.green,
              }}
            >
              Text Answer
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              alignItems: "flex-end",
            }}
          >
            <Entypo
              name="chevron-right"
              size={wp(fontSizes[26])}
              color={color.green}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 8,
            padding: "5%",
            backgroundColor: color.white,
          }}
        >
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <AntDesign name="pluscircleo" size={24} color={color.green} />
            <Text
              style={{
                fontFamily: fontFamily.Avenir_700,
                fontSize: wp(fontSizes[22]),
                //lineHeight: 22,
                color: color.green,
              }}
            >
              List of Options
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              alignItems: "flex-end",
            }}
          >
            <Entypo
              name="chevron-right"
              size={wp(fontSizes[26])}
              color={color.green}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2.5,
        }}
      ></View>
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
          onPress={() => router.navigate("Preference1")}
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

export default CreateEvent6;

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
