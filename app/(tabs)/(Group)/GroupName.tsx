import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";
import { color, fontFamily } from "../../../utils/Color";
import { spacing, fontSizes } from "../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const GroupName: React.FC = () => {
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
          paddingLeft: "4%",
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
          <TouchableOpacity onPress={() => router.navigate("(Group)")}>
            <Entypo
              name="chevron-left"
              size={wp(fontSizes[30])}
              color={color.black}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: wp(fontSizes[30]),
              lineHeight: 48,
              fontFamily: fontFamily.DMSans_700,
            }}
          >
            Group Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 20,
            paddingLeft: "2%",
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
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
              }}
            >
              1 member
            </Text>
          </ShadowedView>
          <TouchableOpacity
            style={{
              borderColor: color.green,
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: "10%",
              paddingVertical: "1.5%",
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[13]),
                //lineHeight: 16,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
                color: color.green,
              }}
            >
              Invite
            </Text>
          </TouchableOpacity>
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
              padding: "1.5%",
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

export default GroupName;

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
