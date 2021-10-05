import React, { useEffect, useState } from 'react'
import { SafeAreaView, Dimensions } from 'react-native'
import styles from './styles'
import Search from '../../Components/Search'
import getFavorites from '../../helpers/misc/getFavorites'
import { DataProvider, LayoutProvider } from 'recyclerlistview'
import Recycler from '../../Components/Recycler'
import Card from '../../Components/Card'
import { useFocusEffect } from '@react-navigation/native'

const { width } = Dimensions.get('window')
export default function Favorites(props) {
  const { navigation } = props
  const [filter, setFilter] = useState()
  const [isLoading, setLoading] = useState()

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2
    }).cloneWithRows([])
  )

  const [layoutProvider] = useState(
    new LayoutProvider(
      () => 0,
      (type, dim, index) => {
        dim.height = 100
        dim.width = width
      }
    )
  )

  const getFavoritesShows = async () => {
    const favorites = await getFavorites()
    setDataProvider(dataProvider.cloneWithRows(favorites))
    setLoading(false)
  }

  const renderItem = (type, item, index) => (
    <Card show={item} navigation={navigation} />
  )

  useEffect(() => {
    getFavoritesShows()
  }, [])

  useFocusEffect(() => {
    getFavoritesShows()
  })

  return (
    <SafeAreaView style={styles.container}>
      <Search filter={filter} setFilter={setFilter} />
      {isLoading ? null : (
        <Recycler
          renderItem={renderItem}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
        />
      )}
    </SafeAreaView>
  )
}
