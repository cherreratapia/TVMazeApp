import React, { useRef, useEffect } from 'react'
import { View, Animated, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default function PhoneLayout(props) {
  const { onPress, shouldShake, hasLocalAuth, onLocalAuth } = props
  const shakeAnimation = useRef(new Animated.Value(0)).current

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start()
  }

  useEffect(() => {
    if (!!shouldShake) startShake()
  }, [shouldShake])

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onPress(1)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>1</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(2)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>2</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(3)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>3</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onPress(4)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>4</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(5)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>5</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(6)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>6</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onPress(7)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>7</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(8)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>8</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(9)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>9</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.row, hasLocalAuth ? styles.startRow : styles.centerRow]}
      >
        {hasLocalAuth ? (
          <TouchableOpacity onPress={onLocalAuth} style={styles.localAuth}>
            <Text style={styles.number}>X</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={() => onPress(0)}>
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.number}>0</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
