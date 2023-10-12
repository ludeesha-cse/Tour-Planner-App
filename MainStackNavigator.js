import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentScreen from "./Screens/PaymentScreen";
import HomeScreen from "./Screens/HomeScreen";
import DestinationFormScreen from "./Screens/DestinationFormScreen";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="DestinationFormScreen" component={DestinationFormScreen} options={{headerShown:false}} />
      
    </Stack.Navigator>
  );
}

export default MainStackNavigator;