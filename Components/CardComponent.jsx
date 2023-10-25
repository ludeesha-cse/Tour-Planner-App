import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';



const DestinationCard = ({ id, title, location, image, tags, tagLabel, onClick ,lat,lng }) => {
  function locationOpen(){
    console.log(location);
    Linking.openURL('https://maps.google.com/?q='+lat+','+lng);
    console.log('https://maps.google.com/?q='+lat+','+lng);
  }
  
  return (
    <View style={styles.container}>
      <Image source={{uri:image}} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
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
        onPress={locationOpen}
      >
        <Text style={{fontSize:8}}>Explore location on map
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
    padding: 5,
    margin: 4,
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
    height: 250,
  },
  image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1%',
    alignContent: 'center',
    
  },
  locationTitle: {
    fontSize: 10,
    fontWeight: '700',
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  tagsTitle: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
    marginLeft: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  tag: {
    borderWidth: 0.5,
    padding: 2,
    borderRadius: 20,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: '700',
    fontSize: 10,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor:'transparent',
  },
  mapLink: {
    color: '#0C356A',
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#0C356A',
    borderWidth: 1,
    borderRadius: 20,
    color: 'white',
    cursor: 'pointer',
    alignItems: 'center',
    textTransform: 'capitalize',
    padding: '10px 20px 10px 20px',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
    marginTop: 220,
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default DestinationCard;
