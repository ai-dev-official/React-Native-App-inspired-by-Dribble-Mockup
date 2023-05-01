import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import SettingsImage from '../modules/SettingsImage';
import CustomFooterButton from '../modules/CustomFooterButton';
import SettingsTextSlider from '../modules/SettingsTextSlider';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1d1f20" barStyle="light-content" />
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <SettingsImage  />
      <SettingsTextSlider />
      <CustomFooterButton />
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

export default LandingScreen;
