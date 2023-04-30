import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LastImage from '../assets/img12.jpg'
import RightImage from '../assets/img11.jpg'
import NextImage from '../assets/img1A.png'
import PrevImage from '../assets/img6.png'
import QuadImage from '../assets/img8.jpg'
import SmileyImage from '../assets/girl.webp'
import SmileyImage1 from '../assets/images.jpg'
import SmileyImage2 from '../assets/selfie.webp'

const TodoList = () => {
  return (
    <View>
      <View style={styles.container}>
      <View style={styles.innerview}>
      <View style={styles.image}>
        <Image style={styles.mainimage} source={NextImage}/>
      </View>
      <View style={styles.centraltext}>
    <Text style={styles.centraltexttext}>Education feedback</Text>
        <View style={styles.imagearray}>
            <Image style={styles.tinyimage} source={SmileyImage}/>
            <Image style={styles.tinyimage} source={SmileyImage1}/>
            <Image style={styles.tinyimage} source={SmileyImage2}/>
        </View>
      </View>
      </View>
      <View style={styles.timestamp}>
        <Text style={styles.timetext}>1m ago</Text>
      </View>
      </View>
      <View style={styles.container}>
      <View style={styles.innerview}>
      <View style={styles.image}>
        <Image style={styles.mainimage} source={PrevImage}/>
      </View>
      <View style={styles.centraltext}>
    <Text style={styles.centraltexttext}>Code generation</Text>
        <View style={styles.imagearray}>
            <Image style={styles.tinyimage} source={SmileyImage}/>
            <Image style={styles.tinyimage} source={SmileyImage1}/>
            <Image style={styles.tinyimage} source={SmileyImage2}/>
        </View>
      </View>
      </View>
      <View style={styles.timestamp}>
        <Text style={styles.timetext}>1m ago</Text>
      </View>
      </View>
      <View style={styles.container}>
      <View style={styles.innerview}>
      <View style={styles.image}>
        <Image style={styles.mainimage} source={QuadImage}/>
      </View>
      <View style={styles.centraltext}>
    <Text style={styles.centraltexttext}>Photo retouch</Text>
        <View style={styles.imagearray}>
            <Image style={styles.tinyimage} source={SmileyImage}/>
            {/* <Image style={styles.tinyimage} source={SmileyImage1}/>
            <Image style={styles.tinyimage} source={SmileyImage2}/> */}
        </View>
      </View>
      </View>
      <View style={styles.timestamp}>
        <Text style={styles.timetext}>1m ago</Text>
      </View>
      </View>
      <View style={styles.container}>
      <View style={styles.innerview}>
      <View style={styles.image}>
        <Image style={styles.mainimage} source={RightImage}/>
      </View>
      <View style={styles.centraltext}>
    <Text style={styles.centraltexttext}>Artificial Intelligence</Text>
        <View style={styles.imagearray}>
            <Image style={styles.tinyimage} source={SmileyImage}/>
            <Image style={styles.tinyimage} source={SmileyImage1}/>
            <Image style={styles.tinyimage} source={SmileyImage2}/>
        </View>
      </View>
      </View>
      <View style={styles.timestamp}>
        <Text style={styles.timetext}>1day ago</Text>
      </View>
      </View>
      <View style={styles.container}>
      <View style={styles.innerview}>
      <View style={styles.image}>
        <Image style={styles.mainimage} source={LastImage}/>
      </View>
      <View style={styles.centraltext}>
    <Text style={styles.centraltexttext}>Battlefield Paraphernalia</Text>
        <View style={styles.imagearray}>
            <Image style={styles.tinyimage} source={SmileyImage}/>
            <Image style={styles.tinyimage} source={SmileyImage1}/>
            <Image style={styles.tinyimage} source={SmileyImage2}/>
        </View>
      </View>
      </View>
      <View style={styles.timestamp}>
        <Text style={styles.timetext}>1m ago</Text>
      </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    innerview : {
        display: 'flex',
        flexDirection: 'row',
    },
    mainimage: {
        height: 60,
        width: 60,
        borderRadius: 10,
        marginRight: 20,
    },
    imagearray: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 7,
    },
    tinyimage: {
        height: 25,
        width: 25,
        borderRadius: 12,
        marginLeft: -12,
        borderColor: '#1d1f20',
        borderWidth: 3,
    },
    centraltext: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'flex-start',
    },
    centraltexttext: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 10,
    },
    timestamp: {
    marginRight: 5,
    },
    timetext: {
        fontSize: 16,
        color: '#696d70',
    }
});

export default TodoList;
