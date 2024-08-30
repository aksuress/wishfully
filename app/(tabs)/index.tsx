import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../../utils/Color";
import { spacing, fontSizes } from "../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
const index: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 15,
        backgroundColor: color.white,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: spacing.sm,
          paddingHorizontal: "5%",
        }}
      >
        <Text
          style={{
            color: color.black,
            fontFamily: fontFamily.DMSans_700,
            lineHeight: 36,
            fontSize: wp(fontSizes[26]),
          }}
        >
          Coming up
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: color.black,
              fontFamily: fontFamily.DMSans_500,
              fontSize: wp(fontSizes[22]),
            }}
          >
            This month
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          backgroundColor: color.lightBlue,
          borderRadius: spacing.sm,
          elevation: 0.5,
          marginHorizontal: "5%",
        }}
      ></View>
      <View
        style={{
          flex: 4,
          backgroundColor: color.lightBlue,
          borderRadius: spacing.sm,
          justifyContent: "center",
          elevation: 0.5,
          marginHorizontal: "5%",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: wp(fontSizes[32]),
            lineHeight: 48,
            textAlign: "center",
            color: color.black,
          }}
        >
          It’s a bit lonely here...
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[22]),
            lineHeight: 27,
            textAlign: "center",
            padding: spacing.lg,
            color: color.black,
          }}
        >
          Create a group or event and invite friends and family to get started!
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: color.lightBlue,
          marginHorizontal: "5%",
        }}
      ></View>
      <ShadowedView
        style={{
          flex: 0.1,
          borderRadius: spacing.sm,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 40,
            offset: [0, -1],
          }),
        }}
      ></ShadowedView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    gap: 8,
    justifyContent: "space-between",
    backgroundColor: color.white,
    zIndex: 1,
  },
});
