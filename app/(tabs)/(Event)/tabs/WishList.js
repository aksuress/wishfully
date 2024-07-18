import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

const WishList = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          height: 86,
          width: 126,
        }}
      >
        <ImageBackground
          source={require("./../../../../assets/images/wish.png")}
          style={{ flex: 1 }}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          lineHeight: 25,
          fontFamily: "sans-serif",
          paddingHorizontal: 50,
          paddingVertical: 15,
          textAlign: "center",
        }}
      >
        Other people’s wishlists will appear here when they have joined the
        group
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#00C187",
          width: "90%",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            lineHeight: 27,
            fontFamily: "sans-serif",
            textAlign: "center",
            color: "white",
          }}
        >
          Invite Others
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WishList;
