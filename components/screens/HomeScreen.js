import {Alert, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import React from 'react';
import HomeBanner from '../modules/HomeBanner';
import SliderTab from '../modules/SliderMenu';
import SliderItems from '../modules/SliderItems';
import TextHeader from '../modules/TextHeader';
import TodoList from '../modules/TodoList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.homeBannerContainer}>
        <HomeBanner />
      </View>
      <View style={styles.slidertab}>
        <View style={{ marginHorizontal: 0}}>
          <SliderTab />
          <SliderItems />
        </View>
        <View style={styles.headertext}>
          <TextHeader />
          <TodoList />
          <TodoList />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1f20',
  },
  homeBannerContainer: {
    marginTop: 50,
  },
  slidertab: {
    marginTop: 20,
  },
  headertext: {
    marginTop: 20,
    marginBottom: 100,
  }
});

export default HomeScreen;
