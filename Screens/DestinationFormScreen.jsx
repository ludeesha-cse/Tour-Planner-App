import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';
import DestinationButtons from '../Components/DestinationPageComponent';


function DestinationForm({navigation}) {
  const navbarItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about_us' },
    { label: 'Contact Us', href: '#contact_us' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavBarComponent items={navbarItems} navigation={navigation} />
      </View>

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
