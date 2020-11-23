import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './components/Categories'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Norwegian Vocabulary Builder</Text>
        </View>
        <Categories/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    borderBottomWidth: 1,
    padding: 3,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  }
});
