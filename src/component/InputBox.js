import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Feather from "react-native-vector-icons/Feather";

const InputBox = ({ typeValue, setTypeValue }) => {
  return (
    <View
      style={{
        backgroundColor: "#F6F6F6",
        flexDirection: "row",
        alignItems: "center",
        padding: responsiveWidth(2),
      }}
    >
      <Entypo name="plus" size={25} color={"#0a328a"} />
      <TextInput
        style={{
          borderWidth: responsiveWidth(0.2),
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: responsiveWidth(5),
          borderColor: "gray",
          paddingVertical: responsiveWidth(1),
          paddingHorizontal: responsiveWidth(2.5),
        }}
        placeholder="Type Message"
        value={typeValue}
        onChangeText={setTypeValue}
      />

      <MaterialCommunityIcons
        name={"send-circle"}
        size={35}
        color={"#2c70de"}
      />
    </View>
  );
};

export { InputBox };
