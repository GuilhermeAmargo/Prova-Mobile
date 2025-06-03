import { View, StyleSheet, Image, Text } from "react-native";

export default function Main() {

  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Main</Text>
        
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});