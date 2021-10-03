import React from 'react'
import getText from '../../helpers/misc/getText'
import Row from './Row'

export default function (show) {
  return [
    {
      data: [
        {
          title: 'On',
          data: `${getText(show.schedule.days)} at ${show.schedule.time}`,
        },
      ],
      renderItem: ({ item }) => <Row {...item} />,
    },
    {
      data: [
        {
          title: 'Genres',
          data: `${getText(show.genres)} `,
        },
      ],
      renderItem: ({ item }) => <Row {...item} />,
    },
  ]
}
