import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentScreen from "./Screens/PaymentScreen";
import HomeScreen from "./Screens/HomeScreen";
import DestinationFormScreen from "./Screens/DestinationFormScreen";
import NavBarComponent from "./Components/NavBar&Footer/NavBarComponent";


const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{header: (props) => <NavBarComponent navigation={props.navigation}/> }}/>
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="DestinationFormScreen" component={DestinationFormScreen} options={{header: (props) => <NavBarComponent navigation={props.navigation}/>}}/>
      
    </Stack.Navigator>
  );
}

export default MainStackNavigator;