import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 64,
    marginBottom: 40,
  },
  centerRow: {
    justifyContent: 'center',
  },
  startRow: {
    justifyContent: 'flex-start',
  },
  number: {
    fontFamily: 'open-sans-semibold',
    fontSize: 20,
    color: 'black',
  },
  circle: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    backgroundColor: '#E5E5E5',
    borderRadius: 999,
  },
  localAuth: {
    marginRight: 40,
    paddingLeft: 4,
  },
})
