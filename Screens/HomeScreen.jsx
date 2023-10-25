import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Button } from 'react-native';
import AboutUs from '../Components/AboutUsComponent';
import NavBarComponent from '../Components/NavBar&Footer/NavBarComponent';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <NavBarComponent />
      <ScrollView>
        <ImageBackground
          source={require('../images/portrait/landing_background_portrait.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>

            <View style={styles.welcomeNote}>
              <Text style={styles.welcomeText}>
                {"|NAVIGATE THE WORLD'S MARVELOUS."}
              </Text>
              <View style={styles.getStartedButton}>
                <Button title="Get Started" onPress={() => navigation.navigate('DestinationFormScreen')} />
              </View>
            </View>
            <View style={styles.abouts}>
              <ScrollView contentContainerStyle={styles.paragraphs}>
                <Text style={styles.paragraph}>
                  Step into a world of possibilities where your journey begins. 
                  We're here to make your travel dreams come true. Explore exotic destinations, 
                  create unforgettable itineraries, and embark on adventures like never before.
                </Text>
                <Text style={styles.paragraph}>
                  At JourneySync, we're dedicated to providing you with the best travel experiences. 
                  Whether you're a solo explorer, a family of adventurers, or a couple seeking a romantic getaway, 
                  we've got you covered.
                </Text>
                <Text style={styles.paragraph}>
                  Our user-friendly platform is designed to make travel planning a breeze. 
                  With powerful AI tools and expert recommendations, crafting your perfect trip has never been easier.
                  Plus, we offer seamless booking services and a range of travel resources to enhance your journey.
                </Text>
              </ScrollView>
            </View>
          </View>
          <View>
            <AboutUs />
          </View>
          
        {/* <View  id="about_us" style={styles.about_us}><AboutUs /></View> */}
        </ImageBackground>
      
      </ScrollView>

  </View>  

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,

    resizeMode: 'cover',
  },
  welcomeNote: {
    padding: 20,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    width: '100%',
  },
  welcomeText: {
    marginTop: 50,
    marginBottom: 50,
    width: '90%',
    letterSpacing: 5,
    fontWeight: 'bold',
    fontSize: 40,
    fontStyle: 'italic',
    color: 'white',
  },
  getStartedButton: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 5,
    color: 'white',
    maxWidth:200,
  },
  paragraphs: {
    marginTop: 200,
    padding: 20,
  },
  paragraph: {
    margin: 10,
    padding: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
  },

abouts: {
//   flex: 1,
//   position: 'absolute',
//   backgroundColor: 'rgba(0, 0, 0, 0.4)',
//   width: '100%',
//   height: '100%',
  },
});

export default LandingScreen;
