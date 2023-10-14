// import React from 'react';
// import { View, Text, Button, StyleSheet , ScrollView} from 'react-native';
// import { Dimensions } from 'react-native';

// // Get the window width
// const windowWidth = Dimensions.get('window').width;


// export default function AboutUs() {
//   return (
//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>JourneySync</Text>
//         <Text style={styles.paragraph}>
//           Welcome to JourneySync, your trusted companion for seamless travel experiences!
//         </Text>
//         <Text style={styles.subheading}>Our Story</Text>
//         <Text style={styles.paragraph}>
//           Founded in 2023, JourneySync was born out of a deep passion for travel and a desire to simplify the way people plan, organize, and embark on their journeys. Our journey began when a group of avid travelers, just like you, faced the challenges of coordinating travel plans, finding the best destinations, and creating memorable itineraries. We realized that there had to be a better way, and that's when JourneySync was conceived.
//         </Text>
//       </View>

//       <View style={styles.container}>
//         <Text style={styles.heading}>JourneySync</Text>
//         <Text style={styles.paragraph}>
//           Welcome to JourneySync, your trusted companion for seamless travel experiences!
//         </Text>
//         <Text style={styles.subheading}>Our Story</Text>
//         <Text style={styles.paragraph}>
//           Founded in 2023, JourneySync was born out of a deep passion for travel and a desire to simplify the way people plan, organize, and embark on their journeys. Our journey began when a group of avid travelers, just like you, faced the challenges of coordinating travel plans, finding the best destinations, and creating memorable itineraries. We realized that there had to be a better way, and that's when JourneySync was conceived.
//         </Text>
//       </View>

//       <View style={styles.container}>
//         <Text style={styles.heading}>JourneySync</Text>
//         <Text style={styles.paragraph}>
//           Welcome to JourneySync, your trusted companion for seamless travel experiences!
//         </Text>
//         <Text style={styles.subheading}>Our Story</Text>
//         <Text style={styles.paragraph}>
//           Founded in 2023, JourneySync was born out of a deep passion for travel and a desire to simplify the way people plan, organize, and embark on their journeys. Our journey began when a group of avid travelers, just like you, faced the challenges of coordinating travel plans, finding the best destinations, and creating memorable itineraries. We realized that there had to be a better way, and that's when JourneySync was conceived.
//         </Text>
//       </View>

      
     
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: 'white',
//     width:windowWidth,
//     borderColor: 'red',
//     backgroundColor: 'yellow',
//     borderWidth: 10,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   subheading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   paragraph: {
//     fontSize: 16,
//     textAlign: 'center',
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
// });


import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

export default function AboutUs() {
  const windowWidth = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.abouUsSlider}>
      <Text style={styles.abouUsSliderHeader}>We are JourneySync.</Text>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const offset = event.nativeEvent.contentOffset.x;
        const newIndex = Math.floor(offset / windowWidth);
        setCurrentIndex(newIndex);
      }}
    >
      {/* Slider 1 */}
      <View style={styles.aboutUsCard}>
        <View style={styles.aboutUsSubCard}>
          <Text style={styles.heading}>JourneySync</Text>
          <Text style={styles.paragraph}>
            Welcome to JourneySync, your trusted companion for seamless travel experiences!
          </Text>
          <Text style={styles.heading}>Our Story</Text>
          <Text style={styles.paragraph}>
            Founded in 2023, JourneySync was born out of a deep passion for
            travel and a desire to simplify
            the way people plan, organize, and embark on their journeys. Our journey began when a group
            of avid travelers, just like you, faced the challenges of coordinating travel plans, finding
            the best destinations, and creating memorable itineraries. We realized that there had to be a
            better way, and that's when JourneySync was conceived.        
          </Text>
        </View>
      </View>

      {/* Slider 2 */}

      <View style={styles.aboutUsCard}>
        <View style={styles.aboutUsSubCard}>
          <Text style={styles.heading}>Our Mission</Text>
          <Text style={styles.paragraph}>

            At JourneySync, our mission is to empower travelers worldwide. We
            believe that every journey should be a
            masterpiece, carefully crafted to meet your unique interests and preferences. 
            Our platform is designed to inspire your wanderlust, streamline the planning process, 
            and ensure your travels are nothing short of extraordinary.        
          </Text>
        </View>
      </View>


      {/* Slider 3 */}

      <View style={styles.aboutUsCard}>
        <View style={styles.aboutUsSubCard}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'white', textAlign: 'center', paddingTop: 6, paddingBottom: 3}}>Expertise</Text>
          <Text style={styles.paragraph}>
            Our team of travel enthusiasts and technology experts combines years of experience 
            in the travel industry with cutting-edge technology to deliver a platform that's 
            both intuitive and powerful.
          </Text>
        
          <Text style={{fontSize: 20, fontWeight: 'bold', color:'white', textAlign: 'center', paddingTop: 3, paddingBottom: 3}}>Innovation</Text>
          <Text style={styles.paragraph}>
            We stay ahead of the curve in travel technology, providing you with the latest 
            tools and resources to make your journey unforgettable.
          </Text>
        
          <Text style={{fontSize: 20, fontWeight: 'bold', color:'white', textAlign: 'center', paddingTop: 3, paddingBottom: 3}}>Customer-Centric</Text>
          <Text style={styles.paragraph}>
            Your satisfaction is our top priority. We're committed to making your travel 
            dreams a reality by offering exceptional support, personalized recommendations, and user-friendly features.
          </Text>
          </View>
        
      </View>  
    </ScrollView>
    </View>
  );
}

const styles = {
  abouUsSliderHeader:{
    fontFamily: 'Segoe UI',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:10,
    color: 'white',
  },

  abouUsSlider: {
    flex: 1,
    backgroundColor: '#0C356A',
  },
  aboutUsSubCard:{
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: Dimensions.get('window').width-40,
    padding: 20,
    borderRadius: 30,
  },
  container:{
    flex: 1,
    backgroundColor: 'blue',
    width: Dimensions.get('window').width-40,
    padding: 40,
  },
  aboutUsCard: {
    flex: 1,
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    padding: 20,
    
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    color: 'white',
  },
};

