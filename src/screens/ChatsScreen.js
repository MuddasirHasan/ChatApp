import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { ChatList } from "../component/ChatList";
import chats from "../assets/data/chats.json";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { responsiveWidth } from "react-native-responsive-dimensions";
dayjs.extend(relativeTime);
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { Notimplemented } from "./Notimplemented";

const ChatsScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerRight: () => (
      <Entypo
        name="new-message"
        size={20}
        color={"black"}
        onPress={() => navigation.navigate("ContactsScreen")}
        style={{ paddingRight: responsiveWidth(3) }}
      />
    ),
  });
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: responsiveWidth(2) }}>
            <ChatList
              name={item.user.name}
              time={dayjs(item.lastMessage.createdAt).fromNow(true)}
              message={item.lastMessage.text}
              image={item.user.image}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export { ChatsScreen };
