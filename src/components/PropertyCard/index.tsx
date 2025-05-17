import React from 'react';
import { View, Text } from 'react-native';

interface PropertyCardProps {
  address: string;
  price: string;
}

export default function PropertyCard({ address, price }: PropertyCardProps) {
  return (
    <View accessibilityLabel="property-card">
      <Text>{address}</Text>
      <Text>{price}</Text>
    </View>
  );
}
