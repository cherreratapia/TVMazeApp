import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function () {
  try {
    return !!(await AsyncStorage.getItem('@userPermission'))
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
