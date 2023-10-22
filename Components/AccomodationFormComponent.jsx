import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PriceRangeComponent from './MultiSlider';
import {DatePicker} from './DatePicker';
import IncDecBtn from './IncrementButton';
import { useNavigation } from '@react-navigation/native';

export default function AccommodationButtons(props) {
  const navigation = useNavigation();
  const [checkInDate, setcheckInDate] = useState('');
  const [checkOutDate, setEndDate] = useState('');
  const [priceRange, setPriceRange] = useState([10000,100000]);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  
  const destinationData = {
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
  };

  const handlecheckInDateChange = (selectedDate) => {
    setcheckInDate(selectedDate);
  };

  const handleEndDateChange = (selectedDate) => {
    setEndDate(selectedDate);
  };

  const handlePriceChange = (selectedPrice) => {
    setPriceRange(selectedPrice);
  };

  //const isFormValid = checkInDate && checkOutDate && location && priceRange.length > 0;
  const isFormValid = checkInDate && checkOutDate;

  const onClick = () => {
    if (isFormValid) {
      console.log("Start Date: "+checkInDate);
      console.log("End Date: "+checkOutDate);
      navigation.navigate('Destinations',{
        cin: checkInDate,
        cout: checkOutDate,
        loc: props.loc,
      })
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
          <DatePicker oncheckInDateChange={handlecheckInDateChange} onEndDateChange={handleEndDateChange}  datebox1="Check In Date" datebox2="Check Out Date"/>  
        </View>
      </View>

        <View style={styles.IncDecBtnStyle}>
            <IncDecBtn text="No of Adults"/>
        </View>
        <View style={styles.IncDecBtnStyle}>
            <IncDecBtn text="No of Children"/>
        </View>
      <View>
        <PriceRangeComponent onPriceChange={handlePriceChange}/>
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
    backgroundColor: 'transparent',
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
  IncDecBtnStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

