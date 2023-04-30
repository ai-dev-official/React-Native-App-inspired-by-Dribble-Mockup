import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const FindScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
      <Button title="Click" onPress={() =>  Alert.alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1f20',
  },
});

export default FindScreen;
