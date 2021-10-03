import React from 'react'
import { SectionList } from 'react-native'
import getNavigationParam from '../../helpers/misc/getNavigatorParam'
import Row from './Row'
import Title from './Title'

const ArrToText = (arr) =>
  arr.reduce((acc, curr, idx) => {
    if (!acc || (!acc && idx === arr.length)) return curr
    if (idx === arr.length - 1) return (acc += ` & ${curr}`)
    return (acc += `, ${curr}`)
  })

export default function Show(props) {
  const show = getNavigationParam(props, 'show')
  const sections = [
    {
      data: [
        {
          title: 'On',
          data: `${ArrToText(show.schedule.days)} at ${show.schedule.time}`,
        },
      ],
    },
    {
      data: [
        {
          title: 'Genres',
          data: `${ArrToText(show.genres)} `,
        },
      ],
    },
  ]

  return (
    <SectionList
      sections={sections}
      ListHeaderComponent={
        <Title
          title={show.name}
          image={show.image.medium}
          summary={show.summary}
        />
      }
      renderItem={({ item }) => <Row {...item} />}
    />
  )
}
