// src/components/Feed.js
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { Card, Icon, Text } from 'react-native-elements';
import { collection, getDocs } from '@react-native-firebase/firestore';
import { db } from '../firebaseConfig';

const Feed = () => {
  const iconColor = {
    pressed: '#000',
    unpressed: '#3b5998'
  }

  const [posts, setPosts] = useState([
    {
      username: 'John Doe',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      image: 'https://picsum.photos/seed/picsum2/800/600',
      description: 'Beautiful sunset!',
      likes: 10,
      liked: true,
      comments: []
    },
    {
      username: 'Jane Doe',
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      image: 'https://picsum.photos/seed/picsum/800/600',
      description: 'Enjoying the beach!',
      likes: 5,
      liked: false,
      comments: []
    },
  ])

  const loggedInUser = {
    username: 'Tomer Sagi',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts: ", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const setLiked = (index) => {
    // Can't directly update the object
    // posts[index].liked = !posts[index].liked; // CANNOT DO - ILLEGAL IN REACT

    // Can't send the existing POSTS to the SETPOSTS method
    // setPosts(post);

    // ONLY OPTION - because react native is immutable
    setPosts(posts.map((post, i) => {
      if (i === index) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
      }

      return post;
    }));
  }

  return (
    <ScrollView>
      {posts.map((post, index) => (
        
        <Card key={index} containerStyle={styles.card}>
          
          <View style={styles.header}>
            <Image source={{ uri: post.profileImage }} style={styles.profileImage} />
            <Text style={styles.username}>{post.username}</Text>
          </View>

          <Text style={styles.description}>{post.description}</Text>
          <Card.Image source={{ uri: post.image }} style={styles.cardImage}></Card.Image>

          <View style={styles.likesAndComments}>
            <Text>{post.likes}</Text>
            <Text>{post.comments.length} comments</Text>
          </View>

          <Card.Divider></Card.Divider>

          <View style={styles.actions}>
            <Icon name="thumb-up" type="material" onPress={() => setLiked(index)} color={ post.liked ? iconColor.pressed : iconColor.unpressed }/>
            <Icon name="comment" type="material" color="#3b5998" />
            <Icon name="share" type="material" color="#3b5998"/>
          </View>
        </Card>

      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 0,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    fontSize: 15,
    padding: 10
  },
  cardImage: {
    height: 200
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  likesAndComments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
});

export default Feed;
