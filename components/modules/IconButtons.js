import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterIcon from 'react-native-vector-icons/Ionicons';
import SliderItems from './SliderItems';

const IconButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={Alert.alert("Button Pressed!")} style={styles.touch}>
        <ClockIcon
          name="clock-check-outline"
          size={24}
          color="#000000"
          style={styles.iconStyle}
        />
        <Text style={styles.buttonLight}>Recent</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={Alert.alert("Button Pressed!")} 
      style={styles.touchB}>
      <FilterIcon
          name="filter-sharp"
          size={24}
          color="#ffffff"
          style={styles.iconStyleB}
        />
        <Text style={styles.buttonDark}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IconButtons;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
        marginHorizontal: 10,
    },
    touch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: 120,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    touchB: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        width: 120,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    iconStyle: {
        marginRight: 10,
    },
    iconStyleB: {
        marginRight: 10,
    },
    buttonDark:{
        fontWeight: 700,
        color: '#ffffff',
    },
    buttonLight: {
        fontWeight: 700,
        color: '#000000',
    }
});
