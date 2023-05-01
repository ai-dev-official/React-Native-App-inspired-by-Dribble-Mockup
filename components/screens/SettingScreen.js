import {Alert, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import AddListFooterButton from '../modules/AddListFooterButton';
import AddListHeader from '../modules/AddListHeader';
import AddScreenInput from '../modules/AddScreenInput';
import AddListInvite from '../modules/AddListInvite';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1d1f20" barStyle="light-content" />
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <AddListHeader />
      <AddScreenInput />
      <AddListInvite />
      <AddListFooterButton />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1f20',
  },
});

export default SettingScreen;
