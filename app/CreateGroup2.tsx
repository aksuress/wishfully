import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const CreateGroup2: React.FC = () => {
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
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
        }}
      >
        <Text style={styles.heading}>Create Group</Text>

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
            flex: 7,
            backgroundColor: color.green,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
          }}
        ></View>
        <View style={{ flex: 3, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 5.5,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: "5%",
          gap: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: "6%",
          }}
        >
          <View
            style={{
              flex: 9,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[32]),
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 48,
                textAlign: "left",
              }}
            >
              Share your wishlists with ‘Groups Name’
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: color.blueGreen,
            paddingVertical: spacing.md,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flex: 7.5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                borderRadius: 64,
                padding: "3%",
                backgroundColor: "#2a6702",
              }}
            >
              <Image
                source={require("./../assets/images/whiteuser.png")}
                style={{
                  height: hp(fontSizes[8]),
                }}
              />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: wp(fontSizes[22]),
                fontFamily: fontFamily.DMSans_700,
                //lineHeight: 22,
              }}
            >
              Firstname’s Birthday
            </Text>
          </View>
          <View
            style={{
              flex: 2.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign
              name="minuscircleo"
              size={wp(fontSizes[28])}
              color={color.white}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 8,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[12]),
                fontFamily: fontFamily.DMSans_500Italic,
                lineHeight: 20,
              }}
            >
              Create more wishlists in ‘My Profile’ and add the wishlist to the
              group later.
            </Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          ></View>
        </View>
      </View>
      <View style={{ flex: 2 }}></View>
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
          onPress={() => router.navigate("CreateGroup3")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Create Group
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default CreateGroup2;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
});
