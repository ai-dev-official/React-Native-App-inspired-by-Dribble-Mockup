import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import ChatImage from '../assets/chat.png';
import BlackImage from '../assets/black.png'

const AddScreenInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name</Text>
      <View style={styles.buttonview}>
        <Image source={ChatImage} style={[styles.icon, {}]} tintColor="grey" />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#999999"
        />
      </View>
      <Text style={styles.text}>Color</Text>
      <View style={styles.buttonview}>
        <Image source={BlackImage} style={[styles.icon, {}]} tintColor="#0085ff" />
        <TextInput
          secureTextEntry={true}
          placeholder="Blue sky"
          placeholderTextColor="#999999"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  buttonview: {
    width: 350,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 7,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#ffffff',
  },
  text: {
    color: '#ffffff',
    marginBottom: 10,
  },
  icon: {
    color: '#ffffff',
    marginRight: 10,
  },
});
export default AddScreenInput;
