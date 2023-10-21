import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const DestinationCard = ({ id, title, location, image, tags, tagLabel, onClick }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.location}>
        <Text style={styles.locationTitle}>{location}</Text>
      </View>
      <View style={styles.tags}>
        <Text style={styles.tagsTitle}>{tagLabel}: </Text>
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.mapLink}
        onPress={() => Linking.openURL('https://www.google.com/maps/place/'+location)}
      >
        <Text>Explore location on map
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onClick(id)}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    margin: 10,
    shadowColor: 'rgb(160, 255, 246)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    color: 'black',
    position: 'relative',
    transform: [{ translateY: 10 }],
    transition: 'transform 0.5s, box-shadow 0.2s',
  },
  image: {
    width: 300,
    height: 200,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1%',
    marginLeft: 10,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tagsTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  tag: {
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 20,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor:'red',
  },
  mapLink: {
    color: '#0C356A',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0C356A',
    borderWidth: 1,
    borderRadius: 20,
    color: 'white',
    cursor: 'pointer',
    alignItems: 'center',
    fontSize: 16,
    textTransform: 'capitalize',
    padding: '10px 20px 10px 20px',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default DestinationCard;
