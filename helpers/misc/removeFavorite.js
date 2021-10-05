import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function (show, setFavorites) {
  console.log('🚀 ~ file: removeFavorite.js ~ line 4 ~ show', show.id)
  try {
    const favoritesStored = await AsyncStorage.getItem('@favorites')
    let { favorites } = favoritesStored
      ? JSON.parse(favoritesStored)
      : { favorites: [] }
    const favFind = favorites.findIndex((favorite) => favorite.id === show.id)
    if (favFind === -1) return
    favorites.splice(favFind, 1)
    await AsyncStorage.setItem('@favorites', JSON.stringify({ favorites }))
    setFavorites(favorites.map((favorite) => favorite.id))
    return favorites
  } catch (error) {
    console.error('There was an error storing data in asyncStorage', error)
  }
}
