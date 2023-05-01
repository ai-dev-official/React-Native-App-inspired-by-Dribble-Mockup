import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AddIcons from 'react-native-vector-icons/Octicons';

const ListFloatingAddIcon = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AddIcons name="plus" size={14} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 999,
      },
      button: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#0085ff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
      },
      icon: {
        color: '#000000',
      }
});

export default ListFloatingAddIcon;

