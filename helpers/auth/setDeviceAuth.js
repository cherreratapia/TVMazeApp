import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (userPermission) {
  try {
    const result = await AsyncStorage.setItem('@userPermission', userPermission)
    return true
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
