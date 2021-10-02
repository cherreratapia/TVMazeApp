import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    width,
    height: 100,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  image: {
    height: 80,
    width: 80,
  },
  information: {
    paddingVertical: 8,
    marginLeft: 16,
  },
  title: {
    fontFamily: 'open-sans-semibold',
    fontSize: 16,
  },
  summary: {
    fontFamily: 'open-sans-semibold',
    fontSize: 14,
  },
  status: {
    fontFamily: 'open-sans-semibold',
    fontSize: 14,
  },
  rating: {
    fontFamily: 'open-sans-semibold',
    fontSize: 14,
  },
})
