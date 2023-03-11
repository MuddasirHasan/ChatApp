import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import chats from "../assets/data/chats.json";

import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const ChatList = ({ name, time, image, message }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Main}
      onPress={() => {
        navigation.navigate("ChatScreen", { username: name });
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: responsiveWidth(15),
          height: responsiveWidth(15),
          borderRadius: responsiveWidth(7.5),
        }}
        resizeMode="contain"
      />
      <View style={styles.description}>
        <View style={styles.name}>
          <Text style={{ color: "#000", fontWeight: "600" }}>{name}</Text>
          <View style={styles.time}>
            <Text style={{ color: "gray" }}>{time}</Text>
          </View>
        </View>
        <View>
          <Text style={{ color: "gray" }}>{message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  description: {
    flex: 1,
    marginLeft: responsiveWidth(3),
  },
  Main: {
    flexDirection: "row",
    marginVertical: responsiveHeight(1),
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(0.6),
  },
  time: {
    marginRight: responsiveWidth(3),
  },
});

export { ChatList };
