import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Math.max(300, width),
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  season: {
    fontFamily: 'open-sans-semibold',
    fontSize: 20,
  },
  episode: {
    fontFamily: 'open-sans-regular',
    fontSize: 16,
  },
})
