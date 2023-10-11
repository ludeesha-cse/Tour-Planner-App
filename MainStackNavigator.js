import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentScreen from "./Screens/PaymentScreen";
import HomeScreen from "./Screens/HomeScreen";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;