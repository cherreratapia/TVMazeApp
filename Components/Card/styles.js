import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    width,
    height: 100,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'open-sans-semibold',
    fontSize: 26,
  },
})
