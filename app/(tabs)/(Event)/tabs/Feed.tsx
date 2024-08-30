import {
  View,
  Dimensions,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { color, fontFamily } from "../../../../utils/Color";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { fontSizes } from "@/utils/sizes";
import { TextInput } from "react-native-element-textinput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Feed: React.FC = () => {
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageHeight = windowWidth / 3;
  const imageWidth = windowWidth / 1.8;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: color.lightBlue,
      }}
    >
      <ShadowedView
        style={{
          flex: 0.3,
          width: "100%",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.5,
            radius: 50,
            offset: [0, 2],
          }),
        }}
      ></ShadowedView>
      <View
        style={{
          flex: 9.6,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: "4%",
          paddingTop: "10%",
          paddingBottom: "4%",
        }}
      >
        <View
          style={{
            gap: 10,
          }}
        >
          <Image
            source={require("./../../../../assets/images/feed.png")}
            style={{
              height: hp("20%"),
              width: wp("35%"),
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: wp(fontSizes[24]),
              //lineHeight: 25,
              fontFamily: fontFamily.DMSans_500,
              paddingHorizontal: "10%",
              textAlign: "center",
            }}
          >
            Send messages and share those important updates with others in the
            group
          </Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Type..."
            style={styles.Inputstyle}
            inputStyle={{
              fontSize: wp(fontSizes[20]),
              fontFamily: fontFamily.DMSans_400,
            }}
            placeholderTextColor={color.black}
            renderRightIcon={() => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gap: 20,
                }}
              >
                <Ionicons
                  name="mic-outline"
                  size={wp(fontSizes[24])}
                  color={color.black}
                />
                <Ionicons
                  name="images-outline"
                  size={wp(fontSizes[24])}
                  color={color.black}
                />
                <AntDesign
                  name="link"
                  size={wp(fontSizes[24])}
                  color={color.black}
                />
              </View>
            )}
          />
        </KeyboardAvoidingView>
      </View>
      <ShadowedView
        style={{
          flex: 0.1,
          width: "100%",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.8,
            radius: 20,
            offset: [0, -2],
          }),
        }}
      ></ShadowedView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  Inputstyle: {
    width: "100%",
    backgroundColor: color.pureWhite,
    borderColor: color.borderBlue,
    //borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: "3%",
    elevation: 1,
  },
});
