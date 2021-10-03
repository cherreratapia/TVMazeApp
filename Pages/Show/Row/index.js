import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Row(props) {
  const { title, data } = props
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{data}</Text>
      </View>
    </View>
  )
}
