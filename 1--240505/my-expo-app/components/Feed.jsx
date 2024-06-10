// src/components/Feed.js
import React from 'react';
import { ScrollView } from 'react-native';
import Post from './Post';

const Feed = () => {
  const posts = [
    {
      username: 'John Doe',
      profileImage: 'https://example.com/profile1.jpg',
      image: 'https://example.com/image1.jpg',
      description: 'Beautiful sunset!',
    },
    {
      username: 'Jane Doe',
      profileImage: 'https://example.com/profile2.jpg',
      image: 'https://picsum.photos/seed/picsum/800/600',
      description: 'Enjoying the beach!',
    },
  ];

  return (
    <ScrollView>
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          profileImage={post.profileImage}
          image={post.image}
          description={post.description}
        />
      ))}
    </ScrollView>
  );
};

export default Feed;
