import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CareEmoji from '../assets/cc.png';
import SmileEmoji from '../assets/aa.png';
import FireEmoji from '../assets/ee.png';
import DevilEmoji from '../assets/bb.png';
import LaughEmoji from '../assets/ff.png';
import MeanEmoji from '../assets/gg.png';
import HappyEmoji from '../assets/hh.png';

const ListListItem = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.image}>
          <Image source={CareEmoji} style={[styles.icon, {}]} />
        </TouchableOpacity>
        <View>
        <Text style={styles.textStyle}>3D Illustration Generation</Text>
        <Text style={styles.textItem}>1min ago</Text>
        </View>
      </View>
      <View style={styles.smallImg}>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.image}>
          <Image source={DevilEmoji} style={[styles.icons, {}]} />
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.textStyle}>Guiter character</Text>
          <Text style={styles.textItem}>59 new</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.image}>
          <Image source={SmileEmoji} style={[styles.icons, {}]} />
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.textStyle}>Celebrating</Text>
          <Text style={styles.textItem}>59 new</Text>
        </View>
      </View>
      </View>
      <View style={styles.smallImg}>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.image}>
          <Image source={FireEmoji} style={[styles.icons, {}]} />
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.textStyle}>Super hero</Text>
          <Text style={styles.textItem}>59 new</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.image}>
          <Image source={LaughEmoji} style={[styles.icons, {}]} />
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.textStyle}>Rider club</Text>
          <Text style={styles.textItem}>59 new</Text>
        </View>
      </View>
      </View>
      <View style={styles.smallImg}>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.image}>
          <Image source={HappyEmoji} style={[styles.icons, {}]} />
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.textStyle}>Super hero</Text>
          <Text style={styles.textItem}>59 new</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.image}>
          <Image source={MeanEmoji} style={[styles.icons, {}]} />
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.textStyle}>Rider club</Text>
          <Text style={styles.textItem}>59 new</Text>
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginBottom: 80,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  containers: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallImg: {
    width: '100%',
    height: '24%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  icon: {
    width: '100%',
    height: 175,
    borderRadius: 15,
    marginRight: 10,
  },
  icons: {
    width: 175,
    height: 175,
    borderRadius: 15,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 35,
  },
  text: {
    marginTop: 5,
  },
  textItem: {
    color: 'grey',
    fontWeight: 500,
    fontSize: 12,
  },
});
export default ListListItem;
