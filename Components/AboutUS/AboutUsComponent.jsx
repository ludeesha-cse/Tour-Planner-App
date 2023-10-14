import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AboutUsCarousels from './AboutUsCarousels'; // Make sure to import the correct component

export default function AboutUs2() {
  return (
    <View style={styles.aboutUs}>
      <Text style={styles.title}>We are JourneySync.</Text>
      <View>
        <AboutUsCarousels />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutUs: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 5,
    marginBottom: 20,
  },
});
