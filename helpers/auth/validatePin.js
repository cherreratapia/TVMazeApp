import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (pin) {
  try {
    const storedPin = await AsyncStorage.getItem('@pin')
    return storedPin === pin
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
    return false
  }
}
