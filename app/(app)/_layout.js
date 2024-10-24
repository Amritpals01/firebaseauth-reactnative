import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";


export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ header:()=><HomeHeader className="flex-row justify-between px-5 bg-brown-500 pb-6 rounded-b-3xl "> </HomeHeader> }} />
    </Stack>
  );
}
