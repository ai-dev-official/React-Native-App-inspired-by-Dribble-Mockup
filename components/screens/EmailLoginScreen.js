import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const EmailLoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" barStyle="light-content" />
      <View style={styles.textcontainer}>
        <Text style={styles.textbold}>Login to chat with smart AI</Text>
        <Text style={styles.textsmall}>Experience the power of AI with us</Text>
      </View>
      <View>
        <TextInput
          style={styles.buttonview}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor="#999999"
        />
        <TextInput
          style={styles.buttonview}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#999999"
        />
        <TouchableOpacity onPress={handleLogin}>
          <View
            style={[
              styles.buttonview2,
              {paddingVertical: 14, backgroundColor: '#0085ff'},
            ]}>
            <Text style={styles.buttontext}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default EmailLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151718',
  },
  buttontext: {
    color: '#ffffff',
    fontSize: 18,
  },
  textcontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  buttonview: {
    width: 320,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 20,
    color: '#ffffff',
  },
  buttonview2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#ffffff',
    borderRadius: 10,
  },
  textbold: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 15,
  },
  textsmall: {
    color: 'grey',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});
