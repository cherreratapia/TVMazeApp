import React from 'react'
import Theme from './Theme'
import User from './User'
import { NavigationContainer } from '@react-navigation/native'

export default function Root(props) {
  return (
    <Theme>
      <User
        hasPin={props.userHasPin}
        hasDeviceAuthPermission={props.hasDeviceAuthPermission}
      >
        <NavigationContainer>{props.children}</NavigationContainer>
      </User>
    </Theme>
  )
}
