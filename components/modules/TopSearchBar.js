import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import SearchIcons from 'react-native-vector-icons/AntDesign';


const TopSearchBar = () => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleQueryChange = (text) => {
      setQuery(text);
    };
  
    const handleInputFocus = () => {
      setIsFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsFocused(false);
    };
  

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for chat"
          placeholderTextColor="#aaa"
          onChangeText={handleQueryChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={query}
        />
        <SearchIcons name="search1" size={20} color="grey" style={styles.icon}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    height: 50,
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 7,
    backgroundColor: '#191c1f',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  searchWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    padddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#ffffff',
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,

  }
});
export default TopSearchBar;
