import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SliderIcon from 'react-native-vector-icons/FontAwesome';

const HomeBanner = () => {
  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text style={styles.text}>Hello,</Text>
            <Text style={styles.text}>Derek Doyle</Text>
        </View>
        <View style={styles.icon}>
        <SliderIcon
            name='sliders'
            size={30}
            color="#ffffff"
         />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 40,
        fontWeight: 700,
        color: '#ffffff',
    },
    icon: {
        color: '#ffffff',
        marginBottom: 5
    }
});
export default HomeBanner;