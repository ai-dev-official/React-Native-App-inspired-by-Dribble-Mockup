import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CareEmoji from '../assets/16.png';
import SmileEmoji from '../assets/13.png';
import FireEmoji from '../assets/14.png';
import DevilEmoji from '../assets/15.png';
import LaughEmoji from '../assets/img12.jpg';

const ListListItem = () => {
  return (
    <View>
     <View style={styles.container}>
     <View style={styles.image}>
        <Image 
            source={CareEmoji} 
            style={[styles.icon, {}]} 
        />
      <Text style={styles.textStyle}>Welcome</Text>
        </View>
      <TouchableOpacity style={styles.text}>
        <Text style={styles.textItem}>59 new</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.container}>
     <View style={styles.image}>
        <Image 
            source={DevilEmoji} 
            style={[styles.icon, {}]} 
        />
      <Text style={styles.textStyle}>Production</Text>
        </View>
      <TouchableOpacity style={styles.text}>
        <Text style={styles.textItem}>59 new</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.container}>
     <View style={styles.image}>
        <Image 
            source={SmileEmoji} 
            style={[styles.icon, {}]} 
        />
      <Text style={styles.textStyle}>Favorite</Text>
        </View>
      <TouchableOpacity style={styles.text}>
        <Text style={styles.textItem}>59 new</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.container}>
     <View style={styles.image}>
        <Image 
            source={LaughEmoji} 
            style={[styles.icon, {}]} 
        />
      <Text style={styles.textStyle}>Trash</Text>
        </View>
      <TouchableOpacity style={styles.text}>
        <Text style={styles.textItem}>59 new</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.container}>
     <View style={styles.image}>
        <Image 
            source={FireEmoji} 
            style={[styles.icon, {}]} 
        />
      <Text style={styles.textStyle}>Archived</Text>
        </View>
      <TouchableOpacity style={styles.text}>
        <Text style={styles.textItem}>59 new</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight: 20,
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 600,
    },
    text: {
        backgroundColor: '#242627',
        paddingHorizontal:10,
        paddingVertical: 5,
        borderRadius: 7,
    },
    textItem: {
        color: 'grey',
        fontWeight: 500,
        fontSize: 18,
    }
});
export default ListListItem;


