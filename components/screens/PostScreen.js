import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import IconButtons from '../modules/IconButtons';
import PostSlider from '../modules/PostSlider';
import TodoList from '../modules/TodoList';
import BottomSearchBar from '../modules/BottomSearchBar';
import FloatingAddIcon from '../modules/FloatingAddIcon';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <IconButtons />
        <PostSlider />
        <View style={styles.todos}>
          <TodoList />
        </View>
      </ScrollView>
      <FloatingAddIcon />
      <BottomSearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1f20',
  },
  todos: {
    marginBottom: 50,
  },
});

export default PostScreen;
