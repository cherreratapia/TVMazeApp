import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../Root/User/UserContext'
import Login from './Login'
import Register from './Register'
import * as LocalAuthentication from 'expo-local-authentication'

export default function Auth() {
  const { hasPin, setHasPin, setLogged, hasDeviceAuthPermission } =
    useContext(UserContext)

  const [hasHardwareAuth, setHardwareAuth] = useState(
    hasDeviceAuthPermission || false
  )
  const [hasValidHardwareAuth, setValidHardwareAuth] = useState(
    hasDeviceAuthPermission || false
  )

  const getValidHardwareMethods = async () => {
    const [hasLocalAuth, hasValidMethods] = await Promise.all([
      LocalAuthentication.isEnrolledAsync(),
      LocalAuthentication.supportedAuthenticationTypesAsync(),
    ])
    if (hasLocalAuth && !!hasValidMethods) setValidHardwareAuth(true)
  }

  useEffect(() => {
    if (hasDeviceAuthPermission) return
    LocalAuthentication.hasHardwareAsync()
      .then((result) => setHardwareAuth(result))
      .catch((err) =>
        console.error('There was an error getting hardware auth', err)
      )
  }, [])

  useEffect(() => {
    if (!hasHardwareAuth || hasDeviceAuthPermission) return
    getValidHardwareMethods()
  }, [hasHardwareAuth])

  if (!hasPin) return <Register setLogged={setLogged} setHasPin={setHasPin} />

  return (
    <Login
      setLogged={setLogged}
      hasLocalAuth={hasHardwareAuth && hasValidHardwareAuth}
    />
  )
}
