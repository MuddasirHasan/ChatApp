import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import TabNavigation from "./src/TabNavigation";
import { AppNavigation } from "./src/AppNavigation";
import { ChatList } from "./src/component/ChatList";
import { ChatScreen } from "./src/screens/ChatScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <AppNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
