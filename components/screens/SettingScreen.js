import {Alert, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HomeBanner from '../modules/HomeBanner';
import SettingsImage from '../modules/SettingsImage';
import CustomFooterButton from '../modules/CustomFooterButton';
import SettingsTextSlider from '../modules/SettingsTextSlider';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
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

export default SettingScreen;
