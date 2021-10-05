import React, { useContext } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserContext from '../Root/User/UserContext'
import Home from './Home'
import Show from './Show'
import Episode from './Episode'
import Auth from './Auth'

const Stack = createNativeStackNavigator()
export default function Pages() {
  const { isLogged } = useContext(UserContext)
  if (!isLogged) return <Auth />

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  )
}
