import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  recycler: {
    flex: 1,
    width,
    height,
  },
})
