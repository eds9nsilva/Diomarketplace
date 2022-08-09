import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    fontWeight: '700',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Olá Mundo</Text>
    </View>
  );
}

