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

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#017CC108",
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
        <Text style={styles.heading}>Events</Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: "#000000",
          }}
        >
          This month
        </Text>
      </View>
      <View
        style={{
          flex: 2.5,
          padding: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => router.navigate("/EventName")}
          style={{
            flex: 1.2,
            flexDirection: "row",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#c1dece",
            backgroundColor: "rgba(255, 255, 255, 5)",
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Baby Shower
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ position: "relative", flexDirection: "row" }}>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/group.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 10,
                    marginLeft: -5,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/baby.jpeg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: 12,
                  lineHeight: 18,
                  marginHorizontal: 2,
                }}
              >
                Jane Smith
              </Text>
              <Text>and</Text>
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: 12,
                  lineHeight: 18,
                  marginHorizontal: 2,
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
                marginVertical: 5,
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
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    fontSize: 11,
                    lineHeight: 12.98,
                  }}
                >
                  19/11/2024
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#DCF4ED",
                  borderRadius: 4,
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    fontSize: 11,
                    lineHeight: 12.98,
                  }}
                >
                  22 invited
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("../../../assets/images/baby.jpeg")}
              resizeMethod="cover"
              style={{
                flex: 1,
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={["rgba(255, 255, 255, 5)", "rgba(255, 255, 255, 0)"]} // Adjust the colors and opacity as needed
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
                    padding: 5,
                    fontSize: 11,
                    fontWeight: "800",
                    lineHeight: 12.98,
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
          flex: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "500", textAlign: "center" }}>
          No events yet...
        </Text>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "black", textAlign: "center" }}
          >
            Create an event to share with your guests, keep them up to date and
            share your wishlist!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/CreateEvent")}
          style={{
            backgroundColor: "#00C187",
            marginHorizontal: 25,
            borderRadius: 5,
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "black",
              textAlign: "center",
              paddingVertical: 11,
              color: "white",
            }}
          >
            Create an Event
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  card: {
    flex: 7,
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRightWidth: 5,
    borderRightColor: "white",
    borderStyle: "dashed",
  },
});
