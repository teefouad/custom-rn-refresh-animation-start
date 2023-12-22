/**
 * Dependency imports
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

/**
 * Styles
 */
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

/**
 * Component(s)
 */
export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <ExpoStatusBar style="light" backgroundColor="#E992D0" />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
