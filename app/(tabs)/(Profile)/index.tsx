import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";
import { color, fontFamily } from "../../../utils/Color";
import { spacing, fontSizes } from "../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const circleSize = wp("22%");

const index: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.main}>
      <View
        style={{
          flex: 2,
          paddingHorizontal: "6%",
          paddingTop: "6%",
          backgroundColor: color.white,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: wp(fontSizes[28]),
            lineHeight: 36,
          }}
        >
          Profile
        </Text>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={2}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingVertical: "2%",
            }}
          >
            <LinearGradient
              colors={[color.blueGreen, color.navyBlue]}
              style={[
                styles.gradient,
                { borderRadius: circleSize / 2, borderWidth: 3 },
              ]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 0, y: 1 }}
            >
              <View
                style={[
                  styles.innerView,
                  {
                    height: circleSize,
                    width: circleSize,
                    borderRadius: circleSize / 2,
                    backgroundColor: color.white,
                  },
                ]}
              >
                <Image
                  source={require("./../../../assets/images/user.png")}
                  style={{
                    height: hp(fontSizes[20]),
                    aspectRatio: 1,
                  }}
                />

                <AntDesign
                  name="pluscircle"
                  size={wp(fontSizes[30])}
                  color={color.blueGreen}
                  style={{
                    position: "absolute",
                    right: -0.5,
                    top: 0,
                    backgroundColor: color.white,
                    zIndex: 2,
                  }}
                />
              </View>
            </LinearGradient>
            <View
              style={{
                flex: 8,
                gap: 5,
                height: "100%",
                justifyContent: "center",
                paddingLeft: "3%",
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[25]),
                  //lineHeight: 26,
                  // marginBottom: "2%",
                }}
              >
                Firstname Surname
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_500,
                  fontSize: wp(fontSizes[22]),
                }}
              >
                DD/MM/YYYY
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      <View style={{ flex: 8 }}>
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  gradient: {
    position: "relative",
    padding: "0.5%",
    borderColor: "transparent",
    borderWidth: 2.5,
    zIndex: 1,
  },
  innerView: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});
