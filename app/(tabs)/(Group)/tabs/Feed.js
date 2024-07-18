import { View, Image, Text, ImageBackground, TextInput } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
const Feed = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
    >
      <View
        style={{
          height: 96,
          width: 96,
        }}
      >
        <ImageBackground
          source={require("./../../../../assets/images/feed.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          lineHeight: 25,
          fontFamily: "sans-serif",
          paddingHorizontal: 50,
          textAlign: "center",
        }}
      >
        Send messages and share those important updates with others in the group
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          backgroundColor: "#FFFFFF",
          padding: 5,
        }}
      >
        <TextInput placeholder="Type..." style={{ flex: 6 }} />
        <View
          style={{
            flex: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Ionicons name="mic-outline" size={16} color="black" />
          <Ionicons name="images-outline" size={16} color="black" />
          <AntDesign name="link" size={16} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Feed;
