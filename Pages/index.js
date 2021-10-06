import React, { useContext } from 'react'
import UserContext from '../Root/User/UserContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Auth from './Auth'
import Main from './Main'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import Favorites from './Favorites'

const Tab = createBottomTabNavigator()
export default function Pages() {
  const { isLogged } = useContext(UserContext)

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
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <FontAwesome5 name="list" size={24} color="#505050" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? 'heart' : 'heart-o'}
              size={24}
              color="#505050"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
