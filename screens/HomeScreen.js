import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import { theme } from "../theme/index";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="m-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{ backgroundColor: theme.bgWhite(0.2) }}
          >
            <TextInput
              placeholder="Tìm kiếm thành phố..."
              placeholderTextColor={"lightgray"}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
