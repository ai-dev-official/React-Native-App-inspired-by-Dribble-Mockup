import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import RunImage from '../assets/img7.png';
import ToyImage from '../assets/img7a.jpg';
import YellImage from '../assets/img9a.jpg';
import BotImage from '../assets/img10a.jpg';

const PostSlider = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.items}>
            <Image 
                source={RunImage} 
                style={styles.image} 
            />
            <Text style={styles.text}>Superman cartoon</Text>
            <Text style={styles.timeText}>2min ago</Text>
        </View>
        <View style={styles.items}>
            <Image 
                source={ToyImage} 
                style={styles.image} 
            />
            <Text style={styles.text}>Colorful 3D Charmer</Text>
            <Text style={styles.timeText}>10min ago</Text>
        </View>
        <View style={styles.items}>
            <Image 
                source={YellImage} 
                style={styles.image} 
            />
            <Text style={styles.text}>Messmerize 3D Challenge</Text>
            <Text style={styles.timeText}>10min ago</Text>
        </View>
        <View style={styles.items}>
            <Image 
                source={BotImage} 
                style={styles.image} 
            />
            <Text style={styles.text}>Dublin City Garda SuperBot</Text>
            <Text style={styles.timeText}>10min ago</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostSlider;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 10,
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: 20,
    },
    image: {
        width:260,
        height: 200,
        marginBottom: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        color: '#ffffff',
    },
    timeText: {
        fontSize: 16,
        color: '#696d70',
    }
});
