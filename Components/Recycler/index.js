import React from 'react'
import styles from './styles'
import { Platform } from 'react-native'
import { RecyclerListView } from 'recyclerlistview'

export default function Recycler(props) {
  const { dataProvider, layoutProvider, renderItem, ...recyclerProps } = props

  return (
    <RecyclerListView
      style={styles.recycler}
      rowRenderer={renderItem}
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode={() =>
        Platform.OS === 'ios' ? 'interactive' : 'on-drag'
      }
      onScroll={Platform.OS === 'ios' ? null : Keyboard.dismiss()}
      keyboardShouldPersistTaps="always"
      renderAheadOffset={1000}
      onEndReachedThreshold={1000}
      {...recyclerProps}
    />
  )
}
