import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import Show from './Show'
import Episode from './Episode'

const Stack = createNativeStackNavigator()
export default function Pages() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  )
}
