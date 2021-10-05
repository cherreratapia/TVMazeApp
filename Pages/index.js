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
  const tabOptions = { title: 'Series List', tabBarShowLabel: false }

  if (!isLogged) return <Auth />

  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          ...tabOptions,
          tabBarIcon: () => (
            <FontAwesome5 name="list" size={32} color="#505050" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          ...tabOptions,
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
