import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* image */}
        <View className="items-center">
          <Image
            className="shadow-lg"
            style={{ height: hp(35) }}
            resizeMode="cover"
            source={require("../assets/images/image.png")}
          />
        </View>
        <View className="pt-1">
          <Text
            style={{ fontSize: hp(4), textDecorationLine: "underline", fontWeight: 'semibold', }}
            className="font-light tracking-widest text-center text-neutral-800 pb-8 shadow-md  "
          >
            Sign In
          </Text>
          {/*inputs*/}
          <View className="gap-3">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-brown-500 items-center rounded-xl  "
            >
              <Octicons name="mail" size={hp(2.7)} color="#504f54" />
              <TextInput
                style={{ fontSize: hp(2) }}
                className="flex-1 text-neutral-800 font-semibold"
                placeholder="Email Address"
                placeholderTextColor={"#504f54"}
              />
            </View>
            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-brown-500 items-center rounded-xl  "
              >
                <Octicons name="lock" size={hp(2.7)} color="#504f54" />
                <TextInput
                  style={{ fontSize: hp(2) }}
                  className="flex-1 text-neutral-800 font-semibold"
                  placeholder="Password"
                  placeholderTextColor={"#504f54"}
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-normal text-right text-neutral-800"
              >
                {" "}
                Forgot Password ?
              </Text>
            </View>
            {/* Submit button */}
            <View className="justify-center items-center ">
              <TouchableOpacity
                style={{ height: hp(6.5), width: wp(50) }}
                className="bg-Satin-300 rounded-xl justify-center items-center "
              >
                <Text
                  style={{ fontSize: hp(2.3), fontWeight: 'semibold', }}
                  className="font-light tracking-wider w-29"
                >
                  Submit
                </Text>
              </TouchableOpacity>
              {/* Sign up */}
              <View className="flex-row justify-center pt-9 ">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-neutral-800 "
                >
                  Don't have an account?{" "}
                </Text>
                <Pressable onPress={()=> router.push('signUp')}>
                  <Text
                    style={{
                      fontSize: hp(1.8),
                      textDecorationLine: "underline",
                    }}
                    className="font-bold text-brown-500 "
                  >
                    SignUp
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
