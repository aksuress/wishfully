import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";

import { useRouter } from "expo-router";
const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2F8FC",
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
            marginTop: 15,
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => router.navigate("CreateAccount")}
            style={{
              backgroundColor: "#00000040",
              padding: 5,
            }}
          >
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 47,
              fontWeight: "700",
              lineHeight: 69.56,
              fontFamily: "sans-serif",
              marginLeft: 25,
              color: "white",
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
      </ImageBackground>
      <View
        style={{
          flex: 6,
          justifyContent: "flex-start",
          paddingHorizontal: "5%",
        }}
      >
        <KeyboardAvoidingView style={{ flex: 5 }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "700",
              lineHeight: 36,
              fontFamily: "sans-serif",
              textAlign: "left",
            }}
          >
            Login
          </Text>

          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              marginVertical: 8,
              position: "relative",
              elevation: 2,
              padding: 5,
            }}
          >
            <Text
              style={{
                zIndex: 0,
                padding: 10,
                fontStyle: "italic",
                opacity: 0.5,
                fontWeight: "500",
                fontSize: 16,
                fontFamily: "sans-serif",
              }}
            >
              Email...
            </Text>
            <TextInput
              placeholderTextColor={"#00000073"}
              keyboardAppearance="dark"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              marginVertical: 8,
              position: "relative",
              elevation: 2,
              padding: 5,
            }}
          >
            <Text
              style={{
                zIndex: 0,
                padding: 10,
                fontStyle: "italic",
                opacity: 0.5,
                fontWeight: "500",
                fontSize: 16,
                fontFamily: "sans-serif",
              }}
            >
              Password...
            </Text>
            <TextInput
              placeholderTextColor={"#00000073"}
              keyboardAppearance="dark"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            ></TextInput>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 21,
              fontFamily: "sans-serif",
              textAlign: "center",
              textDecorationLine: "underline",
              color: "#017CC1",
              marginVertical: 10,
            }}
          >
            Forgotten Password?
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              lineHeight: 22,
              fontFamily: "sans-serif",
              textAlign: "center",
              color: "#017CC1",
            }}
          >
            or
          </Text>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 5,
            width: "100%",
            alignSelf: "center",
            marginVertical: 30,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: "#00C187",
              padding: 15,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 18,
                fontWeight: "700",
                lineHeight: 22,
                textAlign: "center",
                color: "#00C187",
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
              borderColor: "#00C187",
              padding: 15,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 18,
                fontWeight: "700",
                lineHeight: 22,
                textAlign: "center",
                color: "#00C187",
              }}
            >
              Sign in with Google
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 21,
              fontFamily: "sans-serif",
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Need an account?
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              lineHeight: 27,
              fontFamily: "sans-serif",
              textAlign: "center",
              textDecorationLine: "underline",
              color: "#017CC1",
            }}
          >
            Sign Up
          </Text>
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
});
