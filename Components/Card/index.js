import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import useColor from '../../helpers/hooks/useColor'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

export default function Card(props) {
  const { show } = props
  const navigation = useNavigation()
  const color = useColor()

  const ShowInfo = () => {
    if (!show.rating.average && !show.status) return null
    const starIcon =
      show.rating.average < 3
        ? 'star-outline'
        : show.rating.average > 3 && show.rating.average < 8
        ? 'star-half'
        : 'star-rate'
    const statusIcon = show.status === 'Ended' ? 'tv-off' : 'tv'

    return (
      <View style={styles.row}>
        {show.rating.average ? (
          <View style={styles.row}>
            <Text style={[color, styles.text]}>{show.rating.average}/10</Text>
            <MaterialIcons name={starIcon} size={16} color="#505050" />
          </View>
        ) : null}
        {show.status ? (
          <View
            style={[styles.row, show.rating.average ? styles.status : null]}
          >
            <MaterialIcons
              name={statusIcon}
              size={16}
              color="#505050"
              style={styles.statusIcon}
            />
            <Text style={[color, styles.text]}>{show.status}</Text>
          </View>
        ) : null}
      </View>
    )
  }

  return (
    <Pressable onPress={() => navigation.navigate('Show', { show })}>
      <View key={show.id} style={styles.container}>
        <View style={styles.row}>
          {show.image ? (
            <Image
              source={{ uri: show.image.medium }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.image}>
              <MaterialIcons name="broken-image" size={48} color="#505050" />
            </View>
          )}
          <View style={styles.information}>
            <Text style={[color, styles.text]}>{show.name}</Text>
            <View style={styles.rowBetween}>
              <ShowInfo />
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="#505050"
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
