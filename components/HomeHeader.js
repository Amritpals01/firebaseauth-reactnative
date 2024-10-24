import { View, Text, Platform } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../utils/common";
import { useAuth } from "../context/authContext";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { MenuItem } from "./CustomMenuItems";
import { AntDesign, Feather } from "@expo/vector-icons";

const ios = Platform.OS == "ios";

export default function HomeHeader() {
  const { user, logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const handleProfile = ()=>{

  }
  const handleLogout = async()=>{
    await logout();
  }
  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className="flex-row justify-between px-5 bg-brown-500 pb-6 rounded-b-3xl "
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className=" text-black font-medium">
          Chats
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger>
            <Image
              style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileurl}
              placeholder={blurhash}
              transition={500}
            />
          </MenuTrigger>
          <MenuOptions customStyles={
            {
              optionsContainer:{
                borderRadius:10,
                borderCurve:'continuous',
                marginTop:40,
                marginLeft:-30,
                backgroundColor:'#f1e9da',
                width:160,
                shadowOpacity:0.2,
                

              }
            }
          }>
            <MenuItem 
            text='Profile'
            action={handleProfile}
            value={null}
            icon={<Feather name="user" size={hp(2.5)} color="#737373" />}
             />
             <Divider />
             <MenuItem 
            text='Sign Out'
            action={handleLogout}
            value={null}
            icon={<AntDesign name="logout" size={hp(2.5)} color="#737373" />}
             />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const Divider = ()=>{
  return(
    <View className="  border-t-4 bg-neutral-200">
    </View>

  )
}