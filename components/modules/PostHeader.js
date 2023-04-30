import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AngleIcon from 'react-native-vector-icons/FontAwesome';
import FavImage from '../assets/img1A.png';

const PostHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AngleIcon name="angle-left" size={30} color="#ffffff" style={styles.iconStyle} />
        <Image source={FavImage} style={[styles.icon, {}]} />
        <View style={styles.text}>
          <Text style={styles.textA}>Favorites</Text>
          <Text style={styles.textB}>128 chats</Text>
        </View>
      </View>
     
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textA: {
    fontSize: 24,
    color: '#ffffff',
  },
  textB: {
    color: '#ffffff',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 6,
  },
});
