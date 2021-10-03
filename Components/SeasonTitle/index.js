import React from 'react'
import { View, Text } from 'react-native'
import getSeasonTitle from '../../helpers/misc/getSeasonTitle'
import styles from './styles'

export default function SeasonTitle(props) {
  const { header } = props
  if (!header) return null
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getSeasonTitle(header)}</Text>
    </View>
  )
}
