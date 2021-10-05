import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './styles'
import storePin from '../../../helpers/auth/storePin'
import PhoneLayout from '../../../Components/PhoneLayout'

export default function Register(props) {
  const { setLogged, setHasPin } = props
  const [pin, setPin] = useState('')
  const [validatePin, setValidatePin] = useState('')
  const [isValidating, setValidating] = useState(false)

  const onPress = (number) =>
    isValidating
      ? setValidatePin(validatePin + String(number))
      : creatingPin(number)

  const creatingPin = (number) => {
    if (pin.length === 4) setValidating(true)
    setPin(pin + String(number))
  }

  const onStore = async () => {
    if (pin !== validatePin) return resetRegister()
    const response = await storePin(pin)
    if (response) {
      setHasPin(true)
      setLogged(true)
    }
  }

  const resetRegister = () => {
    setPin('')
    setValidatePin('')
    setValidating(false)
  }

  useEffect(() => {
    if (validatePin.length < 5) return
    onStore()
  }, [validatePin])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi again!</Text>
        {isValidating ? (
          <Text style={styles.subtitle}>
            Please, enter your 5 digits PIN again to validate.
          </Text>
        ) : (
          <>
            <Text style={styles.subtitle}>You don't have any PIN stored.</Text>
            <Text style={styles.subtitle}>Please, enter a 5 digits PIN.</Text>
          </>
        )}
      </View>
      <PhoneLayout onPress={onPress} />
    </SafeAreaView>
  )
}
