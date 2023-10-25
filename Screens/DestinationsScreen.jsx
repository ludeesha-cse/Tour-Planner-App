
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import DestinationCard from '../Components/CardComponent';
import { useNavigation } from '@react-navigation/native';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';
import axios from 'axios';
const Pic = require('../images/demodara.jpg');

const Destinations = ({ route }) => {
  const [destinations, setDestinations] = useState([]);
  // const destinations = [
  //   {
  //     position: 1,
  //     cid: 101,
  //     title: 'Example Destination 1',
  //     address: '123 Main Street',
  //     tags: ['Tag1', 'Tag2', 'Tag3'],
  //     thumbnailUrl: 'https://example.com/image1.jpg',
  //     latitude: 40.7128,
  //     longitude: -74.0060,
  //   },
  //   {
  //     position: 2,
  //     cid: 102,
  //     title: 'Example Destination 2',
  //     address: '456 Elm Street',
  //     tags: ['Tag4', 'Tag5'],
  //     thumbnailUrl: 'https://example.com/image2.jpg',
  //     latitude: 34.0522,
  //     longitude: -118.2437,
  //   },
  //   {
  //     position: 3,
  //     cid: 103,
  //     title: 'Example Destination 3',
  //     address: '789 Oak Street',
  //     tags: ['Tag6', 'Tag7', 'Tag8'],
  //     thumbnailUrl: 'https://example.com/image3.jpg',
  //     latitude: 51.5074,
  //     longitude: -0.1278,
  //   },
  //   {
  //     position: 4,
  //     cid: 104,
  //     title: 'Example Destination 4',
  //     address: '789 Oak Street',
  //     tags: ['Tag6', 'Tag7', 'Tag8'],
  //     thumbnailUrl: 'https://example.com/image3.jpg',
  //     latitude: 51.5074,
  //     longitude: -0.1278,
  //   },
  //   {
  //     position: 5,
  //     cid: 105,
  //     title: 'Example Destination 5',
  //     address: '789 Oak Street',
  //     tags: ['Tag6', 'Tag7', 'Tag8'],
  //     thumbnailUrl: 'https://example.com/image5.jpg',
  //     latitude: 51.5074,
  //     longitude: -0.1278,
  //   },
  //   // Add more destinations as needed
  // ];
  const navigation = useNavigation();
  const {loc} = route.params;
  const tags = ['Nature', 'Adventure', 'Hiking'];

  useEffect(() => {
    const fetchDestinations = async() => {
      const headers = {
        'X-API-KEY': 'API KEY',
        'Content-Type': 'application/json',
      };
    
      const data = {
        q: 'places to visit in '+ loc,
        gl: 'lk',
      };
    
      try {
        const response = await axios.post('https://google.serper.dev/places', data, {
          headers,
        });

        if(response.data){
          setDestinations(response.data.places);
          console.log("Destinations : =================>>>>>>>>>>>>>"+destinations);
          console.log(" Response.data :========>>>>>>>>>>>"+response.data);
        }
        else{
          console.log("No data");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchDestinations();  
  },[]);
  

  const handleClick = (key) => {
    // Handle click action
    console.log("object");
  };

  const navigateToAccomodationForm = () => {
    navigation.navigate('AccommodationForm',{
      startDate: startDate,
      endDate: endDate,
      loc: loc,
    });
  };

  return (
    <View style={styles.container}>
      <NavBarComponent />
      <View style={styles.dst}>
        <View style={styles.dstContainer}>
          <Text style={styles.dstHeading}>Recommended places to visit in {loc}</Text>
          <View style={styles.dstBtn}>
            <TouchableOpacity style={styles.button}>
              <Text>Change Trip Data</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dstCards}>
            {destinations.length > 0 ? (
              <FlatList
                data={destinations}
                numColumns={2} // Display two columns per row
                keyExtractor={(destination) => destination.position.toString()}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                    <DestinationCard key={item.position} id={item.cid} title={item.title} location={item.address} tags={tags} tagLabel="Location tags" image={item.thumbnailUrl} onClick={handleClick} lat={item.latitude} lng={item.longitude}/>
                  </View>
              
                )}
              />
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
          <View style={styles.dstBtn}>
            <TouchableOpacity style={styles.button} onPress={navigateToAccomodationForm}>
              <Text>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 500,
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
  card: {
    flex: 1,
    margin: 5,
  }, 
  
  dstContainer: {
    height: '80%',
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
