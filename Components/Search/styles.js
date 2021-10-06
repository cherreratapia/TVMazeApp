import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width - 32,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
    },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans-regular',
    fontSize: 16,
    paddingLeft: 4,
  },
})
