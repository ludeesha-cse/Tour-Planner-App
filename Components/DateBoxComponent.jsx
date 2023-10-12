import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateBoxComponent(props) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      props.onDateChange(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.grp}>
      <Text style={styles.titleH}>{props.text}</Text>
      <View>
        <Text onPress={showDatepicker} style={styles.dateText}>
          {date.toDateString()}
        </Text>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 5,
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
