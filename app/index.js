import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const index = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   webClientId:
  //     "520349641201-rr1tblou5suqfbvtae4deqkpj4ejp2o1.apps.googleusercontent.com",
  //   androidClientId:
  //     "520349641201-e7ktk4jetmbna727bgc4c3kut4fltg8h.apps.googleusercontent.com",
  //   iosClientId:
  //     "520349641201-fdsejvc88rebjlbjhe9v1noalj72nb6u.apps.googleusercontent.com",
  // });
  const router = useRouter();

  // useEffect(() => {
  //   signIn();
  // }, [response]);

  // async function signIn() {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if (response?.type === "success") {
  //       await getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setUserInfo(JSON.parse(user));
  //   }
  // }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      console.log(user);
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };
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
          }}
        >
          <View
            style={{
              flex: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../assets/images/login.png")} />
          </View>
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 47,
                fontWeight: "700",
                lineHeight: 60,
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              Wishfully
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View
            style={{
              flex: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "90%",
                backgroundColor: "#00C187",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#0386BA40",
                padding: 8,
                elevation: 2,
                marginBottom: 15,
              }}
              onPress={() => router.navigate("CreateAccount")}
            >
              <Text
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: "800",
                  lineHeight: 22,
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Create account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.navigate("(Profile)")}
              style={{
                width: "90%",
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#0386BA40",
                padding: 8,
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: "900",
                  lineHeight: 22,
                  textAlign: "center",
                  color: "#00A879",
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
