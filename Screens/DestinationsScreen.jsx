import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import DestinationCard from '../Components/CardComponent';
const Pic = require('../images/demodara.jpg');
import { useNavigation } from '@react-navigation/native';

const Destinations = () => {
  const tags = ['Nature', 'Adventure', 'Hiking'];
  const navigation = useNavigation();

  const handleClick = (key) => {
    // Handle click action
  };

  const handleNextStep = () => {
    navigation.navigate('AccommodationForm');
  };

  const cardComponents = [
    <DestinationCard key={1} id={1} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    <DestinationCard key={2} id={2} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    <DestinationCard key={3} id={3} title="Nine Arches Tunnels" location="Demodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    <DestinationCard key={4} id={4} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    <DestinationCard key={5} id={5} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
    <DestinationCard key={6} id={6} title="Nine Arches Tunnels" location="Dodara" tags={tags} tagLabel="Location tags" image={Pic} onClick={handleClick} />,
  ];

  const navbarItems = [
    { label: 'Home', href: '/' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dst}>
        <View style={styles.dstContainer}>
          <Text style={styles.dstHeading}>Recommended places to visit in Kandy</Text>
          <View style={styles.dstBtn}>
            <TouchableOpacity style={styles.button}>
              <Text>Change Trip Data</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dstCards}>
            {cardComponents.map((card) => (
              <View key={card.key}>{card}</View>
            ))}
          </View>
          <View style={styles.dstBtn}>
            <TouchableOpacity style={styles.button} onPress={handleNextStep}>
              <Text>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dst: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: '4%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  dstHeading: {
    color: '#0C356A',
    fontWeight: '700',
    fontStyle: 'italic',
    fontSize: 28,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  dstBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dstCards: {
    marginTop: 5,
    marginBottom: 5,
    transform: [{ translateY: 10 }],
  },
  button: {
    backgroundColor: '#0C356A',
    borderWidth: 1,
    borderRadius: 20,
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
    padding: '6px 18px 6px 18px',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Destinations;
