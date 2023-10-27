
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import DestinationCard from '../Components/DestinationCardComponent';
import { useNavigation } from '@react-navigation/native';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';
import axios from 'axios';

const Destinations = ({ route }) => {
  const [destinations, setDestinations] = useState([]);
  const navigation = useNavigation();
  const {loc} = route.params;
  const tags = ['Nature', 'Adventure', 'Hiking'];

  useEffect(() => {
    const fetchDestinations = async() => {
      const headers = {
        'X-API-KEY': '10859bbd384ce9d3ebb3c2663dddef1c7adef465',
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
          console.log(response.data.places);
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
  
  function replaceThumbnailUrl(originalUrl) {
    // Use the replace method to replace "w92-h92" with the replacement string
    const updatedUrl = originalUrl.replace("w92-h92","w500-h500");
    return updatedUrl;
  }
  
  // const thumbnailUrl = destinations[0].thumbnailUrl;
  // const newThumbnailUrl = replaceThumbnailUrl(thumbnailUrl, "new-string");

  const handleClick = (key) => {
    // Handle click action
    console.log("object");
  };

  const navigateToAccomodationForm = () => {
    navigation.navigate('AccommodationForm',{
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
              <Text style={{color:"white"}}>Change Trip Data</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dstCards}>
            {destinations.length > 0 ? (
              <FlatList
                data={destinations}
                numColumns={2} // Display two columns per row
                //keyExtractor={(destination) => destination.position.toString()}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                    <DestinationCard key={item.position} id={item.cid} title={item.title} location={item.address} tags={tags} tagLabel="Location tags" image={replaceThumbnailUrl(item.thumbnailUrl)} onClick={handleClick} lat={item.latitude} lng={item.longitude}/>
                  </View>
              
                )}
              />
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
          <View style={styles.dstBtn}>
            <TouchableOpacity style={styles.button} onPress={navigateToAccomodationForm}>
              <Text  style={{color:"white"}}>Next Step</Text>
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
    fontSize: 16,
    textTransform: 'capitalize',
    padding: '6px 18px 6px 18px',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Destinations;
