import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, createStackNavigator } from '@react-navigation/stack';
import NavBar from './Components/NavBar&Footer/NavBarComponent';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>  
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown:false}} />
          <Tab.Screen name="About" component={MainStackNavigator} options={{headerShown:false}} />
        </Tab.Navigator>
        
        {/* <MainStackNavigator/> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
