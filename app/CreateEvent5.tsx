import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-element-textinput";

const CreateEvent5: React.FC = () => {
  const router = useRouter();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    } else console.log("error uploading image");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
        }}
      >
        <Text style={styles.heading}>Create Event</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[20]),
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
            flex: 2,
            backgroundColor: color.green,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
          }}
        ></View>
        <View style={{ flex: 8, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 6.7,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            flex: 3.5,
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[32]),
              //lineHeight: 44,
            }}
          >
            Add a description of your event
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: wp(fontSizes[22]),
              // lineHeight: 27,
              paddingRight: "15%",
            }}
          >
            Give your guests some extra information about the event
          </Text>
        </View>

        <KeyboardAvoidingView style={styles.Inputstyle}>
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              padding: "4%",
            }}
            inputStyle={{
              textAlignVertical: "top",
              justifyContent: "flex-start",
            }}
            placeholder="Description..."
            placeholderTextColor={color.grey}
            fontFamily={fontFamily.DMSans_500Italic}
            multiline={true}
            numberOfLines={4}
          ></TextInput>
        </KeyboardAvoidingView>

        <View
          style={{
            flex: 2.5,
            justifyContent: "center",
            width: "100%",
            gap: 5,
          }}
        >
          <TouchableOpacity
            style={{
              padding: "4%",
              borderColor: color.green,
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: color.pureWhite,
            }}
            onPress={pickImage}
          >
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[22]),
                //lineHeight: 22,
                textAlign: "center",
                color: color.green,
              }}
            >
              Add Cover Photo
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_400,
              fontSize: wp(fontSizes[12]),
              lineHeight: 22,
              alignSelf: "center",
            }}
          >
            A cover photo is optional and can be added later
          </Text>
        </View>

        <View style={{ flex: 0.5 }}></View>
      </View>
      <ShadowedView
        style={{
          flex: 1.3,
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
            backgroundColor: color.blueGreen,
            flex: 3,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: color.green,
            marginRight: "5%",
            padding: "4%",
          }}
          onPress={() => router.navigate("CreateEvent6")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default CreateEvent5;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
  Inputstyle: {
    flex: 3.5,
    backgroundColor: color.pureWhite,
    borderColor: color.navyBlue,
    borderWidth: 0.5,
    borderRadius: 8,
  },
});
