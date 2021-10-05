import React from 'react'
import { SafeAreaView, Text, Image, Dimensions } from 'react-native'
import styles from './styles'
import getNavigationParam from '../../helpers/misc/getNavigatorParam'
import getSeasonTitle from '../../helpers/misc/getSeasonTitle'
import RenderHtml from 'react-native-render-html'

export default function Episode(props) {
  const { navigation } = props
  const episode = getNavigationParam(props, 'episode')

  if (!episode) navigation.goBack()
  return (
    <SafeAreaView style={styles.container}>
      {episode.image && episode.image.medium ? (
        <Image
          style={{ width: 300, height: 100 }}
          source={{ uri: episode.image.medium }}
          resizeMode="contain"
        />
      ) : null}
      <Text>
        {getSeasonTitle(episode.season)} {episode.number} · {episode.name}
      </Text>
      <RenderHtml
        contentWidth={Dimensions.get('window').width - 32}
        source={{ html: episode.summary }}
        baseStyle={{
          fontFamily: 'open-sans-regular',
          fontSize: 14,
          color: 'rgba(80,80,80,0.8)',
        }}
      />
    </SafeAreaView>
  )
}
