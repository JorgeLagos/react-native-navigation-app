import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AboutScreen } from '../screen/about/AboutScreen';
import { ProfileScreen } from '../screen/profile/ProfileScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: globalColors.primary,
          tabBarPressColor: globalColors.primary,
          tabBarIndicatorStyle: {
            backgroundColor: globalColors.primary,
          },
        }}>
        <Tab.Screen name="Profile" component={ ProfileScreen } />
        <Tab.Screen name="About" component={ AboutScreen } />
      </Tab.Navigator>
    </>
  );
}