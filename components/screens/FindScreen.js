import {Alert, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import FindTopSearchBar from '../modules/TopSearchBar';
import FindListItem from '../modules/FindListItem';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" barStyle="light-content" />
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <FindTopSearchBar />
      <FindListItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
  },
});

export default ListScreen;
