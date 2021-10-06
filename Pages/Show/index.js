import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, ActivityIndicator, SectionList } from 'react-native'
import Episode from '../../Components/Episode'
import SeasonTitle from '../../Components/SeasonTitle'
import addFavorite from '../../helpers/misc/addFavorite'
import removeFavorite from '../../helpers/misc/removeFavorite'
import getNavigationParam from '../../helpers/misc/getNavigatorParam'
import request from '../../helpers/misc/request'
import UserContext from '../../Root/User/UserContext'
import formatEpisodesSection from './formatEpisodesSection'
import getShowInfoSection from './getShowInfoSection'
import Title from './Title'

export default function Show(props) {
  const { navigation } = props
  const { favorites, setFavorites } = useContext(UserContext)
  const show = getNavigationParam(props, 'show')
  const [isLoadingEpisodes, setLoadingEpisodes] = useState(true)
  const [sections, setSections] = useState([...getShowInfoSection(show)])
  const isFavorite =
    favorites.findIndex((favoriteId) => favoriteId === show.id) > -1

  const fetchEpisodes = async () => {
    const response = await request(`/shows/${show.id}/episodes`)
    setSections([...sections, ...formatEpisodesSection(response)])
    setLoadingEpisodes(false)
  }

  const handleFavorite = async () => {
    const showObj = {
      id: show.id,
      name: show.name,
      image: show.image,
      genres: show.genres,
      summary: show.summary,
      rating: show.rating,
      status: show.status,
      schedule: show.schedule,
    }
    isFavorite
      ? await removeFavorite(showObj, setFavorites)
      : await addFavorite(showObj, setFavorites)
  }

  useEffect(() => {
    if (!show) return
    fetchEpisodes()
  }, [])

  if (!show) return navigation.goBack()

  return (
    <SafeAreaView>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={
          <Title
            title={show.name}
            image={show.image.medium}
            summary={show.summary}
            favorite={isFavorite}
            handleFavorite={handleFavorite}
          />
        }
        renderSectionHeader={({ section }) => {
          const { header } = section
          if (!header) return null
          return <SeasonTitle header={header} />
        }}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Episode {...item} navigation={navigation} />}
      />
      {isLoadingEpisodes ? <ActivityIndicator /> : null}
    </SafeAreaView>
  )
}
