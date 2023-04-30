import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';



function CustomFooterButton () {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('Home')
    }
  return (

        <TouchableOpacity
        onPress={handleNavigation}
        style={styles.button}
        >
            <Text style={styles.text}>Get started</Text>
        </TouchableOpacity>
  
  );
};

export default CustomFooterButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color:'#000000',
    fontSize: 15,
    fontWeight: 700,
  }
});
