import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { TextInput } from "react-native-element-textinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Email: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={[color.blueGreen, color.navyBlue]}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 1.0, y: 0.95 }}
        style={styles.gradient}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "5%",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => router.navigate("CreateAccount")}
            style={{
              backgroundColor: "#00000040",
              padding: "1.5%",
              borderRadius: 8,
              marginLeft: "2%",
            }}
          >
            <Entypo
              name="chevron-left"
              size={hp(fontSizes[24])}
              color={color.white}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: wp(fontSizes[47]),
              lineHeight: 69.56,
              fontFamily: fontFamily.DMSans_700,
              marginLeft: "8%",
              color: color.white,
            }}
          >
            Wishfully
          </Text>
        </View>
        <View
          style={{
            flex: 2.5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View
          style={{
            flex: 6.5,
            justifyContent: "flex-start",
            width: "90%",
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[26]),
              lineHeight: 36,
              fontFamily: fontFamily.DMSans_700,
              color: "white",
              textAlign: "left",
            }}
          >
            Create account
          </Text>
          <TextInput
            placeholder=" Email..."
            style={styles.Inputstyle}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor={color.grey}
            fontFamily={fontFamily.DMSans_500Italic}
          />
          <TextInput
            placeholder=" Password..."
            style={styles.Inputstyle}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor={color.grey}
            fontFamily={fontFamily.DMSans_500Italic}
            mode="password"
          />

          <View
            style={{
              width: "100%",
              alignSelf: "center",
              marginVertical: "8%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: color.green,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: color.borderBlue,
                paddingVertical: "5%",
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[24]),
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.white,
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingHorizontal: "10%",
                marginVertical: "4%",
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_400,
                  fontSize: wp(fontSizes[12]),
                  lineHeight: 15.62,
                  textAlign: "center",
                  color: color.white,
                }}
              >
                By tapping Continue, you agree to our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    fontFamily: fontFamily.DMSans_700,
                  }}
                >
                  Terms
                </Text>{" "}
                and acknowledge that you have read our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontFamily: fontFamily.DMSans_700,
                    textDecorationStyle: "solid",
                  }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_400,
                fontSize: wp(fontSizes[20]),
                lineHeight: 21,
                textAlign: "center",
                color: color.white,
                marginVertical: "2%",
              }}
            >
              Have an account?
            </Text>
            <Pressable onPress={() => router.push("Login")}>
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[24]),
                  lineHeight: 21,
                  textAlign: "center",
                  color: color.white,
                  marginVertical: "2%",
                  textDecorationLine: "underline",
                  textDecorationStyle: "double",
                }}
              >
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Email;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Inputstyle: {
    backgroundColor: color.white,
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: 8,
    padding: "2%",
    marginVertical: "1%",
  },
});
