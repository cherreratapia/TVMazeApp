import React from 'react'
import styles from './styles'
import { View, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Search(props) {
  const { filter, setFilter } = props

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialIcons name="search" size={20} color="#E5E5E5" />
        <TextInput
          style={styles.text}
          onChangeText={setFilter}
          value={filter}
          placeholder="Look for that series you heard about"
        />
      </View>
      {!!filter ? (
        <Pressable onPress={() => setFilter()}>
          <MaterialIcons name="cancel" size={20} color="#E5E5E5" />
        </Pressable>
      ) : null}
    </View>
  )
}
