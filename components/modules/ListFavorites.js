import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AngleIcons from 'react-native-vector-icons/FontAwesome';

const ListFavorites = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textIcon}>
      <Text style={styles.textBold}>Favorites</Text>
      <AngleIcons name="angle-right" size={20} color="grey" style={styles.icon}/>
      </View>
      <Text style={styles.textItalic}>See all</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        paddingLeft: 5,
        paddingRight: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    textBold: {
        fontSize: 16,
        fontWeight: 600,
        color: 'grey',
        marginRight: 20,
    },
    textItalic: {
        fontSize: 16,
        fontWeight: 400,
        color: '#0552ac',
        alignSelf: 'flex-end',
        marginRight: -20,
    },
    textIcon: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }
});
export default ListFavorites;