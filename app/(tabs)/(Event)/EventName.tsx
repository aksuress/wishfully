import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { spacing, fontSizes } from "../../../utils/sizes";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";
import { color, fontFamily } from "../../../utils/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const EventName: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={[color.green, color.navyBlue]}
          start={{ x: 0.1, y: 0.9 }}
          end={{ x: 0.8, y: 1 }}
          style={styles.Background}
        >
          <Ionicons
            name="image-outline"
            size={wp(fontSizes[26])}
            color={color.white}
          />
          <Text
            style={{
              fontSize: wp(fontSizes[13]),
              fontFamily: fontFamily.DMSans_700,
              color: color.white,
            }}
          >
            Add cover photo
          </Text>
        </LinearGradient>
      </View>
      <View
        style={{
          flex: 2,
          gap: 15,
          justifyContent: "center",
          paddingHorizontal: "4%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <TouchableOpacity onPress={() => router.navigate("(Event)")}>
              <Entypo
                name="chevron-left"
                size={wp(fontSizes[30])}
                color={color.black}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: wp(fontSizes[30]),
                // lineHeight: 48,
                fontFamily: fontFamily.DMSans_700,
              }}
            >
              Event Name
            </Text>
          </View>
          <Entypo
            name="dots-three-vertical"
            size={wp(fontSizes[22])}
            color={color.black}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "2%",
            gap: 15,
          }}
        >
          <ShadowedView
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: "4%",
              paddingVertical: "2%",
              borderRadius: 8,
              ...shadowStyle({
                color: color.grey,
                opacity: 0.2,
                radius: 1,
                offset: [0.1, 0.1],
              }),
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[13]),
                // lineHeight: 16.52,
                fontFamily: fontFamily.Avenir_700,
                textAlign: "center",
              }}
            >
              1 Going
            </Text>
          </ShadowedView>
          <ShadowedView
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: "4%",
              paddingVertical: "2%",
              borderRadius: 8,
              ...shadowStyle({
                color: color.grey,
                opacity: 0.2,
                radius: 1,
                offset: [0.1, 0.1],
              }),
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[13]),
                // lineHeight: 16.52,
                fontFamily: fontFamily.Avenir_700,
                textAlign: "center",
              }}
            >
              10/07/2024
            </Text>
          </ShadowedView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "2%",
            gap: 8,
          }}
        >
          <LinearGradient
            colors={[color.blueGreen, color.navyBlue]}
            start={{ x: 0.0, y: 0.4 }}
            end={{ x: 1.0, y: 0.5 }}
            style={{
              borderRadius: 32,
              padding: "2%",
            }}
          >
            <Image
              source={require("./../../../assets/images/whiteuser.png")}
              style={{
                height: hp(fontSizes[1]),
              }}
            />
          </LinearGradient>
          <Text
            style={{
              color: "#00000099",
              fontSize: wp(fontSizes[12]),
              fontFamily: fontFamily.DMSans_500,
            }}
          >
            Created by{" "}
            <Text
              style={{
                fontFamily: fontFamily.Avenir_800,
                fontSize: wp(fontSizes[12]),
              }}
            >
              You
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ flex: 7 }}>
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default EventName;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.pureWhite,
  },
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
