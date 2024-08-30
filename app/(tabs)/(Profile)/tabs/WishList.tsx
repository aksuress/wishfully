import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../../../../utils/Color";
import { spacing, fontSizes } from "../../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { LinearGradient } from "expo-linear-gradient";

const WishList: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "6%",
          backgroundColor: color.lightBlue,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 8,
            paddingVertical: "4%",
            paddingHorizontal: "4%",
            backgroundColor: color.pureWhite,
            marginVertical: "5%",
          }}
        >
          <View
            style={{
              flex: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            <AntDesign
              name="pluscircleo"
              size={wp(fontSizes[30])}
              color={color.green}
              style={{ backgroundColor: color.white }}
            />
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[24]),
                lineHeight: 22,
                color: color.green,
                marginLeft: "5%",
                marginTop: "2%",
              }}
            >
              Create New Wishlist
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.navigate("(tabs)/CreateWishList")}
            style={{
              flex: 3,
              alignItems: "flex-end",
            }}
          >
            <Entypo
              name="chevron-right"
              size={wp(fontSizes[22])}
              color={color.green}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 8,
            paddingVertical: "4%",
            paddingHorizontal: "4%",
            backgroundColor: color.white,
          }}
        >
          <View
            style={{
              flex: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <LinearGradient
              colors={[color.blueGreen, color.navyBlue]}
              start={{ x: 0.0, y: 0.4 }}
              end={{ x: 1.0, y: 0.5 }}
              style={{
                borderRadius: 32,
                padding: "4%",
              }}
            >
              <Image
                source={require("../../../../assets/images/whiteuser.png")}
                style={{
                  height: hp(fontSizes[8]),
                }}
              />
            </LinearGradient>

            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[24]),
                lineHeight: 22,
                color: color.black,
                marginLeft: "5%",
                marginTop: "2%",
              }}
            >
              Firstname’s Birthday
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              alignItems: "flex-end",
            }}
          >
            <Entypo
              name="chevron-right"
              size={wp(fontSizes[22])}
              color={color.green}
            />
          </View>
        </View>
      </View>
      <ShadowedView
        style={{
          height: hp(fontSizes[1]),
          width: "100%",
          // backgroundColor: "pink",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 40,
            offset: [1, 1],
          }),
        }}
      ></ShadowedView>
    </>
  );
};

export default WishList;
