import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts as useInter,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import {
  useFonts as usePlayfair,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';
import HomeScreen from '@screens/HomeScreen';
import MortgageScreen from '@screens/MortgageScreen';
import ProfileScreen from '@screens/ProfileScreen';
import { lightTheme, darkTheme } from '@theme/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [interLoaded] = useInter({ Inter_400Regular });
  const [playfairLoaded] = usePlayfair({ PlayfairDisplay_700Bold });

  if (!interLoaded || !playfairLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Mortgage" component={MortgageScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
