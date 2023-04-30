import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import WomanImage from '../assets/colorimage.png';
import PersonImage from '../assets/colorimage1.png';
import EntypoCode from 'react-native-vector-icons/Entypo';

const TABS = ['Posts', 'Photos', 'Todos', 'Comments', 'Users'];

const API_URL = 'https://jsonplaceholder.typicode.com';

const SliderItems = () => {
  const [items, setItems] = useState([]);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}/${TABS[activeTab].toLowerCase()}?_limit=10`,
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [activeTab]);

  return (
    <View style={{height: 220, marginHorizontal: 10}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <TouchableOpacity
          onPress={handleTabPress}
            key={`${TABS[activeTab]}-${item.id}`}
            style={styles.items}>
            <View style={styles.itemIcon}>
              <EntypoCode name="code" size={30} />
            </View>
            <View style={styles.itemCol}>
              <View style={styles.imageView}>
                <Image style={styles.image} source={WomanImage} />
              </View>
              <View style={styles.itemText}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
  },

  items: {
    height: 190,
    width: 160,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 8,
  },
  itemCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  itemIcon: {
    position: 'absolute',
    top: 61,
    left: 10,
    backgroundColor: '#ffffff',
    zIndex: 999,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  imageView: {
    width: 160,
    height: 95,
  },
  image: {
    width: 160,
    height: 95,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  itemText: {
    width: 160,
    height: 95,
    backgroundColor: '#4d5156',
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 500,
  },
});
export default SliderItems;
