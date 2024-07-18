import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const WishList = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#DEF3F1",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#00C187",
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: "#FFFFFF",
          marginVertical: 25,
        }}
      >
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AntDesign name="pluscircleo" size={24} color="#00C187" />
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "900",
              lineHeight: 22,
              color: "#00C187",
              marginLeft: 14,
            }}
          >
            Create New Wishlist
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("(tabs)/CreateWishList")}
          style={{
            flex: 5,
            alignItems: "flex-end",
          }}
        >
          <Entypo name="chevron-right" size={24} color="#00C187" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.5,
          borderColor: "#00C187",
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FontAwesome name="user-circle" size={25} color="#00A876" />
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "900",
              lineHeight: 22,
              color: "#000000",
              marginLeft: 14,
            }}
          >
            Firstname’s Birthday
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            alignItems: "flex-end",
          }}
        >
          <Entypo name="chevron-right" size={24} color="#00C187" />
        </View>
      </View>
    </View>
  );
};

export default WishList;
