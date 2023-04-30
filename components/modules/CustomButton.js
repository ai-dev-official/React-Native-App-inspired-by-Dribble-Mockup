import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';

const CustomButton = ({label, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Ionicons name="menu" size={24} color="#fff" />
    </View>
  </TouchableOpacity>
          

  );
};

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d5156',
    borderRadius: 20,
    marginLeft: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default CustomButton;
