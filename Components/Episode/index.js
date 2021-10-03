import React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './styles'

export default function Episode(props) {
  const { navigation, episode, text } = props
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('Episode', { episode })}
    >
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{'>'}</Text>
    </Pressable>
  )
}
