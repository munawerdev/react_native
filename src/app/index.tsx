import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
// import { Text } from "@expo/ui";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
