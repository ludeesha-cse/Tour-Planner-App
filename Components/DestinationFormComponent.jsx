import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import LocationBtnComponent from './LocationButton';
import { ScrollView } from 'react-native-gesture-handler';
import PriceRangeComponent from './MultiSlider';
import { Button } from 'react-native';
import {DatePicker} from './DatePicker';

export default function DestinationButtons() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  //const [priceRange, setPriceRange] = useState([]);

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
  // const handlePriceChange = (selectedPrice) => {
  //   setPriceRange(selectedPrice);
  // };

  const isFormValid = startDate && endDate && location && priceRange.length > 0;

  const onClick = () => {
    if (isFormValid) {
    console.log("Start Date: "+startDate);
    console.log("End Date: "+endDate);
    console.log(location);
    }
    else {
      alert('Please fill all the fields');
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.btn_col}>
        
        <View style={styles.date_btn}>
          <DatePicker onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange}/>  
        </View>

        <View>
            <LocationBtnComponent onLocationChange={handleLocationChange} />
        </View>
      </View>

      {/* <View>
        <PriceRangeComponent onPriceChange={handlePriceChange}/>
      </View> */}

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
    backgroundColor: 'transparent',
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
    paddingTop: 40,
    width: '100%',
    height: 250,
  },
});

