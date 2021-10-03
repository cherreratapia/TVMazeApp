import { Dimensions, StyleSheet } from 'react-native'
const maxWidth = Dimensions.get('window').width - 32

export default StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-semibold',
    fontSize: 32,
    textTransform: 'uppercase',
  },
  imageContainer: {
    padding: 8,
    shadowRadius: 16,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: -5,
    },
    marginBottom: 8,
  },
  image: {
    width: maxWidth,
    height: maxWidth,
  },
  summary: {
    fontFamily: 'open-sans-regular',
    fontSize: 14,
    color: 'rgba(80,80,80,0.8)',
  },
})
