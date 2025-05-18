import React from 'react';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface PropertyCardProps {
  address: string;
  price: string;
}

const Card = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

export default function PropertyCard({ address, price }: PropertyCardProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPressIn={() => {
        scale.value = withSpring(0.97);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      accessibilityLabel="property-card"
    >
      <Card style={animatedStyle}>
        <Address>{address}</Address>
        <Price>{price}</Price>
      </Card>
    </Pressable>
  );
}
