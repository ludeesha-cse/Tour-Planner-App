import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SlidingSection({ title, description }) {
  return (
    <View style={styles.slidingSection}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slidingSection: {
    justifyContent: 'flex-start',
    margin: 'auto',
    borderRadius: 20, // Adjust as needed
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: '60vh',
    width: '80%',
    padding: 10, // Add padding for text
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24, // Adjust the font size as needed
    textAlign: 'center', // Center the title
  },
  description: {
    textAlign: 'left', // Align description text to the left
    paddingTop: '2vh',
    paddingBottom: '2vh',
  },
});
