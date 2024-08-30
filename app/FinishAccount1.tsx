import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { TextInput } from "react-native-element-textinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FinishAccount1: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <View
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "6%",
        }}
      >
        <Text style={styles.heading}>Finish Account</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontSize: wp(fontSizes[20]),
              fontFamily: fontFamily.DMSans_700,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 5,
            backgroundColor: color.green,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
          }}
        ></View>
        <View style={{ flex: 5, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 7,
          gap: 25,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: "5%",
          paddingTop: "25%",
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: "5%" }}>
          <View style={{ flex: 9.5 }}>
            <Text
              style={{
                fontSize: wp(fontSizes[32]),
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 55,
              }}
            >
              Welcome!
            </Text>
            <Text
              style={{
                fontSize: wp(fontSizes[32]),
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 58,
              }}
            >
              Let’s finish creating your account
            </Text>
          </View>
          <View style={{ flex: 0.5 }}></View>
        </View>
        <TextInput
          placeholder=" Firstname..."
          style={styles.Inputstyle}
          inputStyle={{ fontSize: wp(fontSizes[20]) }}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
        <TextInput
          placeholder=" Surname..."
          style={styles.Inputstyle}
          inputStyle={{ fontSize: wp(fontSizes[20]) }}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
      </View>

      <ShadowedView
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: color.white,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.25,
            radius: 30,
            offset: [0, -2],
          }),
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1.5,
            borderColor: color.green,
            borderRadius: 4,
            flex: 2,
            marginHorizontal: "5%",
            paddingVertical: "4%",
            paddingHorizontal: "2%",
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              color: color.green,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: color.green,
            flex: 3,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: color.green,
            marginRight: "5%",
            padding: "4%",
          }}
          onPress={() => router.navigate("FinishAccount2")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default FinishAccount1;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
  Inputstyle: {
    backgroundColor: color.pureWhite,
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: "2%",
  },
});
