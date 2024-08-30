import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { TextInput } from "react-native-element-textinput";

const ReviewEvent: React.FC = () => {
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
          paddingHorizontal: "5%",
        }}
      >
        <Text style={styles.heading}>Review Event</Text>

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
          flex: 8,
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[32]),
              //lineHeight: 48,
            }}
          >
            Here’s an overview of your event
          </Text>
        </View>
        <View style={{ flex: 8 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 4,
                padding: "3%",
                marginBottom: "5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: wp(fontSizes[10]),
                    //lineHeight: 15,
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: wp(fontSizes[13]),
                    //lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={wp(fontSizes[18])}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 4,
                padding: "3%",
                marginBottom: "5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: wp(fontSizes[10]),
                    //lineHeight: 15,
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: wp(fontSizes[13]),
                    //lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={wp(fontSizes[18])}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 4,
                padding: "3%",
                marginBottom: "5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: wp(fontSizes[10]),
                    //lineHeight: 15,
                  }}
                >
                  Location
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: wp(fontSizes[13]),
                    //lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={wp(fontSizes[18])}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 4,
                padding: "3%",
                marginBottom: "5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: wp(fontSizes[10]),
                    //lineHeight: 15,
                  }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: wp(fontSizes[13]),
                    //lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={wp(fontSizes[18])}
                color={color.green}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 4,
                padding: "3%",
                marginBottom: "5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: wp(fontSizes[13]),
                    //lineHeight: 16.52,
                  }}
                >
                  Please select your meal preference
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Octicons
                    name="dot-fill"
                    size={wp(fontSizes[24])}
                    color={color.black}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: wp(fontSizes[13]),
                      //lineHeight: 14,
                      //marginLeft: 10,
                    }}
                  >
                    Lamb Shank
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Octicons
                    name="dot-fill"
                    size={wp(fontSizes[24])}
                    color={color.black}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: wp(fontSizes[13]),
                      // lineHeight: 14,
                    }}
                  >
                    Sheppards Pie
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Octicons
                    name="dot-fill"
                    size={wp(fontSizes[24])}
                    color={color.black}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: wp(fontSizes[13]),
                      //lineHeight: 14,
                    }}
                  >
                    Lasagne
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={wp(fontSizes[18])}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 4,
                padding: "3%",
                marginBottom: "5%",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: wp(fontSizes[13]),
                    // lineHeight: 16.52,
                  }}
                >
                  What song would you like to add to the playlist?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Octicons
                    name="dot-fill"
                    size={wp(fontSizes[24])}
                    color={color.black}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: wp(fontSizes[13]),
                      //lineHeight: 14,
                    }}
                  >
                    taylor swift
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Octicons
                    name="dot-fill"
                    size={wp(fontSizes[24])}
                    color={color.black}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: wp(fontSizes[13]),
                      //lineHeight: 14,
                    }}
                  >
                    Eminem
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Octicons
                    name="dot-fill"
                    size={wp(fontSizes[24])}
                    color={color.black}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: wp(fontSizes[13]),
                      //lineHeight: 14,
                    }}
                  >
                    Adam Levine
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignSelf: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="pencil"
                  size={wp(fontSizes[18])}
                  color={color.green}
                />
              </View>
            </View>
          </ScrollView>
        </View>
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
          onPress={() => router.navigate("EventInvite")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[22]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Create Event
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default ReviewEvent;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    //lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
  },
});
