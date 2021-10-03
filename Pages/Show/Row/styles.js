import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(80, 80, 80, 0.4)',
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans-regular',
    fontSize: 16,
  },
})
