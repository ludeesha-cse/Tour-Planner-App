import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AccommodationButtons from '../Components/AccomodationFormComponent';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';

function AccommodationForm(startDate,endDate,loc) {

  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/portrait/PortraitBG.jpg')}  >
    <NavBarComponent />
    <View style={styles.container}>
      <View style={styles.destinationButtons}>
        <AccommodationButtons startDate={startDate} endDate={endDate} loc={loc}/> 
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

export default AccommodationForm;
