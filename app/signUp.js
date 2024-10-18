import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Feather, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function SignUp() {
  const router = useRouter();
  const {register} = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
      Alert.alert("Sign up", "Please fill all the fields");
      return;
    }
    setLoading(true);

    let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);
    //Register process
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(9), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        <View className="pt-7">
        <View className="items-center pt-6">
          <Image
            className="shadow-lg"
            style={{ height: hp(20), width:wp(60) }}
            resizeMode="fit"
            source={require("../assets/images/signup.png")}
          />
        </View>
          
          {/*inputs*/}
          <View className="gap-3 pt-6">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-Satin-300 items-center rounded-xl "
            >
              <Feather name="user" size={hp(2.7)} color="#504f54" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 text-neutral-800 font-semibold"
                placeholder="Username"
                placeholderTextColor={"#504f54"}
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-Satin-300 items-center rounded-xl  "
            >
              <Octicons name="mail" size={hp(2.7)} color="#504f54" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 text-neutral-800 font-semibold"
                placeholder="Email Address"
                placeholderTextColor={"#504f54"}
              />
            </View>
            
            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-Satin-300 items-center rounded-xl  "
              >
                <Octicons name="lock" size={hp(2.7)} color="#504f54" />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 text-neutral-800 font-semibold"
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={"#504f54"}
                />
              </View>
              <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-Satin-300 items-center rounded-xl  "
            >
              <Feather name="image" size={hp(2.7)} color="#504f54" />
              <TextInput
                onChangeText={(value) => (profileRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 text-neutral-800 font-semibold"
                placeholder="Profile url"
                placeholderTextColor={"#504f54"}
              />
            </View>
            </View>
            {/* Submit button */}
            {/* Loading animation */}
            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(10)} />
                </View>
              ) : (
                <View className="justify-center items-center ">
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={{ height: hp(6.5), width: wp(50) }}
                    className="bg-brown-500 rounded-xl justify-center items-center "
                  >
                    <Text
                      style={{ fontSize: hp(2.3), fontWeight: "semibold" }}
                      className="font-light tracking-wider w-29"
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View className="justify-center items-center ">
              {/* Sign up */}
              <View className="flex-row justify-center pt-3 ">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-neutral-800 "
                >
                  Already have an account?{" "}
                </Text>
                <Pressable onPress={() => router.push("signIn")}>
                  <Text
                    style={{
                      fontSize: hp(1.8),
                    }}
                    className="font-bold text-brown-500 "
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
