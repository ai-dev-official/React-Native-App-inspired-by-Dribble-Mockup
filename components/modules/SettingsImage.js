import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CenterImage from '../assets/imk.png';

const SettingsImage = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsImage</Text>
    <Image source={CenterImage} style={styles.imgstyle}/>
    </View>
  );
};

export default SettingsImage;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 20,
    },
    imgstyle:{
        width: 360,
        height: 300,
    }
});
