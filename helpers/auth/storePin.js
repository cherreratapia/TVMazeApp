import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (pin) {
  try {
    await AsyncStorage.setItem('@pin', pin)
    return true
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
