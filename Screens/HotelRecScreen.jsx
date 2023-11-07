
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import HotelCard from '../Components/HotelCardComponent';
import { useNavigation } from '@react-navigation/native';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';
import axios from 'axios';


const HotelRecom=({routes})   => {
    const [hotels, setHotels] = useState([]);
    const navigation = useNavigation();
    const {loc} = "Matara";
    // const {cin} = route.params;
    //const {cout} = route.params;
    // const {adult} = route.params;
    // const {child} = route.params;
    const tags = ['Nature', 'Adventure', 'Hiking'];
    
    const getGeoLocation = async (location) => {
        const params={
            api_key: "API KEY",
            q: location,
            type: "city",
            country_code: "lk"
        };

        try {
            console.log("working");
            // make the http GET request to Scale SERP
            const response = await axios.get('https://api.scaleserp.com/locations', { params });
            
            const jsonData = response.data;
            const latitude = jsonData.locations[0].gps_coordinates.latitude;
            const longitude = jsonData.locations[0].gps_coordinates.longitude;
    
            //console.log(latitude,longitude);
            return {latitude, longitude};
        } catch (error) {
            // catch and print the error
            console.error(error);
        }
    };
    const handleClick=()=>{

    };

    useEffect(() => {
        const fetchHotels = async() => {
            const options = {
                method: 'GET',
                url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
                params: {
                    units: 'metric',
                    room_number: '1',
                    longitude: '80.8612',
                    latitude: '6.9271',
                    filter_by_currency: 'AED',
                    order_by: 'class_descending',
                    locale: 'en-gb',
                    checkout_date: '2023-11-05',
                    adults_number: 2,
                    checkin_date: '2023-11-02',
                    children_ages: '5,0',
                    include_adjacency: 'true',
                    children_number: 2,
                    page_number: '0',
                    categories_filter_ids: 'class::2,class::4,free_cancellation::1'
                },
                headers: {
                    'X-RapidAPI-Key': 'b2e87b87a2msh1f7b0873deee4f5p1e24f7jsnc8644af3ecda',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                  }
            };

          try {
            // const response = await getHotels('2023-11-01', '2023-11-02', '2', '2', 'Colombo');
            // // console.log(response);
            // if(response){
            //   setHotels(response.data);
            // //   console.log(response.data);
            //   console.log("==============================================================="+hotels);
            // }
            // else{
            //   console.log("No data");
            // }


            //get the geo location of the destination
            const geoLoc = await getGeoLocation(loc);
            //console.log(geoLoc.longitude,geoLoc.latitude); 

            //update the options with the geo location
            options.params.longitude = geoLoc.longitude;
            options.params.latitude = geoLoc.latitude;

            const response = await axios.request(options);
            console.log(response.data);
            
            setHotels(response.data.result);
            console.log("==============================================================="+hotels);

          } catch (error) {
            console.error('Error:', error);
          }
        }

        
        fetchHotels();  
      },[]);


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
                {hotels.length > 0 ? (
                  <FlatList
                    data={hotels}
                    numColumns={2} // Display two columns per row
                    //keyExtractor={(hotel) => hotel.position.toString()}
                    renderItem={({ item } , index) => (
                      <View style={styles.card}>
                        <HotelCard key={index} id={index} title={item.hotel_name} location={item.city} tags={[item.review_score, item.review_score_word]} tagLabel="Location tags" image={item.max_photo_url} onClick={handleClick} lat={7.293609} lng={80.641325}/>
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
  

export default HotelRecom;
