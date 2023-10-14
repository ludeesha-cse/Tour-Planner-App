import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions  } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const TwoThumbSlider = () => {

  const [twoWayValue, setTwoWayValue] = useState([10, 90]);
  const [sliderLength, setSliderLength] = useState(0);

  const handleTwoWaySliderChange = value => {
    setTwoWayValue(value);
  };

  useEffect(() => {
    // Calculate the slider length based on a percentage of the screen width (e.g., 80%)
    const screenWidth = Dimensions.get('window').width;
    const desiredPercentage = 60; // Adjust this as needed
    const calculatedSliderLength = (screenWidth * desiredPercentage) / 100;
    setSliderLength(calculatedSliderLength);
  }, []);

  return (
    <View style={styles.container}>

    
      <Text style={styles.title}>Price Range</Text>
        

      <View style={styles.sliderInfo}>
        <View >
            <Text style={styles.sliderValue}>{twoWayValue[0]} LKR</Text>
        </View>
        <MultiSlider
          values={twoWayValue}
          onValuesChange={handleTwoWaySliderChange}
          sliderLength={Math.min(500,sliderLength)}
          min={0}
          max={100}
          step={1}
          allowOverlap={false}
          snapped={true}
          markerStyle={{ backgroundColor: '#0C356A'}}
          selectedStyle={{ backgroundColor: '#0C356A' }}
          unselectedStyle={{ backgroundColor: 'silver' }}
        />
        <View>
          <Text style={styles.sliderValue}>{twoWayValue[1]} LKR</Text>
        </View>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sliderInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  sliderValue: {
    fontSize: 16,
  },

});

export default TwoThumbSlider;