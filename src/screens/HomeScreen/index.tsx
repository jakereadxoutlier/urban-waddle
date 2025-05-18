import React from 'react';
import { FlatList } from 'react-native';
import PropertyCard from '@components/PropertyCard';
import { useListings } from '@hooks/useListings';
import { formatPrice } from '@utils/format';
import { Container } from './styles';

export default function HomeScreen() {
  const { data = [] } = useListings();

  return (
    <Container accessibilityLabel="home-screen">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertyCard
            address={item.address}
            price={formatPrice(item.price)}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
}
