import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>favorites</Text>
      <Text style={styles.textItalic}>See all</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        paddingLeft: 5,
        paddingRight: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 5,
    },
    textBold: {
        fontSize: 16,
        fontWeight: 600,
        color: '#ffffff',
    },
    textItalic: {
        fontSize: 16,
        fontWeight: 400,
        color: '#0552ac',
    }
});
export default TextHeader;