import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'open-sans-semibold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
  },
  row: {
    width: Dimensions.get('window').width - 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  acceptButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontFamily: 'open-sans-regular',
    fontSize: 24,
    color: 'white',
  },
})
