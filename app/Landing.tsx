import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { fontSizes, spacing } from "../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Landing: React.FC = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const dynamicStyles = {
    loginImage: {
      right: width * 0.3,
    },
    star1: {
      left: width * 0.18,
      top: height * 0.25,
    },
    star2: {
      right: width * 0.35,
      top: height * 0.15,
    },
    star3: {
      left: width * 0.47,
      bottom: height * 0.2,
    },
    star4: {
      right: width * 0.12,
      bottom: height * 0.15,
    },
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={[color.blueGreen, color.navyBlue]}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1.0, y: 0.7 }}
        style={styles.gradient}
      >
        <View
          style={{
            flex: 3.5,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            source={require("../assets/images/login.png")}
            style={{
              position: "absolute",
              zIndex: 1,
              right: wp("31%"),
            }}
          />
          <Image
            source={require("../assets/images/star-1.png")}
            style={{
              position: "absolute",
              left: wp("20%"), // 20% from the left edge
              top: hp("8%"), // 40% from the top edge
              zIndex: 2,
            }}
          />
          <Image
            source={require("../assets/images/star-2.png")}
            style={{
              position: "absolute",
              right: wp("30%"), // 20% from the right edge
              top: hp("5%"), // 20% from the top edge
              zIndex: 2,
            }}
          />
          <Image
            source={require("../assets/images/star-3.png")}
            style={{
              position: "absolute",
              left: wp("44%"), // 50% from the left edge
              top: hp("25%"), // 20% from the bottom edge
              zIndex: 2,
            }}
          />
          <Image
            source={require("../assets/images/star-4.png")}
            style={{
              position: "absolute",
              right: wp("8%"), // 30% from the right edge
              bottom: hp("5%"), // 30% from the bottom edge
              zIndex: 2,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              marginLeft: "2.5%",
            }}
          >
            <Image source={require("../assets/images/star-5.png")} />
          </View>
          <View
            style={{
              flex: 7.5,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[47]),
                //lineHeight: 60,
                fontFamily: fontFamily.DMSans_700,
                color: color.white,
              }}
            >
              Wishfully
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: color.green,
              borderRadius: spacing.sm,
              borderWidth: 1,
              borderColor: color.borderBlue,
              padding: "4.5%",
              elevation: 2,
            }}
            onPress={() => router.navigate("CreateAccount")}
          >
            <Text
              style={{
                fontFamily: fontFamily.Avenir_700,
                fontSize: wp(fontSizes[22]),
                //lineHeight: 22,
                textAlign: "center",
                color: color.pureWhite,
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.navigate("Login")}
            style={{
              width: "90%",
              backgroundColor: color.white,
              borderRadius: spacing.sm,
              borderWidth: 1,
              borderColor: color.borderBlue,
              padding: "4.5%",
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.Avenir_700,
                fontSize: wp(fontSizes[22]),
                //lineHeight: 22,
                textAlign: "center",
                color: color.blueGreen,
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
