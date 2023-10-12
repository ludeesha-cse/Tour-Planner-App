import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function DateBoxComponent(props) {
  const [selectedDate, setSelectedDate] = useState('');

  // Callback function to pass the selected date to the parent
  const handleDateChange = (text) => {
    setSelectedDate(text);
    props.onDateChange(text); // Call the parent's callback function
  };

  return (
    <View style={styles.grp}>
      <Text style={styles.titleH}>{props.text}</Text>
      <TextInput
        style={styles.box}
        placeholder="Select a date"
        value={selectedDate}
        onChangeText={handleDateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 58,
    alignSelf: 'center',
    textAlign: 'center',
    width: '60%',
    margin: 'auto',
    borderWidth: 2,
    borderColor: '#000000',
    color: 'rgb(145, 145, 145)',
    borderRadius: 20,
    backgroundColor: '#E7E5DF',
  },
  grp: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titleH: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
