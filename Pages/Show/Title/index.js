import React from 'react'
import styles from './styles'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import useColor from '../../../helpers/hooks/useColor'
import RenderHtml from 'react-native-render-html'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Title(props) {
  const { title, image, summary, favorite, handleFavorite } = props
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
      <View style={styles.row}>
        <Text style={[color, styles.title]}>{title}</Text>
        <TouchableOpacity onPress={handleFavorite}>
          {favorite ? (
            <MaterialCommunityIcons name="heart" size={40} color={color} />
          ) : (
            <MaterialCommunityIcons
              name="heart-outline"
              size={40}
              color={color}
            />
          )}
        </TouchableOpacity>
      </View>
      <RenderHtml
        contentWidth={Dimensions.get('window').width - 32}
        source={{ html: summary }}
        baseStyle={styles.summary}
      />
    </View>
  )
}
