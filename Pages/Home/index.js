import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  Platform,
} from 'react-native'
import styles from './styles'
import { DataProvider, LayoutProvider } from 'recyclerlistview'
import Recycler from '../../Components/Recycler'
import Search from '../../Components/Search'
import request from '../../helpers/misc/request'
import Card from '../../Components/Card'
import useDebounce from '../../helpers/hooks/useDebounce'
import Results from './Results'

const { width } = Dimensions.get('window')
export default function Home(props) {
  const { navigation } = props
  const [filter, setFilter] = useState()
  const [activePage, setActivePage] = useState(0)
  const [isLoading, setLoading] = useState(true)
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
        dim.height = index === 0 ? 145 : 100
        dim.width = width
      }
    )
  )

  const initialFetch = async () => {
    const response = await request(`/shows?page=${activePage}`)
    setDataProvider(dataProvider.cloneWithRows([...response]))
    setLoading(false)
  }

  const fetchShows = async () => {
    const response = await request(`/shows?page=${activePage}`)
    setDataProvider(
      dataProvider.cloneWithRows([...dataProvider.getAllData(), ...response])
    )
  }

  const renderItem = (type, item, index) => {
    if (index === 0) {
      return (
        <>
          <Search filter={filter} setFilter={setFilter} />
          <Card show={item} navigation={navigation} />
        </>
      )
    }
    return <Card show={item} navigation={navigation} />
  }

  useEffect(() => {
    initialFetch()
  }, [])

  useEffect(() => {
    if (!activePage) return
    fetchShows()
  }, [activePage])

  if (debouncedFilter) return <Results filter={filter} setFilter={setFilter} />

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Recycler
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          renderItem={renderItem}
          onEndReached={() => setActivePage(activePage + 1)}
          keyboardDismissMode={() =>
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          onScroll={Platform.OS === 'ios' ? null : Keyboard.dismiss()}
          keyboardShouldPersistTaps="always"
          renderAheadOffset={1000}
          onEndReachedThreshold={1000}
          renderFooter={() => (
            <View>
              <Text>Cargando...</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  )
}
