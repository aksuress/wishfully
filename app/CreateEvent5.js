import {
  Platform,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const CreateEvent5 = () => {
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
        backgroundColor: "#F2F8FC",
      }}
    >
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Create Event</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "#DF0000", fontWeight: "700" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 7, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 6.7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 32,
              fontWeight: "700",
              lineHeight: 44,
            }}
          >
            Add a description of your event
          </Text>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "500",
              lineHeight: 27,
            }}
          >
            Give your guests some extra information about the event
          </Text>
          <View
            style={{
              height: 140,
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              marginVertical: 10,
              position: "relative",
              elevation: 2,
            }}
          >
            <Text
              style={{
                zIndex: 0,
                padding: 5,
                fontStyle: "italic",
                opacity: 0.5,
              }}
            >
              Description...
            </Text>
            <TextInput
              placeholderTextColor={"#00000073"}
              style={{
                height: 140,
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              padding: 8,
              borderColor: "#00C187",
              borderWidth: 1,
              borderRadius: 4,
              backgroundColor: "#FFFFFF",
            }}
            onPress={pickImage}
          >
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 18,
                fontWeight: "600",
                lineHeight: 22,
                textAlign: "center",
                color: "#00C187",
              }}
            >
              Add Cover Photo
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            A cover photo is optional and can be added later
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#FFFFFF",
          ...Platform.select({
            ios: {
              shadowColor: "black",
              shadowOffset: { width: 0, height: -3 }, // Only top shadow
              shadowOpacity: 0.5,
              shadowRadius: 3,
            },
            android: {
              elevation: 25,
            },
          }),
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#00C187",
            flex: 2,
            marginRight: 15,
            marginLeft: 15,
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              color: "#00C187",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              padding: 7,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#00C187",
            flex: 3,
            borderWidth: 1,
            borderColor: "#00C187",
            marginRight: 15,
          }}
          onPress={() => router.navigate("/CreateEvent6")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              paddingVertical: 7,
              paddingHorizontal: 5,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateEvent5;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",

    fontFamily: "sans-serif",
  },
  card: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRightWidth: 5,
    borderRightColor: "white",
    borderStyle: "dashed",
  },
  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
});
