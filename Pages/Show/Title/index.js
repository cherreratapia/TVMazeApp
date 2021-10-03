import React from 'react'
import styles from './styles'
import { View, Text, Image, Dimensions } from 'react-native'
import useColor from '../../../helpers/hooks/useColor'
import RenderHtml from 'react-native-render-html'

export default function Title(props) {
  const { title, image, summary } = props
  const color = useColor()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={[color, styles.title]}>{title}</Text>
      <RenderHtml
        contentWidth={Dimensions.get('window').width - 32}
        source={{ html: summary }}
        baseStyle={styles.summary}
      />
    </View>
  )
}
