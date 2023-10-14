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
      {/* Define your content for each container */}
      {/* For example: */}
      <View style={{ width: windowWidth }}>
        <Text style={styles.heading}>JourneySync</Text>
        <Text style={styles.paragraph}>
          Welcome to JourneySync, your trusted companion for seamless travel experiences!
        </Text>
        <Text style={styles.paragraph}>
          Founded in 2023, JourneySync was born out of a deep passion for
          travel and a desire to simplify
          the way people plan, organize, and embark on their journeys. Our journey began when a group
          of avid travelers, just like you, faced the challenges of coordinating travel plans, finding
          the best destinations, and creating memorable itineraries. We realized that there had to be a
          better way, and that's when JourneySync was conceived.        
        </Text>
        
      </View>

      <View style={{ width: windowWidth }}>
        <Text style={styles.heading}>JourneySync</Text>
        <Text style={styles.paragraph}>
          Welcome to JourneySync, your trusted companion for seamless travel experiences!
        </Text>
        
      </View>

      <View style={{ width: windowWidth }}>
        <Text style={styles.heading}>JourneySync</Text>
        <Text style={styles.paragraph}>
          Welcome to JourneySync, your trusted companion for seamless travel experiences!
        </Text>
        
      </View>
      
    </ScrollView>
  );
}

const styles = {
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

