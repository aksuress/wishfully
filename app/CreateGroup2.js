import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, useRouter } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const CreateGroup2 = () => {
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
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Create Group</Text>

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
        <View style={{ flex: 7, backgroundColor: "#00C187" }}></View>
        <View style={{ flex: 3, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginBottom: 25 }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "400",
              lineHeight: 48,
            }}
          >
            Share your wishlists with 'Groups Name'
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#00C187",
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 5,
          }}
        >
          <FontAwesome name="user-circle-o" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Firstname’s Birthday
          </Text>
          <AntDesign name="minuscircleo" size={24} color="white" />
        </View>
        <View
          style={{
            marginTop: 7,
            marginRight: 31,
            width: "80%",
            // borderWidth: 2,
            // borderColor: "red",
          }}
        >
          <Text
            style={{ textAlign: "left", fontSize: 12, fontStyle: "italic" }}
          >
            Create more wishlists in ‘My Profile’ and add the wishlist to the
            group later.
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

          shadowColor: "black",
          shadowOffset: { width: 1, height: 5 },
          //shadowOpacity: 0.8,
          shadowRadius: 2,
          // Android Shadow
          elevation: 18,
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
          onPress={() => router.navigate("/CreateGroup3")}
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
            Create Group
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup2;

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
});
