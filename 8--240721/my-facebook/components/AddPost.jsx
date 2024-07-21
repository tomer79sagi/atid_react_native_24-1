import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
// import * as ImagePicker from 'expo-image-picker';
import { useUser } from '../contexts/UserContext'; // Import the UserContext

const AddPost = ({ onAddedNewPost }) => {
  const { username, profileImage } = useUser(); // Use the context to get the username and profile image
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  // 1. Function to select an image from the device's gallery
  const pickImage = async () => {
    setImage('https://randomuser.me/api/portraits/men/2.jpg');
  };

  // 2. Function that captures a photo from the device's camera

  // 3. Add location information of where the post was created

  // 4. Function to submit / save the new post
  //  - Changes the VIEW_MODE of 'App' component, to FEED
  const submitPost = async () => {
    if (title && content) {
      try {
        const postsCollecton = collection(db, 'posts');
        const docRef = await addDoc(postsCollecton, {
          title,
          content,
          author: username, // Use the username from context
          profileImage, // Use the profile image from context
          image,
          createdAt: new Date(),
        });
        Alert.alert('Success', 'Post added successfully');
        // Reset fields after successful submission
        setTitle('');
        setContent('');
        setImage(null);

        // When all is done, update the 'App' component that we finished our operation.
        onAddedNewPost();
      } catch (error) {
        console.error('Error adding post: ', error);
        Alert.alert('Error', 'Failed to add post');
      }
    } else {
      Alert.alert('Error', 'Please fill all the required fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Text style={styles.imageText}>Image selected</Text>}
      <Button title="Create Post" onPress={submitPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  imageText: {
    marginVertical: 10,
    fontSize: 16,
    color: 'green',
  },
});

export default AddPost;
