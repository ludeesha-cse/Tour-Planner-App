import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import DestinationButtons from '../Components/DestinationFormComponent';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';

function DestinationForm() {

  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/portrait/PortraitBG.jpg')}  >
    <NavBarComponent />
    <View style={styles.container}>
      <View style={styles.destinationButtons}>
        <DestinationButtons />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent',
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
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default DestinationForm;
