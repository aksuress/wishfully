import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "@/utils/Color";
import { fontSizes, spacing } from "@/utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const CreateWishList: React.FC = () => {
  const router = useRouter();

  const windowWidth = Dimensions.get("window").width;

  const imageDimension = windowWidth / 6; // Dividing by 4 to get 25% of the screen width

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View style={{ flex: 2 }}>
        {/* <LinearGradient
          colors={[color.green, color.navyBlue]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 1, y: 0.9 }}
          style={styles.Background}
        >
          <Ionicons name="image-outline" size={24} color={color.white} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontFamily.DMSans_700,
              color: color.white,
            }}
          >
            Add cover photo
          </Text>
        </LinearGradient> */}
        <ImageBackground
          source={require("./../../../assets/images/party.jpg")}
          style={{
            flex: 1,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <LinearGradient
            colors={[color.pureWhite, "rgba(255, 255, 255, 0)"]} // Adjust the colors and opacity as needed
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: "5%",
            }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          >
            <Image source={require("../../../assets/images/profile.png")} />
          </LinearGradient>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 2.2,
          justifyContent: "flex-start",
          backgroundColor: color.pureWhite,
          gap: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: "3%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => router.navigate("(Profile)")}>
              <Entypo
                name="chevron-left"
                size={wp(fontSizes[30])}
                color={color.black}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: wp(fontSizes[30]),
                lineHeight: 48,
                fontFamily: fontFamily.DMSans_700,
                marginLeft: "2%",
              }}
            >
              Leroy’s Birthday
            </Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: color.green,
              borderRadius: 16,
              padding: "1%",
            }}
          >
            <Entypo
              name="dots-three-vertical"
              size={wp(fontSizes[20])}
              color={color.green}
            />
          </View>
        </View>
        <View
          style={{
            width: "92%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: "5%",
            gap: 5,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: color.navyBlue,
              paddingHorizontal: "4%",
              paddingVertical: "2%",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[12]),
                lineHeight: 16,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
                color: color.white,
              }}
            >
              25/11/2024
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: "4%",
              paddingVertical: "2%",

              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[13]),
                lineHeight: 16,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
              }}
            >
              Group Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: "4%",
              paddingVertical: "2%",
              backgroundColor: "#DCF4ED",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[13]),
                lineHeight: 16,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
              }}
            >
              Group Name
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", paddingHorizontal: "4%" }}>
          <TouchableOpacity
            onPress={() => router.navigate("AddItem")}
            style={{
              backgroundColor: color.blueGreen,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: "3.5%",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[22]),
                lineHeight: 22,
                fontFamily: fontFamily.DMSans_700,
                color: color.white,
              }}
            >
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 5.8,
          width: "100%",
          backgroundColor: color.lightBlue,
        }}
      >
        <ShadowedView
          style={{
            flex: 0.1,
            ...shadowStyle({
              color: color.grey,
              opacity: 1,
              radius: 30,
              offset: [0, 3],
            }),
          }}
        ></ShadowedView>
        <View
          style={{
            flex: 6.2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[26]),
              lineHeight: 36,
              fontFamily: fontFamily.DMSans_700,
            }}
          >
            No items in your wishlist
          </Text>
        </View>
        <View
          style={{
            flex: 3.6,
            alignItems: "center",
            paddingHorizontal: "5%",
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[12]),
              lineHeight: 13,
              fontFamily: fontFamily.DMSans_700,
              marginVertical: "5%",
              textAlign: "left",
              width: "100%",
            }}
          >
            Find products on
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                height: imageDimension,
                width: imageDimension,
                gap: 10,
              }}
            >
              <Image
                source={require("./../../../assets/images/amazon.png")}
                style={{
                  // flex: 1,
                  height: imageDimension,
                  width: imageDimension,
                  backgroundColor: color.white,
                  borderRadius: 4,
                  borderWidth: 0.1,
                  borderColor: "black",
                }}
                resizeMode="stretch"
                resizeMethod="scale"
              />
              <Text
                style={{
                  fontSize: wp(fontSizes[12]),
                  textAlign: "center",
                  lineHeight: 13,
                  fontFamily: fontFamily.Avenir_500,
                }}
              >
                Amazon
              </Text>
            </View>
            <View
              style={{
                height: imageDimension,
                width: imageDimension,
                gap: 10,
              }}
            >
              <Image
                source={require("./../../../assets/images/alibaba.png")}
                style={{
                  height: imageDimension,
                  width: imageDimension,
                  backgroundColor: color.white,
                  borderRadius: 4,
                  borderWidth: 0.1,
                  borderColor: "black",
                }}
                resizeMode="stretch"
                resizeMethod="scale"
              />
              <Text
                style={{
                  fontSize: wp(fontSizes[12]),
                  textAlign: "center",
                  lineHeight: 13,
                  fontFamily: fontFamily.Avenir_500,
                }}
              >
                Allibaba
              </Text>
            </View>
            <View
              style={{
                height: imageDimension,
                width: imageDimension,
                gap: 10,
              }}
            >
              <Image
                source={require("./../../../assets/images/ebay.png")}
                style={{
                  height: imageDimension,
                  width: imageDimension,
                  backgroundColor: color.white,
                  borderRadius: 4,
                  borderWidth: 0.1,
                  borderColor: "black",
                }}
                resizeMode="contain"
                resizeMethod="scale"
              />
              <Text
                style={{
                  fontSize: wp(fontSizes[12]),
                  textAlign: "center",
                  lineHeight: 13,
                  fontFamily: fontFamily.Avenir_500,
                }}
              >
                Ebay
              </Text>
            </View>
            <View
              style={{
                height: imageDimension,
                width: imageDimension,
                gap: 10,
              }}
            >
              <Image
                source={require("./../../../assets/images/Asos.png")}
                style={{
                  height: imageDimension,
                  width: imageDimension,
                  backgroundColor: color.white,
                  borderRadius: 4,
                  borderWidth: 0.1,
                  borderColor: "black",
                }}
                resizeMode="contain"
                resizeMethod="scale"
              />
              <Text
                style={{
                  fontSize: wp(fontSizes[12]),
                  textAlign: "center",
                  lineHeight: 13,
                  fontFamily: fontFamily.Avenir_500,
                }}
              >
                Asos
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ShadowedView
        style={{
          flex: 0.1,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 30,
            offset: [0, 1],
          }),
        }}
      ></ShadowedView>
    </SafeAreaView>
  );
};

export default CreateWishList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
