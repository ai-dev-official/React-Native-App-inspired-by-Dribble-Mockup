import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CustomButtonAlt  ({label, icon, onPress}){
  const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('Home')
    }
  return (
    <TouchableOpacity onPress={handleNavigation}>
    <View style={styles.button}>
      <Text style={styles.label}>Skip</Text>
    </View>
  </TouchableOpacity>
          

  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d5156',
    borderRadius: 10,
    marginLeft: 10,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
 
});

export default CustomButtonAlt;
