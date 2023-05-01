import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import AngleIcons from 'react-native-vector-icons/FontAwesome';
import EnvelopeIcons from 'react-native-vector-icons/FontAwesome';
import CheckMarkIcons from 'react-native-vector-icons/Ionicons';
import FirstImage from '../assets/smiley1.png';
import NextImage from '../assets/person.png';

const AddListInvite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Invite team member</Text>
      <View style={styles.inputcontainer}>
        <View style={styles.TextInput}>
          <View style={styles.rowinputs}>
            <EnvelopeIcons
              name="envelope"
              size={20}
              color="#585a5c"
              style={[styles.icons, {marginRight: 10}]}
            />
            <TextInput placeholder="Email" placeholderTextColor="#585a5c" />
          </View>
          <View style={styles.rowinputs}>
            <Text style={styles.text}>Can view</Text>
            <AngleIcons
              name="angle-down"
              size={30}
              color="#ffffff"
              style={[styles.icons, {marginLeft: 20}]}
            />
          </View>
        </View>
        <Text style={styles.textcenter}>
          Only people invited in this list can access
        </Text>
        <View style={styles.row}>
          <View style={styles.imageside}>
            <Image source={NextImage} style={[styles.icon, {}]} />
            <Text style={styles.textleft}>Janiya (you)</Text>
          </View>
          <View style={styles.textside}>
            <Text style={styles.textright}>Full access</Text>
            <CheckMarkIcons
              name="checkmark"
              size={20}
              color="grey"
              style={[styles.tick, {}]}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageside}>
            <Image source={FirstImage} style={[styles.icon, {}]} />
            <Text style={styles.textleft}>Janiya (you)</Text>
          </View>
          <View style={styles.textside}>
            <Text style={[styles.textright, {color: '#585a5c',marginRight: 25}]}>Can View</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddListInvite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    color: '#ffffff',
  },
  inputcontainer: {
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 20,
    marginTop: 10,
  },
  TextInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginBottom: 20,
  },
  rowinputs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: 20,
  },
  textcenter: {
    color: '#585a5c',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imageside: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textside: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textleft: {
    color: '#585a5c',
  },
  textright: {
    color: 'grey',
  },
  tick: {
    marginLeft: 5,
  }
});
