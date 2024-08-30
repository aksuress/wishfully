import { View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { color, fontFamily } from "../../../../utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { fontSizes } from "@/utils/sizes";

const Details: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
        backgroundColor: color.lightBlue,
      }}
    >
      <ShadowedView
        style={{
          flex: 0.1,
          width: "100%",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.8,
            radius: 50,
            offset: [0, 2],
          }),
        }}
      ></ShadowedView>
      <View
        style={{
          flex: 9.8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp(fontSizes[47]),
            fontFamily: fontFamily.DMSans_500,
            textAlign: "center",
          }}
        >
          Details
        </Text>
      </View>

      <ShadowedView
        style={{
          flex: 0.1,
          width: "100%",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.8,
            radius: 40,
            offset: [0, -2],
          }),
        }}
      ></ShadowedView>
    </View>
  );
};

export default Details;
