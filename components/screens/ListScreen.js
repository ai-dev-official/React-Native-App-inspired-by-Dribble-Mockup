import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import ListTopBar from '../modules/ListTopBar';
import TopSearchBar from '../modules/TopSearchBar';
import ListFavorites from '../modules/ListFavorites';
import ListListHeader from '../modules/ListListHeader';
import ListListItem from '../modules/ListListItem';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" barStyle="light-content" />
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <ListTopBar />
        <TopSearchBar />
        <ListFavorites />
        <ListListHeader />
        <ListListItem style={styles.listItems} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
  },
  listItems: {
    marginBottom: 20,
  },
});

export default ListScreen;
