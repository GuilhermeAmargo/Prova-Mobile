import { View, StyleSheet, Image, Text } from "react-native";

export default function Home() {

  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Projeto Prático Expo</Text>
        
        <Image source={{ uri: 'https://picsum.photos/300/300?random=1' }} style={styles.image} />

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
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
});