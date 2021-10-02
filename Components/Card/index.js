import React from 'react'
import { View, Text } from 'react-native'
import useColor from '../../helpers/hooks/useColor'
import styles from './styles'

export default function Card(props) {
  const { item } = props
  const color = useColor()
  return (
    <View key={item.id} style={styles.container}>
      <Text style={[color, styles.text]}>Nombre: {item.name}</Text>
    </View>
  )
}
