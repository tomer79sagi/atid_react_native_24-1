import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { useUser } from './UserContext'; // Import the UserContext

const AddPost = () => {
  const { username, profileImage } = useUser(); // Use the context to get the username and profile image
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const submitPost = async () => {
    if (title && content) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
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
      <Button title="Submit Post" onPress={submitPost} />
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
