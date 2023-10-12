import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function IncDecBtn(props) {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 20) {
      setNum(num + 1);
    }
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleChange = (value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 20) {
      setNum(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.incBtnComponent}>
        <View style={styles.incBtnWithHeader}>
          <Text style={styles.headerText}>{props.text}</Text>
          <View style={styles.incrBtn}>
            <TouchableOpacity onPress={decNum} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={num.toString()}
              onChangeText={handleChange}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={incNum} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incBtnComponent: {
    width: '40%',
    maxWidth: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incBtnWithHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    width: 120,
  },
  incrBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#E7E5DF',
  },
  button: {
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  input: {
    flex: 1,
    backgroundColor: '#E7E5DF',
    textAlign: 'center',
  },
});
