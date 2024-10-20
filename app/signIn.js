import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handelLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign In", "Please fill all the fields");
      return;
    }
    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current);
    setLoading(false);
    console.log("Sign in response", response);
    if (!response.success) {
      Alert.alert("Sign In", response.msg);
    }
    //Login process
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* image */}
        <View className="items-center">
          <Image
            className="shadow-lg pb-0"
            style={{ height: hp(33) }}
            resizeMode="cover"
            source={require("../assets/images/image.png")}
          />
        </View>
        <View className="pt-1 ">
          <Text
            style={{ fontSize: hp(3), fontWeight: "semibold" }}
            className="font-light tracking-widest text-center text-neutral-800 pb-5 shadow-md  "
          >
            SIGN IN
          </Text>
          <View className="  border-t-4 border-brown-500 pb-5 rounded-t-full "></View>

          {/*inputs*/}
          <View className="gap-3">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-Satin-300 items-center rounded-xl h-px "
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
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-normal text-right text-neutral-800"
              >
                {" "}
                Forgot Password ?
              </Text>
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
                    onPress={handelLogin}
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
                  Don't have an account?{" "}
                </Text>
                <Pressable onPress={() => router.push("signUp")}>
                  <Text
                    style={{
                      fontSize: hp(1.8),
                      
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
    </CustomKeyboardView>
  );
}
