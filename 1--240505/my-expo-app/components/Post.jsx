// src/components/Post.js
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';

const Post = ({ username, profileImage, image, description }) => (
  <Card containerStyle={styles.card}>
    <View style={styles.header}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.username}>{username}</Text>
    </View>
    <Card.Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.description}>{description}</Text>
    <View style={styles.actions}>
      <Icon name="thumb-up" type="material" color="#3b5998" />
      <Icon name="comment" type="material" color="#3b5998" />
      <Icon name="share" type="material" color="#3b5998" />
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 0,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    height: 200,
  },
  description: {
    padding: 10,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Post;
