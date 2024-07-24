import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screen/tabs/Tab1Screen';
import { Tab2Screen } from '../screen/tabs/Tab2Screen';
import { Tab3Screen } from '../screen/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { MaterialTopTabNavigator } from './MaterialTopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { Icons } from '../components/shared/Icons';

const Tab = createBottomTabNavigator();

export const ButtonTabNavigator = () => {
  return (
    <Tab.Navigator 
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Tab1" options={{ title: "Barcode", tabBarIcon: ({ color }) => (<Icons name="qr-code-outline" color={ color } />) }} component={ Tab1Screen } />
      <Tab.Screen name="Tab2" options={{ title: "Key", tabBarIcon: ({ color }) => (<Icons name="key-outline" color={ color } />) }} component={ MaterialTopTabNavigator } />
      <Tab.Screen name="Tab3" options={{ title: "Rocketbot", tabBarIcon: ({ color }) => (<Icons name="rocket-outline" color={ color } />) }} component={ StackNavigator } />
    </Tab.Navigator>
  );
}