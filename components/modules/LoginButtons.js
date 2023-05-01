import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import GoogleImage from '../assets/google.png'
import AppleImage from '../assets/apple.png'
import {useNavigation} from '@react-navigation/native';

function LoginButtons  ()  {

    const navigation = useNavigation();
    const handleNavigation = () => {
      navigation.navigate('EmailLoginScreen');
    };

  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.textbold}>Chat with the smartest AI</Text>
        <Text style={styles.textsmall}>Experience the power of AI with us</Text>
      </View>
      <View>
        <TouchableOpacity>
            <View style={styles.buttonview}>
            <Text style={styles.buttontext}>Continue with Google</Text>
            <Image 
                source={GoogleImage}
                style={styles.image}
            />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.buttonview}>
            <Text style={styles.buttontext}>Continue with Google</Text>
            <Image 
                source={AppleImage}
                style={[styles.image, {}]}
            />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
             onPress = {handleNavigation}
        >
            <View style={[styles.buttonview2, {paddingVertical: 14, backgroundColor: '#0085ff',}]}>
            <Text style={styles.buttontext}>Continue with Email</Text>
            </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        backgroundColor: '#151718',
        marginTop: 60,
    },
    buttontext: {
        color: '#ffffff',
        fontSize: 18,
    },
    textcontainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    buttonview:{
        width: '100%',
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
        marginRight:15,
    }
    
});
export default LoginButtons;


