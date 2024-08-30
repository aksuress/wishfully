import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useRouter, Link } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { fontSizes, spacing } from "../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CreateAccount: React.FC = () => {
  const router = useRouter();
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
            flex: 1,
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "5%",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => router.navigate("/")}
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
            flex: 1.5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View
          style={{
            flex: 6,
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flex: 1.5,
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[26]),
                lineHeight: 36,
                fontFamily: fontFamily.DMSans_700,
                color: color.white,
                textAlign: "left",
              }}
            >
              Create account
            </Text>
          </View>
          <View
            style={{
              flex: 5,
              width: "100%",
              justifyContent: "flex-start",
              gap: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => router.navigate("Email")}
              style={{
                width: "100%",
                backgroundColor: color.white,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: color.borderBlue,

                paddingVertical: "5%",
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[24]),
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.blueGreen,
                }}
              >
                Continue with Email
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "100%",
                backgroundColor: color.white,
                borderRadius: spacing.sm,
                borderWidth: 1,
                borderColor: color.blueGreen,

                paddingVertical: "5%",
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[24]),
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.blueGreen,
                }}
              >
                Continue with Facebook
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: color.white,
                borderRadius: spacing.sm,
                borderWidth: 1,
                borderColor: color.borderBlue,

                paddingVertical: "5%",
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[24]),
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.blueGreen,
                }}
              >
                Continue with Google
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: "10%",
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
                    fontFamily: fontFamily.DMSans_700,
                    textDecorationStyle: "solid",
                  }}
                >
                  Terms
                </Text>{" "}
                and acknowledge that you have read our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    fontFamily: fontFamily.DMSans_700,
                  }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 3.5,
              width: "100%",
              justifyContent: "flex-start",
              paddingTop: "25%",
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.DMSans_400,
                fontSize: wp(fontSizes[20]),
                lineHeight: 21,
                textAlign: "center",
                color: color.white,
                marginBottom: "2%",
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
                  textDecorationStyle: "solid",
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

export default CreateAccount;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
