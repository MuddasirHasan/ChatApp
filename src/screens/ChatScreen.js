import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import messages from "../assets/data/messages.json";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { InputBox } from "../component/InputBox";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

const ChatScreen = () => {
  const route = useRoute();
  const userName = route.params.username;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: userName,
    });
  }, [userName]);

  const [typeValue, setTypeValue] = useState("");

  return (
    <View style={styles.page}>
      <ImageBackground
        source={require("../assets/images/BG.png")}
        style={{ flex: 1 }}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignItems: item.user.id === "u1" ? "flex-end" : "flex-start",
                  padding: responsiveWidth(4),
                }}
              >
                <View
                  style={{
                    marginBottom: responsiveHeight(2),
                    backgroundColor: item.user.id === "u1" ? "#DCF8C5" : "#fff",
                    padding: responsiveWidth(1.6),
                    borderRadius: responsiveWidth(2),
                    maxWidth: "80%",
                  }}
                >
                  <Text style={{ color: "#000" }}>{item.text}</Text>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ color: "gray" }}>
                      {dayjs(item.createdAt).fromNow(true)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <InputBox typeValue={typeValue} setTypeValue={setTypeValue} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export { ChatScreen };
