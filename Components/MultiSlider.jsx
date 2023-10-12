import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const TwoThumbSlider = () => {

  const [twoWayValue, setTwoWayValue] = useState([10, 30]);

  const handleTwoWaySliderChange = value => {
    setTwoWayValue(value);
  };

  return (
    <View style={styles.container}>


      <Text style={styles.title}>Price Range</Text>
      <View style={styles.sliderInfo}>
        <View >
            <Text style={styles.sliderValue}>{twoWayValue[0]}</Text>
        </View>
        <View>
        <Text style={styles.sliderValue}>{twoWayValue[1]}</Text>
        </View>
        
      </View>

      <MultiSlider
        values={twoWayValue}
        onValuesChange={handleTwoWaySliderChange}
        sliderLength={300}
        min={0}
        max={100}
        step={1}
        allowOverlap={false}
        snapped={true}
        markerStyle={{ backgroundColor: 'green' }}
        selectedStyle={{ backgroundColor: 'green' }}
        unselectedStyle={{ backgroundColor: 'silver' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
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