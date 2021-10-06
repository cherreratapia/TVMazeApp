import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function Episode(props) {
  const { episode, text } = props
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('Episode', { episode })}
    >
      <Text style={styles.text}>{text}</Text>
      <MaterialIcons name="arrow-forward-ios" size={20} color="#505050" />
    </Pressable>
  )
}
