import React from 'react'
import styles from './styles'
import { View, Text, TextInput, Pressable } from 'react-native'

export default function Search(props) {
  const { filter, setFilter } = props

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        onChangeText={setFilter}
        value={filter}
        placeholder="Search your favourite series"
      />
      <Pressable onPress={() => setFilter()}>
        <Text style={styles.text}>X</Text>
      </Pressable>
    </View>
  )
}
