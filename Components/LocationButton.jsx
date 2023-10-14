import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const data = require('./town.json');

export default function LocationBtnComponent(props) {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onChange = (text) => {
    setValue(text);

    const searchTerm = text.toLowerCase();
    const filteredResults = data.filter((item) => {
      const cityName = item.city_name.toLowerCase();
      return searchTerm && cityName.startsWith(searchTerm) && cityName !== searchTerm;
    });
    setSearchResults(filteredResults);
  };

  const onCityClick = (cityName) => {
    props.onLocationChange(cityName);
    setValue(cityName);
    setSearchResults([]);
  };

  return (
    <View style={styles.locationBtn}>
      <Text style={styles.headerText}>Destination Town</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchInner}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder='Search for a town...'
          />
          {/* <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => props.onSearch(value)}
          >
            <Text>Search</Text>
          </TouchableOpacity> */}
        </View>
        {searchResults.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dropdownRow}
            onPress={() => onCityClick(item.city_name)}
          >
            <Text>{item.city_name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationBtn: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    margin: 'auto',
    padding: 20,
  },
  headerText: {
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'column',
    backgroundColor: '#E7E5DF',
    borderRadius: 20,
    width: '100%',
  },
  searchInner: {
    flexDirection: 'row',
    backgroundColor: '#E7E5DF',
    borderWidth: 2,
    borderRadius: 20,
    height: 60,
    width: '100%',
  },
  searchBtn: {
    borderRadius: 40,
    backgroundColor: '#E7E5DF',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownRow: {
    textAlign: 'start',
    marginVertical: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  // This code makes the text in the TextInput centered, with no border.

input: {
    width: '90%',
    color: 'black',
    borderWidth: 0, // Remove the border
    textAlign: 'center',
  },
});
