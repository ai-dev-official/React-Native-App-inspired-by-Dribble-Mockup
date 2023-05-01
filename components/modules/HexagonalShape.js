import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const HexagonalShape = ({ source, size }) => {
  const hexagonSize = size / 2 * Math.sqrt(3);

  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonBefore} />
      <View style={styles.hexagonInner}>
        <Image style={styles.image} source={source} />
      </View>
      <View style={styles.hexagonAfter} />
    </View>
  );
};

const styles = StyleSheet.create({
  hexagon: {
    width: size,
    height: size / 2 * Math.sqrt(3),
    overflow: 'hidden',
    flexDirection: 'row'
  },
  hexagonBefore: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: size / 2,
    borderTopWidth: size / 2 * Math.sqrt(3),
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff'
  },
  hexagonInner: {
    width: size,
    height: size / 2 * Math.sqrt(3),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hexagonAfter: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: size / 2,
    borderBottomWidth: size / 2 * Math.sqrt(3),
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff'
  },
  image: {
    width: size * 0.8,
    height: size * 0.8
  }
});

export default HexagonalShape;
