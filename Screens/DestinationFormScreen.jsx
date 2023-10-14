import React from 'react';
import { View, StyleSheet } from 'react-native';
import DestinationButtons from '../Components/DestinationPageComponent';


function DestinationForm({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.destinationButtons}>
        <DestinationButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navBar: {
    flex: 1,
  },
  destinationButtons: {
    flex: 7,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
});

export default DestinationForm;
