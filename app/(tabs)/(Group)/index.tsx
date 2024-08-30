import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { color, fontFamily } from "../../../utils/Color";
import { fontSizes, spacing } from "../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const index: React.FC = () => {
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
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: wp("4%"),
        }}
      >
        <Text style={styles.heading}>Groups</Text>
      </View>
      <View
        style={{
          flex: 2,
          paddingHorizontal: wp("4%"),
        }}
      >
        <TouchableOpacity
          onPress={() => router.navigate("/GroupName")}
          style={{
            flex: 1,
            flexDirection: "row",
            borderRadius: 8,
            backgroundColor: color.pureWhite,
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                fontSize: wp(fontSizes[22]),
                textAlign: "center",
                fontFamily: fontFamily.Avenir_800,
                //lineHeight: 22,
              }}
            >
              Bloggs Family
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#DCF4ED",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: "2%",
                  paddingVertical: "1%",
                  fontFamily: fontFamily.Avenir_500,
                  fontSize: wp(fontSizes[12]),
                }}
              >
                11 Members
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("./../../../assets/images/group.png")}
              style={{
                flex: 1,
                borderRadius: fontSizes.sm,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={[color.pureWhite, "rgba(255, 255, 255, 0)"]} // Adjust the colors and opacity as needed
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0 }}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 5.5,
          justifyContent: "center",
          gap: 20,
          paddingHorizontal: wp("4%"),
        }}
      >
        <Text
          style={{
            fontSize: wp(fontSizes[32]),
            textAlign: "center",
            fontFamily: fontFamily.DMSans_700,
          }}
        >
          No groups Yet...
        </Text>
        <View
          style={{
            paddingHorizontal: wp("8%"),
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[24]),
              lineHeight: 27,
              textAlign: "center",
              fontFamily: fontFamily.DMSans_500,
            }}
          >
            You aren't a part of any groups yet, create groups and invite your
            family and friends to share your wishlist with!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/CreateGroup")}
          style={{
            backgroundColor: color.blueGreen,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[24]),
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              paddingVertical: "4%",
              color: color.white,
              //lineHeight: 22,
            }}
          >
            Create a Group
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.9 }}></View>
      <ShadowedView
        style={{
          flex: 0.1,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 30,
            offset: [0, 1],
          }),
        }}
      ></ShadowedView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
  card: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "5%",
    borderRightWidth: 5,
    borderRightColor: color.white,
    borderStyle: "dashed",
    gap: 10,
  },
});
