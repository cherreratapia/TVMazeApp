import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
    },
  },
  text: {
    fontFamily: 'open-sans-regular',
    fontSize: 14,
  },
})
