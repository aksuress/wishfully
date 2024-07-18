import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
const MyAccount = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: 10,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 15,
          }}
        >
          Email Address
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderColor: "#0286BA40",
            borderWidth: 1.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Email"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 15,
          }}
        >
          Firstname
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderColor: "#0286BA40",
            borderWidth: 1.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Firstname"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 15,
          }}
        >
          Surname
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderColor: "#0286BA40",
            borderWidth: 1.5,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Surname"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 15,
          }}
        >
          Date of Birth
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={{
              width: "30%",
              borderColor: "#0286BA40",
              borderWidth: 1.5,
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Date"
            textContentType="birthdate"
            inputMode="numeric"
          />
          <TextInput
            style={{
              width: "40%",
              borderColor: "#0286BA40",
              borderWidth: 1.5,
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Month"
            textContentType="birthdateMonth"
            inputMode="text"
          />
          <TextInput
            style={{
              width: "20%",
              borderColor: "#0286BA40",
              borderWidth: 1.5,
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Year"
            textContentType="birthdateYear"
            inputMode="numeric"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity
          style={{
            width: "45%",
            borderColor: "#00A876",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 10,
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
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("Login")}
          style={{
            width: "45%",
            borderColor: "#DF0000",
            backgroundColor: "#DF00001A",
            borderWidth: 1.5,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "700",
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "sans-serif",
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 22,
            textAlign: "center",
            color: "#DF0000",
            textDecorationLine: "underline",
            textDecorationColor: "#DF0000",
            textDecorationStyle: "solid",
          }}
        >
          Delete Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyAccount;
