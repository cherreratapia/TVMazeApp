import React, { useState } from 'react'
import UserContext from './UserContext'

export default function User(props) {
  const [hasPin, setHasPin] = useState(props.hasPin || false)
  const [hasDeviceAuthPermission, setDeviceAuthPermission] = useState(
    props.hasDeviceAuthPermission || false
  )
  const [isLogged, setLogged] = useState(false)
  return (
    <UserContext.Provider
      value={{
        hasPin,
        setHasPin,
        isLogged,
        setLogged,
        hasDeviceAuthPermission,
        setDeviceAuthPermission,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
