import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    width: width - 32,
    alignSelf: 'center',
    height: 100,
    paddingRight: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.2)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 100,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  information: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 16,
  },
  title: {
    fontFamily: 'open-sans-semibold',
    fontSize: 16,
  },
  text: {
    fontFamily: 'open-sans-semibold',
    fontSize: 14,
  },
  status: {
    marginLeft: 40,
  },
  statusIcon: {
    marginRight: 4,
  },
})
