import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Preference4 = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2F8FC",
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
        <Text style={styles.heading}>Review Event</Text>

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
          flex: 8,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            flex: 3,
            width: "90%",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 32,
              fontWeight: "700",
              lineHeight: 48,
            }}
          >
            Here’s an overview of your event
          </Text>
        </View>
        <View style={{ flex: 7, width: "90%" }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 10,
                    fontWeight: "500",
                    lineHeight: 15,
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 22,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={16} color="#00C187" />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 10,
                    fontWeight: "500",
                    lineHeight: 15,
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 22,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={16} color="#00C187" />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 10,
                    fontWeight: "500",
                    lineHeight: 15,
                  }}
                >
                  Location
                </Text>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 22,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={16} color="#00C187" />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 10,
                    fontWeight: "500",
                    lineHeight: 15,
                  }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 22,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons name="pencil" size={16} color="#00C187" />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 16.52,
                  }}
                >
                  Please select your meal preference
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color="black" />
                  <Text
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 14,
                      fontWeight: "500",
                      lineHeight: 14,
                      marginLeft: 10,
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
                  }}
                >
                  <Octicons name="dot-fill" size={24} color="black" />
                  <Text
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 14,
                      fontWeight: "500",
                      lineHeight: 14,
                      marginLeft: 10,
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
                  }}
                >
                  <Octicons name="dot-fill" size={24} color="black" />
                  <Text
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 14,
                      fontWeight: "500",
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    Lasagne
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons name="pencil" size={16} color="#00C187" />
            </View>
          </ScrollView>
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
          onPress={() => router.navigate("/EventInvite")}
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
            Create Event
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Preference4;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: "sans-serif",
  },
});
