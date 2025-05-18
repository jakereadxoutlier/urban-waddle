import React from 'react';
import { View, Text } from 'react-native';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View accessibilityRole="header">
      <Text>{title}</Text>
    </View>
  );
}
