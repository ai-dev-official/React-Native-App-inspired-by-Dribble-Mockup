import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions 
} from 'react-native';

const TABS = ['Posts', 'Photos', 'Todos', 'Comments', 'Users'];

const windowWidth = Dimensions.get('window').width;


const SliderTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={{ height: 40, marginHorizontal: 10,  }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: windowWidth * TABS.length }}>

        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.touchable,
              activeTab === index ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => handleTabPress(index)}>
            <Text
              style={[
                styles.text,
                activeTab === index
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              {tab}
            </Text>
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
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  tab: {
    width: 80,
    height: 30,
    marginRight: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'red',
  },
  activeTab: {
    backgroundColor: 'transparent',
    borderColor: '#007aff',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#fff',
  },
  touchable: {
    width: 80,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 2,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
 
});
export default SliderTab;
