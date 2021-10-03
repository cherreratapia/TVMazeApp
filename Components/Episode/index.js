import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

export default function Episode(props) {
  const { episodeId, text } = props
  return (
    <Pressable
      style={styles.button}
      onPress={() => console.log('TODO: Navigate to episode: ', episodeId)}
    >
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{'>'}</Text>
    </Pressable>
  )
}
