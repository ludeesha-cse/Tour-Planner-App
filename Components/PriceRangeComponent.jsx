import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const PriceRangeComponent2 = (props) => {
  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(100000);

  const handleMinValueChange = (value) => {
    setMinValue(value);
    props.onPriceChange(value, maxValue); // Pass minValue and maxValue separately
  };

  const handleMaxValueChange = (value) => {
    setMaxValue(value);
    props.onPriceChange(minValue, value); // Pass minValue and maxValue separately
  };

  return (
    <View style={styles.sliderDiv}>
      <Text style={styles.sliderTitle}>Price Range</Text>
      <View style={styles.sliderContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={minValue.toString()}
          onChangeText={(text) => handleMinValueChange(+text)}
        />
        <View>
          <Slider
            style={styles.slider}
            value={parseInt(minValue)}
            onValueChange={(value) => handleMinValueChange(value.toString())}
            minimumValue={10000}
            maximumValue={parseInt(maxValue)}
          />
        </View>
        

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={maxValue.toString()}
          onChangeText={(text) => handleMaxValueChange(+text)}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  sliderDiv: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
  },
  sliderTitle: {
    fontSize: 20,
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  slider: {
    height: 10,
    width: '80%',
  },
  input: {
    width: '20%',
    textAlign: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default PriceRangeComponent2;
