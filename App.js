import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScreen from './Screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>  
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown:false}} />
          {/* <Tab.Screen name="About" component={HomeScreen} options={{headerShown:false}} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} /> */}
        </Tab.Navigator>
        
        {/* <MainStackNavigator/> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
