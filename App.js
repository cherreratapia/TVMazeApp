import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import loadAssets from "./helpers/misc/loadAssets";
import Root from "./Root";
import Pages from "./Pages";

export default function App() {
  const [isReady, setReady] = useState();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isReady ? (
        <Root>
          <Pages />
        </Root>
      ) : (
        <AppLoading
          startAsync={loadAssets}
          onFinish={() => setReady(true)}
          onError={console.warn}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
