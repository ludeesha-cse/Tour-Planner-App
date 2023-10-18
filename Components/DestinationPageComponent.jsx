import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import LocationBtnComponent from './LocationButton';
import DateBoxComponent from './DateBoxComponent';
import { ScrollView } from 'react-native-gesture-handler';
import PriceRangeComponent from './MultiSlider';
import DatePickerComponent from './DatePickerComponent';
import { Button } from 'react-native';

export default function DestinationButtons() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const destinationData = {
    startDate: startDate,
    endDate: endDate,
    location: location,
  };

  const handleStartDateChange = (selectedDate) => {
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (selectedDate) => {
    setEndDate(selectedDate);
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };
  ///////////////////////////////////////////////////////////////////
  const handlePriceChange = (selectedPrice) => {
    setPriceRange(selectedPrice);
  };

  function onDatePress(){
    <View>
      <Text>
      <DatePickerComponent />
      </Text>
      
    </View>
    
  };

  const onClick = () => {
    console.log(startDate);
    console.log(endDate);
    console.log(location);
    console.log(priceRange);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.btn_col}>
        <View style={styles.date_btn}>
            <DateBoxComponent text="Starting Date" onDateChange={handleStartDateChange} />
        </View>
        
        <View style={styles.date_btn}>
            <Button title='Date' onPress={onDatePress} />
        </View>
        {/* <View style={styles.date_btn}>
            <DatePickerComponent />
        </View> */}
        {/* <View style={styles.date_btn} >
            <DateBoxComponent text="End Date" onDateChange={handleEndDateChange} />
        </View> */}
        <View>
            <LocationBtnComponent onLocationChange={handleLocationChange} />
        </View>
      </View>

      <View>
        <PriceRangeComponent />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.exploreButton} onPress={onClick}>
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreButton: {
    backgroundColor: '#0C356A',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 18,
  },
  btn_col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'up',
    alignItems: 'center',
  },
  date_btn: {
    width: '100%',
  },
});

