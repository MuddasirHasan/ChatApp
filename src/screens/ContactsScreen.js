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
import { ContactList } from "../component/ContactList";

const ContactsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: responsiveWidth(2) }}>
            <ContactList
              name={item.user.name}
              status={item.user.status}
              image={item.user.image}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export { ContactsScreen };
