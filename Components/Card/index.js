import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import useColor from '../../helpers/hooks/useColor'
import styles from './styles'

export default function Card(props) {
  const { show, navigation } = props
  const color = useColor()

  return (
    <Pressable onPress={() => navigation.navigate('Show', { show })}>
      <View key={show.id} style={styles.container}>
        <View style={styles.row}>
          <Image
            source={{ uri: show.image.medium }}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.information}>
            <Text style={[color, styles.text]}>{show.name}</Text>
            <View style={styles.row}>
              <Text style={[color, styles.text]}>{show.rating.average}/10</Text>
              <Text style={[color, styles.text]}>Status: {show.status}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
