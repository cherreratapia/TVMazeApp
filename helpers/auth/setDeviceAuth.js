import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (userPermission) {
  try {
    await AsyncStorage.setItem('@userPermission', String(userPermission))
    return true
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
