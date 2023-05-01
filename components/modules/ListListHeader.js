import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DoubleBarIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GridIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListFloatingAddIcon from './ListFloatingAddIcon';

const ListListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat list</Text>
      <View style={styles.icon}>
      <TouchableOpacity>
        <DoubleBarIcons
          name="equal"
          size={20}
          color="#ffffff"
          style={[styles.icons, {}]}
        />
        </TouchableOpacity>

        <TouchableOpacity>
          <GridIcons
            name="grid-large"
            size={20}
            color="grey"
            style={styles.icons}
          />
        </TouchableOpacity>
        <ListFloatingAddIcon />
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
    height: 60,
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#343839',
    borderBottomColor: '#343839',
    borderStyle: 'dotted'
  },
  text: {
    color: 'grey',
    marginLeft: -5,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
  },
  icons: {
    marginRight: 25,
  }
});
export default ListListHeader;
