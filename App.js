import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import loadAssets from './helpers/misc/loadAssets'
import Root from './Root'
import Pages from './Pages'
import hasPin from './helpers/auth/hasPin'
import hasDeviceAuth from './helpers/auth/hasDeviceAuth'
import getFavoritesIds from './helpers/misc/getFavoritesIds'
import getFavorites from './helpers/misc/getFavorites'

export default function App() {
  const [isReady, setReady] = useState()
  const [userHasPin, setHasPin] = useState(false)
  const [hasDeviceAuthPermission, setHasDeviceAuthPermission] = useState(false)
  const [favoritesIds, setFavoritesIds] = useState(false)

  const getAuthData = async () => {
    const [hasPinResult, hasDeviceAuthResult, favoritesIdsResult] =
      await Promise.all([
        hasPin(),
        hasDeviceAuth(),
        getFavoritesIds(),
        getFavorites(),
      ])
    setHasPin(hasPinResult)
    setHasDeviceAuthPermission(hasDeviceAuthResult)
    setFavoritesIds(favoritesIdsResult)
  }

  const onFinish = () => {
    getAuthData()
      .then(() => setReady(true))
      .catch((error) => {
        console.log('error?', error)
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isReady ? (
        <Root
          userHasPin={userHasPin}
          hasDeviceAuthPermission={hasDeviceAuthPermission}
          favoritesIds={favoritesIds}
        >
          <Pages />
        </Root>
      ) : (
        <AppLoading
          startAsync={loadAssets}
          onFinish={onFinish}
          onError={console.warn}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({ container: { flex: 1 } })
