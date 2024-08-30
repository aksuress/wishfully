import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-element-textinput";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
const Product: React.FC = () => {
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
          flex: 3.5,
          zIndex: 1,
        }}
      >
        <ImageBackground
          source={require("../assets/images/puppy.jpg")}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "5%",
          }}
          resizeMode="stretch"
        >
          <Link
            href="https://www.amazon.co.uk/WEOK-Heartbeat-Stuffed-Separation-Behavioral/dp/B09FLFNH6P/ref=sr_1_14?crid=ZKLG4G0P3KML&keywords=pet+cuddly+toys+for+dogs&qid=1667317692&qu=eyJxc2MiOiI0LjIyIiwicXNhIjoiMy4zNSIsInFzcCI6IjIuODgifQ%3D%3D&sprefix=pet+cudly+%2Caps%2C75&sr=8-14"
            asChild
          >
            <TouchableOpacity
              style={{
                backgroundColor: color.white,
                paddingHorizontal: "10%",
                paddingVertical: "3%",
                elevation: 2,
                opacity: 0.8,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[22]),
                  lineHeight: 22,
                  textAlign: "center",
                }}
              >
                View Product
              </Text>
            </TouchableOpacity>
          </Link>
        </ImageBackground>
      </View>

      <ShadowedView
        style={{
          flex: 0.2,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 30,
            offset: [0, -2],
          }),
        }}
      ></ShadowedView>

      <View
        style={{
          flex: 4.8,
          paddingHorizontal: "4%",
        }}
      >
        <View style={{ flex: 4.5, paddingHorizontal: "2%" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 7.5,
                paddingVertical: "4%",
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: wp(fontSizes[30]),
                  //lineHeight: 48,
                  textAlign: "left",
                }}
              >
                Puppy Heartbeat Stuffed Animal
              </Text>
            </View>
            <View style={{ flex: 2.5 }}></View>
          </View>

          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[28]),
              //lineHeight: 22,
              textAlign: "left",
            }}
          >
            £26.99
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
            placeholder=" Add notes about the product..."
            placeholderTextColor={color.black}
            fontFamily={fontFamily.DMSans_500Italic}
            multiline={true}
            numberOfLines={4}
          ></TextInput>
        </KeyboardAvoidingView>
        <View style={{ flex: 2 }}></View>
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
            Edit
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
          onPress={() => router.navigate("(Profile)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Add Item
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  Inputstyle: {
    flex: 3.5,
    backgroundColor: color.pureWhite,
    borderColor: color.black,
    borderWidth: 0.5,
    borderRadius: 8,
    marginHorizontal: "2%",
    marginBottom: "14%",
  },
});
