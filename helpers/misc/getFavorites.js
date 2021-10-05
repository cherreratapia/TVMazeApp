import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function () {
  try {
    const favoritesStored = await AsyncStorage.getItem('@favorites')
    const { favorites } = favoritesStored
      ? JSON.parse(favoritesStored)
      : { favorites: [] }
    return favorites
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
