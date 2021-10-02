import React from 'react'
import styles from './styles'
import { RecyclerListView } from 'recyclerlistview'

export default function Recycler(props) {
  const { dataProvider, layoutProvider, renderItem, ...recyclerProps } = props
  return (
    <RecyclerListView
      style={styles.recycler}
      rowRenderer={renderItem}
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      {...recyclerProps}
    />
  )
}
