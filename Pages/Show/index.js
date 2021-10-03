import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, SectionList } from 'react-native'
import Episode from '../../Components/Episode'
import SeasonTitle from '../../Components/SeasonTitle'
import getNavigationParam from '../../helpers/misc/getNavigatorParam'
import request from '../../helpers/misc/request'
import formatEpisodesSection from './formatEpisodesSection'
import getShowInfoSection from './getShowInfoSection'
import Title from './Title'

export default function Show(props) {
  const { navigation } = props
  const show = getNavigationParam(props, 'show')
  const [isLoadingEpisodes, setLoadingEpisodes] = useState(true)
  const [sections, setSections] = useState([...getShowInfoSection(show)])

  const fetchEpisodes = async () => {
    const response = await request(`/shows/${show.id}/episodes`)
    setSections([...sections, ...formatEpisodesSection(response)])
    setLoadingEpisodes(false)
  }

  useEffect(() => {
    if (!show) return
    fetchEpisodes()
  }, [])

  if (!show) return navigation.goBack()

  return (
    <View>
      <SectionList
        sections={sections}
        ListHeaderComponent={
          <Title
            title={show.name}
            image={show.image.medium}
            summary={show.summary}
          />
        }
        renderSectionHeader={({ section }) => {
          const { header } = section
          if (!header) return null
          return <SeasonTitle header={header} />
        }}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Episode {...item} />}
      />
      {isLoadingEpisodes ? <ActivityIndicator /> : null}
    </View>
  )
}
