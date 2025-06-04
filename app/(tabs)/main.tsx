import React, { use, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, Image, Text, ScrollView, Touchable, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Url = "https://jsonplaceholder.typicode.com/comments";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function Main() {
  const  [comments, setComments] = React.useState<Comment[]>([]);
  const [savedCommentCount, setSavedCommentCount] = React.useState<number>(0);

  useEffect(() => {
    axios.get(Url).then((response) => { setComments(response.data); })
  }, []);

  if (!comments || comments.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }
const saveCommentToStorage = async (comment) => {
  try {
    await AsyncStorage.setItem('comment', JSON.stringify({
      postId: comment.postId,
      id: comment.id,
      name: comment.name,
      email: comment.email,
      body: comment.body,
    }));
    console.log('Comment saved to storage');
    setSavedCommentCount((prev) => prev + 1);
} catch (error) {
  console.error('Error saving comment to storage:', error);
}
};

return (
  <View style={styles.container}>
        <Text style={styles.title}>Comments</Text>
        <Text style={styles.text}>Saved Comments: {savedCommentCount}</Text>
        <ScrollView style={styles.commentsContainer}>
          {comments.map((comment) => (
            <View style={styles.card} key={comment.id}>
              <TouchableOpacity key={comment.id} onPress={() => saveCommentToStorage(comment)}>
              <Text key={comment.id} style={styles.text}>Post ID: {comment.postId}</Text>
              <Text style={styles.text}>ID: {comment.id}</Text>
              <Text style={styles.text}>Nome: {comment.name}</Text>
              <Text style={styles.text}>Email: {comment.email}</Text>
              <Text style={styles.text}>Body:</Text>
              <Text style={styles.body}>{comment.body}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
  commentsContainer: {
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#393E46",
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
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
    fontSize: 15,
    marginBottom: 5,
    justifyContent: "center",
    },
  body: {
    color: "white",
    fontSize: 15,
    marginTop: 5,
    textAlign: "auto",
  },
});