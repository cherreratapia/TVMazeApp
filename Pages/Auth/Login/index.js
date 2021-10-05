import React, { useEffect, useState, Modal, useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import PhoneLayout from '../../../Components/PhoneLayout'
import validatePin from '../../../helpers/auth/validatePin'
import styles from './styles'
import * as LocalAuthentication from 'expo-local-authentication'
import UserPermission from './UserPermission'
import UserContext from '../../../Root/User/UserContext'

export default function Login(props) {
  const { setLogged, hasLocalAuth } = props
  const { hasDeviceAuthPermission, setDeviceAuthPermission } =
    useContext(UserContext)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [retry, setRetry] = useState(3)
  // const [userGaveAccess, setUserAccess] = useState(false)
  const [showModal, setShowModal] = useState(
    !hasDeviceAuthPermission || hasLocalAuth || false
  )

  const onValidate = async () => {
    if (pin.length < 5) return
    const isValid = await validatePin(pin)
    if (isValid) {
      setLogged(true)
    } else {
      setError(true)
      setRetry(retry - 1)
      setTimeout(() => {
        setError(false)
        setPin('')
      }, 1000)
    }
  }

  const onPress = (number) => {
    if (pin.length === 5) return
    setPin(pin + String(number))
  }

  const onLocalAuth = async () => {
    const options = {
      promptMessage: 'Log in using your method in TVMazeAPP',
    }
    const { success, error } = await LocalAuthentication.authenticateAsync(
      options
    )

    if (error) console.log('THERE WAS AN ERROR')
    if (success) setLogged(true)
  }

  useEffect(() => {
    onValidate()
  }, [pin])

  if (!retry) {
    return (
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You failed 3 times.</Text>
          <Text style={styles.subtitle}>
            The app is going to block by security reasons.
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <UserPermission
        showModal={showModal}
        setShowModal={setShowModal}
        hasDeviceAuthPermission={hasDeviceAuthPermission}
        setDeviceAuthPermission={setDeviceAuthPermission}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi again!</Text>
        <Text style={styles.subtitle}>Please, enter your 5 digits PIN.</Text>
        {error || retry < 3 ? (
          <Text style={styles.subtitle}>
            Wrong code. You have {retry} try left
          </Text>
        ) : null}
      </View>
      <PhoneLayout
        onPress={onPress}
        shouldShake={error}
        onLocalAuth={onLocalAuth}
        hasLocalAuth={hasLocalAuth && hasDeviceAuthPermission}
      />
    </SafeAreaView>
  )
}
