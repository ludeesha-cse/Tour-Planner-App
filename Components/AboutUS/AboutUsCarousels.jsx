import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SlidingSection from './SlidingSection'; // Make sure to import the correct component

export default function AboutUsCarousels() {
  const [index, setIndex] = useState(0);

  const captionStyle = {
    height: '60vh', // You can adjust these values as needed
    width: '80%', // Adjust the width to your preference
    paddingTop: '18vh',
    margin: 'auto',
  };

  const data = [
    {
      title: 'JourneySync',
      description:
        "Welcome to JourneySync, your trusted companion for seamless travel experiences! Our Story",
    },
    {
      title: 'Our Mission',
      description:
        "At JourneySync, our mission is to empower travelers worldwide...",
    },
    {
      title: 'Why Choose JourneySync?',
      description:
        "Expertise: Our team of travel enthusiasts and technology experts combines years of experience...",
    },
    {
      title: 'What We Offer',
      description:
        "Travel Planning: JourneySync offers a suite of planning tools...",
    },
  ];

  return (
    <Carousel
      data={data}
      renderItem={({ item }) => (
        <ScrollView style={styles.slidingSection}>
          <SlidingSection title={item.title} description={item.description} />
        </ScrollView>
      )}
      sliderWidth={window.innerWidth} // Use the screen width for slider width
      itemWidth={window.innerWidth}
      onSnapToItem={(index) => setIndex(index)}
    />
  );
}

const styles = StyleSheet.create({
  slidingSection: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 'auto',
    borderRadius: 20, // Adjust as needed
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: '60vh',
    width: '80%',
  },
});
