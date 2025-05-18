import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import PropertyCard from './components/PropertyCard';

const DATA = [
  { id: '1', address: '123 Main St', price: '$500,000' },
  { id: '2', address: '456 Oak Ave', price: '$600,000' },
];

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Ai</Text>
      <TextInput
        style={styles.search}
        placeholder="Search properties"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertyCard address={item.address} price={item.price} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});
