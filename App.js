import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import { SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MainStackNavigator/>
      </NavigationContainer>
    </SafeAreaView>



    // <View style={styles.container}>
    //   <View>
    //     <PaymentPage/>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
