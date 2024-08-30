import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "@/utils/sizes";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-element-textinput";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const AddItem: React.FC = () => {
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
        <Text style={styles.heading}>Add Item</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancel}>Cancel</Text>
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
            flex: 2,
            borderTopRightRadius: 4,
            borderBottomEndRadius: 4,
            backgroundColor: color.green,
          }}
        ></View>
        <View style={{ flex: 8, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 6.2,
          justifyContent: "center",
          paddingHorizontal: "4%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 8.5 }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[32]),
                lineHeight: 48,
              }}
            >
              Start with a link to the product or
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: wp(fontSizes[32]),
                lineHeight: 48,
              }}
            >
              add manually
            </Text>
          </View>
          <View style={{ flex: 1.5 }}></View>
        </View>
        <View
          style={{
            marginTop: "6%",
            marginBottom: "2%",
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: wp(fontSizes[13]),
              //lineHeight: 21,
              marginBottom: "2%",
            }}
          >
            Paste link to the product
          </Text>

          <TextInput
            style={styles.Inputstyle}
            inputStyle={{ fontSize: wp(fontSizes[20]) }}
          />
        </View>
        <View
          style={{
            marginVertical: "4%",
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: wp(fontSizes[22]),
              //lineHeight: 22,
              textAlign: "center",
            }}
          >
            or
          </Text>
        </View>
        <View style={{ paddingVertical: "1%" }}>
          <TouchableOpacity
            onPress={() => router.navigate("AddItem")}
            style={{
              borderColor: color.green,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: "4%",
              borderWidth: 1,
              backgroundColor: color.white,
            }}
          >
            <Text
              style={{
                fontSize: wp(fontSizes[22]),
                lineHeight: 22,
                fontFamily: fontFamily.DMSans_700,
                color: color.green,
              }}
            >
              Add Manually
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
        }}
      ></View>
      <ShadowedView
        style={{
          flex: 1.3,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color.white,
          paddingHorizontal: "4%",
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
            width: "100%",
            backgroundColor: color.blueGreen,
            borderRadius: 4,
            padding: "4.5%",
          }}
          onPress={() => router.navigate("Product")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: wp(fontSizes[20]),
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
              //lineHeight: 22,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </ShadowedView>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp(fontSizes[26]),
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
  cancel: {
    color: color.red,
    fontSize: wp(fontSizes[20]),
    fontFamily: fontFamily.DMSans_700,
  },
  Inputstyle: {
    backgroundColor: color.pureWhite,
    borderColor: color.borderBlue,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: "2%",
  },
});
