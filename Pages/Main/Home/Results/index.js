import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Card from '../../../../Components/Card'
import request from '../../../../helpers/misc/request'

export default function Results(props) {
  const { filter } = props

  const [shows, setShows] = useState([])

  const searchShows = async () => {
    const response = await request(`/search/shows?q=${filter.toLowerCase()}`)
    setShows([...response])
  }

  const renderItem = ({ item, index }) => <Card key={index} show={item.show} />

  useEffect(() => {
    if (!filter) return
    searchShows()
  }, [])

  return (
    <FlatList
      data={shows}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  )
}
