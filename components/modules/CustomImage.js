import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import WomanImage from '../assets/woman.png';



const CustomImage = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.imagestyle} onPress={onPress}>
      {icon && < Image source={WomanImage} style={[styles.icon, {}]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  imagestyle: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242627',
    borderRadius: 20,
    marginRight: 10,
  },

  icon: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

});

export default CustomImage;
