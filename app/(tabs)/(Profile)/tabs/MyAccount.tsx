import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../../../../utils/Color";
import { spacing, fontSizes } from "../../../../utils/sizes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-element-textinput";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signOut } from "aws-amplify/auth";

const MyAccount: React.FC = () => {
  const router = useRouter();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "8%",
        backgroundColor: color.lightBlue,
      }}
      enableOnAndroid={true}
      extraHeight={150}
    >
      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[12]),
            lineHeight: 22,
          }}
        >
          Email Address
        </Text>
        <TextInput
          placeholder="Email..."
          style={{
            backgroundColor: color.white,
            borderColor: color.borderBlue,
            borderWidth: 1,
            borderRadius: 8,
            padding: "2%",
            marginVertical: "1%",
          }}
          inputStyle={{ fontSize: wp(fontSizes[20]) }}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
      </View>

      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[12]),
            lineHeight: 22,
          }}
        >
          Firstname
        </Text>
        <TextInput
          placeholder="Firstname..."
          style={{
            backgroundColor: color.white,
            borderColor: color.borderBlue,
            borderWidth: 1,
            borderRadius: 8,
            padding: "2%",
            marginVertical: "1%",
          }}
          inputStyle={{ fontSize: wp(fontSizes[20]) }}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
      </View>

      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: wp(fontSizes[12]),
            lineHeight: 22,
          }}
        >
          Surname
        </Text>
        <TextInput
          placeholder="Surname..."
          style={{
            backgroundColor: color.white,
            borderColor: color.borderBlue,
            borderWidth: 1,
            borderRadius: 8,
            padding: "2%",
            marginVertical: "1%",
          }}
          inputStyle={{ fontSize: wp(fontSizes[20]) }}
          placeholderTextColor={color.grey}
          fontFamily={fontFamily.DMSans_500Italic}
        />
      </View>

      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 12,
            lineHeight: 15,
          }}
        >
          Date of Birth
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            placeholder="Date"
            style={{
              backgroundColor: color.white,
              borderColor: color.borderBlue,
              borderWidth: 1,
              borderRadius: 8,
              padding: "2%",
              marginVertical: "1%",
              width: "30%",
            }}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor={color.grey}
            fontFamily={fontFamily.DMSans_500Italic}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Month"
            style={{
              backgroundColor: color.white,
              borderColor: color.borderBlue,
              borderWidth: 1,
              borderRadius: 8,
              padding: "2%",
              marginVertical: "1%",
              width: "30%",
            }}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor={color.grey}
            fontFamily={fontFamily.DMSans_500Italic}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Year"
            style={{
              backgroundColor: color.white,
              borderColor: color.borderBlue,
              borderWidth: 1,
              borderRadius: 8,
              padding: "2%",
              marginVertical: "1%",
              width: "30%",
            }}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
            placeholderTextColor={color.grey}
            fontFamily={fontFamily.DMSans_500Italic}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
        }}
      >
        <TouchableOpacity
          style={{
            width: "48%",
            borderColor: color.blueGreen,
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: "5%",
            paddingVertical: "2.5%",
            backgroundColor: color.white,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[24]),
              lineHeight: 26,
              textAlign: "center",
              color: "#00A876",
            }}
          >
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await signOut();
            router.navigate("/");
            console.log("You are signed out");
          }}
          style={{
            width: "48%",
            borderColor: "#DF0000",
            backgroundColor: color.paleRed,
            borderWidth: 1,
            paddingHorizontal: "5%",
            paddingVertical: "5.5%",
            borderRadius: spacing.sm,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[24]),
              lineHeight: 28,
              textAlign: "center",
              color: color.red,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: wp(fontSizes[20]),
            lineHeight: 21,
            textAlign: "center",
            color: color.red,
            textDecorationLine: "underline",
            textDecorationColor: color.red,
            textDecorationStyle: "solid",
          }}
        >
          Delete Account
        </Text>
      </TouchableOpacity>

      <ShadowedView
        style={{
          flex: 0.1,
          width: "100%",
          ...shadowStyle({
            color: color.grey,
            opacity: 0.3,
            radius: 30,
            offset: [0, 1],
          }),
        }}
      />
    </KeyboardAwareScrollView>
    // <View
    //   style={{
    //     flex: 1,
    //     flexShrink: 0.5,
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     paddingTop: "8%",
    //     backgroundColor: color.lightBlue,
    //   }}
    // >
    //   <View style={{ width: "90%" }}>
    //     <Text
    //       style={{
    //         fontFamily: fontFamily.DMSans_500,
    //         fontSize: wp(fontSizes[12]),
    //         lineHeight: 22,
    //       }}
    //     >
    //       Email Address
    //     </Text>
    //     <TextInput
    //       placeholder=" Email..."
    //       style={styles.Inputstyle}
    //       inputStyle={{ fontSize: wp(fontSizes[20]) }}
    //       placeholderTextColor={color.grey}
    //       fontFamily={fontFamily.DMSans_500Italic}
    //     />
    //   </View>
    //   <View style={{ width: "90%" }}>
    //     <Text
    //       style={{
    //         fontFamily: fontFamily.DMSans_500,
    //         fontSize: wp(fontSizes[12]),
    //         lineHeight: 22,
    //       }}
    //     >
    //       Firstname
    //     </Text>
    //     <TextInput
    //       placeholder="Firstname..."
    //       style={styles.Inputstyle}
    //       inputStyle={{ fontSize: wp(fontSizes[20]) }}
    //       placeholderTextColor={color.grey}
    //       fontFamily={fontFamily.DMSans_500Italic}
    //     />
    //   </View>
    //   <View style={{ width: "90%" }}>
    //     <Text
    //       style={{
    //         fontFamily: fontFamily.DMSans_500,
    //         fontSize: wp(fontSizes[12]),
    //         lineHeight: 22,
    //       }}
    //     >
    //       Surname
    //     </Text>
    //     <TextInput
    //       placeholder="Surname..."
    //       style={styles.Inputstyle}
    //       inputStyle={{ fontSize: wp(fontSizes[20]) }}
    //       placeholderTextColor={color.grey}
    //       fontFamily={fontFamily.DMSans_500Italic}
    //     />
    //   </View>
    //   <View style={{ width: "90%" }}>
    //     <Text
    //       style={{
    //         fontFamily: fontFamily.DMSans_500,
    //         fontSize: 12,
    //         lineHeight: 15,
    //       }}
    //     >
    //       Date of Birth
    //     </Text>
    //     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    //       <TextInput
    //         placeholder="Date"
    //         style={[styles.Inputstyle, { width: "30%" }]}
    //         inputStyle={{ fontSize: wp(fontSizes[20]) }}
    //         placeholderTextColor={color.grey}
    //         fontFamily={fontFamily.DMSans_500Italic}
    //         mode="numeric"
    //       />
    //       <TextInput
    //         placeholder="Month"
    //         style={[styles.Inputstyle, { width: "30%" }]}
    //         inputStyle={{ fontSize: wp(fontSizes[20]) }}
    //         placeholderTextColor={color.grey}
    //         fontFamily={fontFamily.DMSans_500Italic}
    //         mode="numeric"
    //       />
    //       <TextInput
    //         placeholder="Year"
    //         style={[styles.Inputstyle, { width: "30%" }]}
    //         inputStyle={{ fontSize: wp(fontSizes[20]) }}
    //         placeholderTextColor={color.grey}
    //         fontFamily={fontFamily.DMSans_500Italic}
    //         mode="numeric"
    //       />
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       width: "90%",
    //     }}
    //   >
    //     <TouchableOpacity
    //       style={{
    //         width: "48%",
    //         borderColor: color.blueGreen,
    //         borderWidth: 1,
    //         borderRadius: 8,
    //         paddingHorizontal: "5%",
    //         paddingVertical: "2.5%",
    //         backgroundColor: color.white,
    //       }}
    //     >
    //       <Text
    //         style={{
    //           fontFamily: fontFamily.DMSans_700,
    //           fontSize: wp(fontSizes[24]),
    //           lineHeight: 26,
    //           textAlign: "center",
    //           color: "#00A876",
    //         }}
    //       >
    //         Change Password
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => router.navigate("Login")}
    //       style={{
    //         width: "48%",
    //         borderColor: "#DF0000",
    //         backgroundColor: color.paleRed,
    //         borderWidth: 1,
    //         paddingHorizontal: "5%",
    //         paddingVertical: "5.5%",
    //         borderRadius: spacing.sm,
    //       }}
    //     >
    //       <Text
    //         style={{
    //           fontFamily: fontFamily.DMSans_700,
    //           fontSize: wp(fontSizes[24]),
    //           lineHeight: 28,
    //           textAlign: "center",
    //           color: color.red,
    //         }}
    //       >
    //         Log out
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <TouchableOpacity
    //     style={{
    //       alignSelf: "center",
    //       //marginTop: "5%",
    //     }}
    //   >
    //     <Text
    //       style={{
    //         fontFamily: fontFamily.DMSans_700,
    //         fontSize: wp(fontSizes[20]),
    //         lineHeight: 21,
    //         textAlign: "center",
    //         color: color.red,
    //         textDecorationLine: "underline",
    //         textDecorationColor: color.red,
    //         textDecorationStyle: "solid",
    //       }}
    //     >
    //       Delete Account
    //     </Text>
    //   </TouchableOpacity>
    //   <ShadowedView
    //     style={{
    //       flex: 0.1,
    //       //backgroundColor: "red",
    //       width: "100%",
    //       ...shadowStyle({
    //         color: color.grey,
    //         opacity: 0.3,
    //         radius: 30,
    //         offset: [0, 1],
    //       }),
    //     }}
    //   ></ShadowedView>
    // </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  Inputstyle: {
    backgroundColor: color.white,
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: 8,
    padding: "2%",
    marginVertical: "1%",
  },
});
