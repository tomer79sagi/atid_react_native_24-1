import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const Comments = ({ comments }) => {

    return (
        <View style={styles.container}>
            { comments && comments.map((comment, index) => (
                <Text key={index} style={styles.comment}>{comment}</Text>
            )) }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 10
    },
});

export default Comments;