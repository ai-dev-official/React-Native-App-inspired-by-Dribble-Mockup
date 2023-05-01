import {StyleSheet, View, Image, StatusBar} from 'react-native';
import React, { useState } from 'react';
import FavImage from '../assets/loginbanner.png';
import LoginButtons from '../modules/LoginButtons';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#242627" barStyle="light-content" />
        <Image source={FavImage} style={[styles.image, {}]} />
        <LoginButtons />
  </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#242627',
      },
      image: {
        top: 20,
      },
      input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
      },
});
