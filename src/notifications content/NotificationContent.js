// screens/NotificationContent.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const NotificationContent = ({ route }) => {
  const { notificationId } = route.params;
  const { notificationMessage } = route.params;

  // Fetch or use the notificationId to display detailed information

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.content}>{notificationId}</Text> */}
        <Text style={styles.title}>{notificationMessage}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "#1d3f40",
  },
  content: {
    fontSize: 18,
    color: "#1d3f40",
    textAlign: "left",
  },
});

export default NotificationContent;
