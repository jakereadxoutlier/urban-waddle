import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...props }: Props) {
  return (
    <TouchableOpacity accessibilityRole="button" {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
