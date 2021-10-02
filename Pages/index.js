import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const Stack = createNativeStackNavigator();
export default function Pages() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
