import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import Episode from '../Episode'
import Show from '../Show'

const Stack = createNativeStackNavigator()
export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  )
}
