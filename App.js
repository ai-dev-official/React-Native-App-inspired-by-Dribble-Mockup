import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/navigation/Tabs';
import LoginScreen from './components/screens/LoginScreen';
import EmailLoginScreen from './components/screens/EmailLoginScreen';
import LandingScreen from './components/screens/LandingScreen';
import SettingScreen from './components/screens/SettingScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#151718" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmailLoginScreen"
            component={EmailLoginScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
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
