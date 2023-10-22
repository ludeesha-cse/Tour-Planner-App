import React, { useState } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const DatePicker = (props) => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [BtnDisplayStartDate, setBtnDisplayStartDate] = useState('Select Start Date');
  const [BtnDisplayEndDate, setBtnDisplayEndDate] = useState('Select End Date');

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setStartDate(currentDate);
    props.onStartDateChange(currentDate);
    setBtnDisplayStartDate(currentDate.toLocaleDateString());
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setEndDate(currentDate);
    props.onEndDateChange(currentDate);
    setBtnDisplayEndDate(currentDate.toLocaleDateString());
  };

  const showMode = (currentMode, onChangeCallback) => {

  const currentDate = currentMode === 'start' ? StartDate : EndDate;
  const minDate = currentMode === 'start' ? new Date() : StartDate;

    DateTimePickerAndroid.open({
      value: currentDate,
      onChange: (event, selectedDate) => {
        if (event.type === 'set') {
          // Check if the selected date is valid
          if (selectedDate < minDate) {
            // If the selected date is before the minDate, set it to minDate
            selectedDate = minDate;
          }
          // Call the provided onChangeCallback with the selected date
          onChangeCallback(event, selectedDate);
        }
      },
      mode: 'date',
      is24Hour: true,
    });
  };

  const showDatepickerStart = () => {
    showMode('start', onChangeStartDate);
  };

  const showDatepickerEnd = () => {
    showMode('end', onChangeEndDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grp}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>{props.datebox1}</Text>
        <TouchableOpacity onPress={showDatepickerStart} style={styles.TouchBox}>
          <Text style={styles.DateBtnContent}>{BtnDisplayStartDate}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grp}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>{props.datebox2}</Text>
        <TouchableOpacity onPress={showDatepickerEnd} style={styles.TouchBox}>
          <Text style={styles.DateBtnContent}>{BtnDisplayEndDate}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


  const styles = StyleSheet.create({
    TouchBox: {
      height: 50,
      alignSelf: 'center',
      width: '50%',
      margin: 'auto',
      borderWidth: 2,
      borderColor: '#000000',
      color: 'rgb(145, 145, 145)',
      borderRadius: 20,
      backgroundColor: '#E7E5DF',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    grp: {
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      height: 100,
      paddingBottom: 40,

    },
    DateBtnContent: {
      
      fontSize: 15,
    },
  });