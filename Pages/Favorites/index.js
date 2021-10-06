import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  RefreshControl,
} from 'react-native'
import styles from './styles'
import Search from '../../Components/Search'
import getFavorites from '../../helpers/misc/getFavorites'
import { DataProvider, LayoutProvider } from 'recyclerlistview'
import Recycler from '../../Components/Recycler'
import Card from '../../Components/Card'
import { FontAwesome5 } from '@expo/vector-icons'
import useDebounce from '../../helpers/hooks/useDebounce'

const { width } = Dimensions.get('window')
export default function Favorites(props) {
  const { navigation } = props
  const [filter, setFilter] = useState()
  const [favorites, setFavorites] = useState()
  console.log('🚀 ~ file: index.js ~ line 22 ~ Favorites ~ filter', filter)
  const [isLoading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState()
  const debouncedFilter = useDebounce(filter, 500)

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
    const favoritesResponse = await getFavorites()
    setDataProvider(
      dataProvider.cloneWithRows(
        favoritesResponse.sort((a, b) => a.name.localeCompare(b.name))
      )
    )
    setFavorites([...favoritesResponse])
    setLoading(false)
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await getFavoritesShows()
    setRefreshing(false)
  }

  const renderItem = (type, item, index) => (
    <Card show={item} navigation={navigation} />
  )

  useEffect(() => {
    getFavoritesShows()
  }, [])

  useEffect(() => {
    if (debouncedFilter !== filter) return
    if (!debouncedFilter && !isLoading) {
      return setDataProvider(
        new DataProvider((r1, r2) => {
          return r1 !== r2
        }).cloneWithRows([...favorites])
      )
    }
    const filteredFilters = dataProvider
      .getAllData()
      .filter((favorite) =>
        favorite.name.toLowerCase().includes(debouncedFilter.toLowerCase())
      )
    setDataProvider(dataProvider.cloneWithRows(filteredFilters))
  }, [debouncedFilter])

  return (
    <SafeAreaView style={styles.container}>
      {!isLoading && dataProvider.getSize() ? (
        <Search filter={filter} setFilter={setFilter} />
      ) : (
        false
      )}
      {isLoading ? null : dataProvider.getSize() ? (
        <Recycler
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={renderItem}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
        />
      ) : (
        <View style={styles.center}>
          <FontAwesome5 name="sad-tear" size={64} color="#505050" />
          <Text style={styles.noDataTitle}>
            You don't have any favorites series
          </Text>
          <Text style={styles.noData}>
            Maybe you should try to add some series to favorites!
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}
