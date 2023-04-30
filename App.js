import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/navigation/Tabs';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#151718" barStyle="light-content" transparent={false}/>

      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
