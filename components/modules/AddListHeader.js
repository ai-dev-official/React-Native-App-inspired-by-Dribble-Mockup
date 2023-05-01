import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function AddListHeader() {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigation}>
        <SearchIcons
          name="arrowleft"
          size={24}
          color="grey"
          style={styles.icon}
        />
      </TouchableOpacity>

      <Text style={styles.text}>Add new list</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
    borderWidth: 0.2,
    borderBottomColor: 'grey',
  },
  text: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 700,
  },
  icon: {
    color: '#ffffff',
    marginRight: 20,
  },
});
export default AddListHeader;
