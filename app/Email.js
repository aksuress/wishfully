import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";

import { useRouter } from "expo-router";
const Email = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={["#00C187", "#017CC1"]}
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
        <View
          style={{
            flex: 6.5,
            justifyContent: "flex-start",
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "700",
              lineHeight: 36,
              fontFamily: "sans-serif",
              color: "white",
              textAlign: "left",
            }}
          >
            Create account
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
                opacity: 0.4,
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
                opacity: 0.4,
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
          <View
            style={{ width: "100%", alignSelf: "center", marginVertical: 30 }}
          >
            <TouchableOpacity
              onPress={() => router.navigate("(tabs)")}
              style={{
                width: "100%",
                backgroundColor: "#00C187",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#0386BA40",
                padding: 15,
                elevation: 2,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: "700",
                  lineHeight: 22,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingHorizontal: 25,
                marginVertical: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 15.62,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                By tapping Continue, you agree to our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "700",
                  }}
                >
                  Terms
                </Text>{" "}
                and acknowledge that you have read our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "700",
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
                fontFamily: "sans-serif",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                textAlign: "center",
                color: "#FFFFFF",
                marginVertical: 5,
              }}
            >
              Have an account?
            </Text>
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                fontWeight: "700",
                lineHeight: 21,
                textAlign: "center",
                color: "#FFFFFF",
                marginVertical: 5,
                textDecorationLine: "underline",
              }}
            >
              Log in
            </Text>
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
});
