import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-element-textinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter, Link } from "expo-router";
import { signIn, type SignInInput } from "aws-amplify/auth";

const Login: React.FC = () => {
  const [onfocusEmail, setonFocusEmail] = useState(false);
  const [onfocusPass, setonFocusPass] = useState(false);
  const router = useRouter();
  const [username, setusername] = useState("kngyogan@gmail.com");
  const [password, setpassword] = useState("pmdg@#1234");

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      console.log("signin called");
      if (isSignedIn) {
        router.navigate("FinishAccount1");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={{
          flex: 3,
          paddingHorizontal: "5%",
        }}
        resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginTop: "8%",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => router.navigate("CreateAccount")}
            style={{
              backgroundColor: "#00000040",
              padding: "2%",
              marginLeft: "2%",
              borderRadius: 8,
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
            flex: 2,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 6,
          justifyContent: "flex-start",
          paddingHorizontal: "5%",
        }}
      >
        <View style={{ flex: 5 }}>
          <Text
            style={{
              fontSize: wp(fontSizes[26]),
              lineHeight: 36,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "left",
              marginTop: "8%",
            }}
          >
            Log in
          </Text>
          <TextInput
            placeholder=" Email..."
            style={[
              styles.Inputstyle,
              { backgroundColor: onfocusEmail ? "#E1EEF8" : color.white },
            ]}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor="#00000073"
            fontFamily={fontFamily.DMSans_500Italic}
            onFocus={() => setonFocusEmail(true)}
            onBlur={() => setonFocusEmail(false)}
            value={username}
          />
          <TextInput
            placeholder=" Password..."
            style={[
              styles.Inputstyle,
              { backgroundColor: onfocusPass ? "#E1EEF8" : color.white },
            ]}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor="#00000073"
            fontFamily={fontFamily.DMSans_500Italic}
            onFocus={() => setonFocusPass(true)}
            onBlur={() => setonFocusPass(false)}
            mode="password"
            value={password}
          />
          <Pressable
            onPress={() => {
              handleSignIn({ username, password });
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[24]),
                lineHeight: 21,
                textAlign: "center",
                // color: color.white,
                marginVertical: "2%",
                textDecorationLine: "underline",
                textDecorationStyle: "double",
              }}
            >
              Log in
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: wp(fontSizes[13]),
              lineHeight: 21,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              color: color.navyBlue,
              marginVertical: "0.5%",
            }}
          >
            Forgotten Password?
          </Text>
          <Text
            style={{
              fontSize: wp(fontSizes[12]),
              lineHeight: 22,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              color: color.black,
              marginTop: "4%",
              opacity: 0.5,
            }}
          >
            or
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              gap: 20,
              marginBottom: "5%",
            }}
          >
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderRadius: 8,
                borderColor: color.green,
                padding: "5%",
                backgroundColor: color.white,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[22]),
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.green,
                }}
              >
                Sign in with Facebook
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderRadius: 8,
                borderColor: color.green,
                padding: "5%",
                backgroundColor: color.white,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 18,
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.green,
                }}
              >
                Sign in with Google
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 10,

              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 21,
                fontFamily: fontFamily.DMSans_700,
                textAlign: "center",
                marginVertical: 10,
                color: color.black,
                opacity: 0.5,
              }}
            >
              Need an account?
            </Text>
            <TouchableOpacity onPress={() => router.navigate("Email")}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 27,
                  fontFamily: fontFamily.DMSans_700,
                  textAlign: "center",
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                  color: color.navyBlue,
                }}
              >
                Sign Up!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    position: "absolute",
    bottom: 0,
  },
  Inputstyle: {
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: 8,
    padding: "2%",
    marginVertical: "2%",
  },
});
