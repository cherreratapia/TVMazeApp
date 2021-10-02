import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Card from '../../../Components/Card'

import Search from '../../../Components/Search'
import request from '../../../helpers/misc/request'

export default function Results(props) {
  const { filter, setFilter } = props
  const [shows, setShows] = useState([])

  const searchShows = async () => {
    const response = await request(`/search/shows?q=${filter.toLowerCase()}`)
    setShows([...response])
  }

  const renderItem = ({ item, index }) => <Card key={index} item={item.show} />

  useEffect(() => {
    if (!filter) return
    searchShows()
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Search filter={filter} setFilter={setFilter} />}
        data={shows}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}
