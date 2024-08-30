import { View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { color, fontFamily } from "../../../../utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { fontSizes } from "@/utils/sizes";

const WishList: React.FC = () => {
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
          width: "100%",
          paddingHorizontal: "4%",
          gap: 25,
        }}
      >
        <Image
          source={require("./../../../../assets/images/wish.png")}
          style={{
            height: hp("20%"),
            width: wp("48%"),
          }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: wp(fontSizes[24]),
            lineHeight: 25,
            fontFamily: fontFamily.DMSans_500,
            paddingHorizontal: "15%",
            textAlign: "center",
          }}
        >
          Other people’s wishlists will appear here when they have joined the
          group
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: color.blueGreen,
            width: "100%",
            paddingVertical: "4%",

            borderRadius: 4,
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[24]),
              // lineHeight: 27,
              fontFamily: fontFamily.DMSans_500,
              textAlign: "center",
              color: color.white,
            }}
          >
            Invite Others
          </Text>
        </TouchableOpacity>
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

export default WishList;
