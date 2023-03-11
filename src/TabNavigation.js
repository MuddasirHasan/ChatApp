import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen } from "./screens/ChatScreen";
import { ChatsScreen } from "./screens/ChatsScreen";
import { ChatScreenStack } from "./ChatsScreenStack";
import { Notimplemented } from "./screens/Notimplemented";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "royalblue",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Status"
        component={Notimplemented}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="sync" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={Notimplemented}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="phone" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Notimplemented}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Notimplemented}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigation };
