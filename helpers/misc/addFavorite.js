import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (show, setFavorites) {
  try {
    const favoritesStored = await AsyncStorage.getItem('@favorites')
    const { favorites } = favoritesStored
      ? JSON.parse(favoritesStored)
      : { favorites: [] }
    favorites.push(show)
    await AsyncStorage.setItem('@favorites', JSON.stringify({ favorites }))
    setFavorites(favorites.map((favorite) => favorite.id))
    return favorites
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
