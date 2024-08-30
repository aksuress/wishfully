import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { color, fontFamily } from "../../../utils/Color";
import { spacing, fontSizes } from "../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const index: React.FC = () => {
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
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: wp("4%"),
        }}
      >
        <Text style={styles.heading}>Events</Text>
        <Text
          style={{
            fontSize: wp(fontSizes[18]),
            //lineHeight: 24,
            color: color.black,
            fontFamily: fontFamily.DMSans_700,
          }}
        >
          This month
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          paddingHorizontal: "5%",
        }}
      >
        <TouchableOpacity
          onPress={() => router.navigate("/EventName")}
          style={{
            flex: 1.2,
            flexDirection: "row",
            borderRadius: 12,
            backgroundColor: color.pureWhite,
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                fontFamily: fontFamily.Avenir_800,
                fontSize: wp(fontSizes[22]),
                textAlign: "center",
              }}
            >
              Baby Shower
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    height: hp("4%"),
                    width: wp("8%"),
                    borderRadius: 32,
                    borderWidth: 2,
                    borderColor: color.blueGreen,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/group.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 32,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    height: hp("4%"),
                    width: wp("8%"),
                    borderRadius: 32,
                    borderWidth: 2,
                    borderColor: color.blueGreen,
                    marginLeft: wp("-2%"),
                  }}
                >
                  <Image
                    source={require("../../../assets/images/event.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 32,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_800,
                  fontSize: wp(fontSizes[10]),
                  //lineHeight: 18,
                  marginHorizontal: "2%",
                }}
              >
                Jane Smith
              </Text>
              <Text>and</Text>
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_800,
                  fontSize: wp(fontSizes[10]),
                  //lineHeight: 18,
                  marginHorizontal: "2%",
                }}
              >
                John Smith
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#DCF4ED",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.Avenir_500,
                    paddingHorizontal: "2%",
                    paddingVertical: "2%",
                    fontSize: wp(fontSizes[12]),
                    //lineHeight: 12.98,
                    color: color.black,
                  }}
                >
                  19/11/2024
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#DCF4ED",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: "2%",
                    paddingVertical: "2%",
                    fontSize: wp(fontSizes[12]),
                    //lineHeight: 12.98,
                    color: color.black,
                  }}
                >
                  22 invited
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("../../../assets/images/baby.jpg")}
              style={{
                flex: 1,
                borderRadius: 5,
                overflow: "hidden",
              }}
              resizeMode="cover"
            >
              <LinearGradient
                colors={[color.pureWhite, "rgba(255, 255, 255, 0)"]} // Adjust the colors and opacity as needed
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text
                  style={{
                    backgroundColor: "#0386BA40",
                    padding: "3%",
                    fontSize: wp(fontSizes[12]),
                    fontFamily: fontFamily.Avenir_800,
                    //lineHeight: 12.98,
                  }}
                >
                  Event
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 5.5,
          justifyContent: "flex-start",
          paddingTop: "15%",
          paddingHorizontal: "5%",
          gap: 15,
        }}
      >
        <Text
          style={{
            fontSize: wp(fontSizes[32]),
            fontFamily: fontFamily.DMSans_700,
            textAlign: "center",
          }}
        >
          No events yet...
        </Text>
        <View
          style={{
            paddingHorizontal: "12%",
            marginBottom: "5%",
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[24]),
              fontFamily: fontFamily.DMSans_500,
              textAlign: "center",
              lineHeight: 30,
            }}
          >
            Create an event to share with your guests, keep them up to date and
            share your wishlist!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/CreateEvent")}
          style={{
            backgroundColor: color.blueGreen,
            borderRadius: 8,
            paddingVertical: "5%",
          }}
        >
          <Text
            style={{
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.DMSans_700,
              // lineHeight: 22,
              textAlign: "center",
              color: color.white,
            }}
          >
            Create an Event
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.9 }}></View>
      <ShadowedView
        style={{
          flex: 0.1,
          ...shadowStyle({
            color: color.grey,
            opacity: 0.5,
            radius: 30,
            offset: [0, 1],
          }),
        }}
      ></ShadowedView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
  card: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "5%",
    borderRightWidth: 5,
    borderRightColor: "white",
    borderStyle: "dashed",
    gap: 20,
  },
});
