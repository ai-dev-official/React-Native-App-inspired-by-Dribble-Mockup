import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListTopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unlock the</Text>
      <Text style={styles.text}>Power of AI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 44,
        lineHeight: 42,
        fontWeight: 700,
        color: '#ffffff',
    }
});


export default ListTopBar;