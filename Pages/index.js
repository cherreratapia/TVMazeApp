import React, { useContext } from 'react'
import UserContext from '../Root/User/UserContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Auth from './Auth'
import Main from './Main'
import { FontAwesome5 } from '@expo/vector-icons'
import Favorites from './Favorites'

const Tab = createBottomTabNavigator()
export default function Pages() {
  // const { isLogged } = useContext(UserContext)
  const isLogged = true

  if (!isLogged) return <Auth />

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="list" size={32} color="#505050" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="heart"
              style="solid"
              size={32}
              color="#505050"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
