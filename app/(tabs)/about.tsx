import { View, StyleSheet, Image, Text } from "react-native";

export default function About() {

  return (
    <View style={styles.container}>
        
        <View style={styles.contactContainer}>
        <Text style={styles.text}>Nome: Guilherme Camargo Silva</Text>
        <Text style={styles.text}>Curso: Análise e Desenvolvimento de Sistemas</Text>
        <Text style={styles.text}>Disciplina: Desenvolvimento Mobile</Text>
        <Text style={styles.text}>Data: 03/06/2025</Text>
        </View>

  
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
  contactContainer: {
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    width: "90%",
    backgroundColor: "#393E46",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  }
});