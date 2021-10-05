import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')
console.log('🚀 ~ file: styles.js ~ line 3 ~ height', height)
console.log('🚀 ~ file: styles.js ~ line 3 ~ width', width)

export default StyleSheet.create({
  recycler: {
    flex: 1,
    width,
    height,
  },
})
