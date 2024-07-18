import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";

import { useRouter, Link } from "expo-router";
const CreateAccount = () => {
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
            onPress={() => router.navigate("./")}
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
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
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
          </View>
          <View
            style={{
              flex: 3,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => router.navigate("Email")}
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#0386BA40",
                paddingHorizontal: 10,
                paddingVertical: 15,
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
                  color: "#00A876",
                }}
              >
                Continue with Email
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#0386BA40",
                paddingHorizontal: 10,
                paddingVertical: 15,
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
                  color: "#00A876",
                }}
              >
                Continue with Facebook
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#0386BA40",
                paddingHorizontal: 10,
                paddingVertical: 15,
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
                  color: "#00A876",
                }}
              >
                Continue with Google
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 25,
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
                  }}
                >
                  Terms
                </Text>{" "}
                and acknowledge that you have read our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                  }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              width: "100%",

              justifyContent: "center",
            }}
          >
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

export default CreateAccount;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
