import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import useColor from '../../helpers/hooks/useColor'
import styles from './styles'

export default function Card(props) {
  const { item } = props
  const color = useColor()

  return (
    <Pressable onPress={() => console.log(`Selected Show: ${item.id}`)}>
      <View key={item.id} style={styles.container}>
        <View style={styles.row}>
          <Image
            source={{ uri: item.image.medium }}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.information}>
            <Text style={[color, styles.text]}>{item.name}</Text>
            <View style={styles.row}>
              <Text style={[color, styles.text]}>{item.rating.average}/10</Text>
              <Text style={[color, styles.text]}>Status: {item.status}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
