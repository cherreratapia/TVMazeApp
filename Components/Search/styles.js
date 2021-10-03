import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'open-sans-regular',
    fontSize: 20,
  },
})
