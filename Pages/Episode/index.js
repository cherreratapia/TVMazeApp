import React from 'react'
import { SafeAreaView, View, Text, Image, Dimensions } from 'react-native'
import styles from './styles'
import getNavigationParam from '../../helpers/misc/getNavigatorParam'
import getSeasonTitle from '../../helpers/misc/getSeasonTitle'
import RenderHtml from 'react-native-render-html'
import useColor from '../../helpers/hooks/useColor'
import { MaterialIcons } from '@expo/vector-icons'

export default function Episode(props) {
  const { navigation } = props
  const color = useColor()
  const episode = getNavigationParam(props, 'episode')

  if (!episode) navigation.goBack()
  return (
    <SafeAreaView style={styles.container}>
      {episode.image && episode.image.medium ? (
        <Image
          style={styles.image}
          source={{ uri: episode.image.original || episode.image.medium }}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.image}>
          <MaterialIcons name="broken-image" size={144} color="#505050" />
        </View>
      )}
      <Text style={[styles.season, color]}>
        {getSeasonTitle(episode.season)}
      </Text>
      <Text style={[styles.episode, color]}>
        {episode.number} · {episode.name}
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
