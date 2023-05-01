import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';




function AddListFooterButton () {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('LoginScreen')
    }
  return (

        <TouchableOpacity
        onPress={handleNavigation}
        style={styles.button}
        >
            <Text style={styles.text}>Add List</Text>
        </TouchableOpacity>
  
  );
};

export default AddListFooterButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0085ff',
    marginHorizontal: 20,
    marginVertical: 40,
    padding: 15,
    borderRadius: 10,
    marginTop: 90,
    
  },
  text: {
    color:'#ffffff',
    fontSize: 15,
    fontWeight: 700,
  }
});
