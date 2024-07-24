import { useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { ButtonTabNavigator } from './ButtonTabNavigator';

import { ProfileScreen } from '../screen/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Icons } from '../components/shared/Icons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator 
      drawerContent={ (props) => <CustomDrawerContent { ...props }></CustomDrawerContent> }
      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width >= 750) ? 'permanent' : 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: '#FFFFFF',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen name="Tabs" options={{ drawerIcon: ({ color }) => (<Icons name="apps-outline" color={ color } />) }} component={ ButtonTabNavigator } />
      <Drawer.Screen name="Profile" options={{ drawerIcon: ({ color }) => (<Icons name="person-outline" color={ color } />) }} component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={{ height: 200, backgroundColor: globalColors.primary, margin: 30, borderRadius: 50 }}></View>
      <DrawerItemList { ...props }></DrawerItemList>
    </DrawerContentScrollView>
  )
}