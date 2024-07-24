import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screen/home/HomeScreen';
import { ProductsScreen } from '../screen/products/ProductsScreen';
import { ProductScreen } from '../screen/products/ProductScreen';
import { SettingsScreen } from '../screen/settings/SettingsScreen';

import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export type RootStackParams = {
  Home: undefined;
  Product: { id: number, name: string };
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }}}>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />
      <Stack.Screen name="Settings" component={ SettingsScreen } />
    </Stack.Navigator>
  )
}