import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AddIcons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

function FloatingAddIcon () {

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('SettingScreen');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={handleNavigation}
      style={styles.button}
      >
        <AddIcons name="plus" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        zIndex: 999,
      },
      button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#0085ff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
      },
      icon: {
        color: '#ffffff',
      }
});

export default FloatingAddIcon;

