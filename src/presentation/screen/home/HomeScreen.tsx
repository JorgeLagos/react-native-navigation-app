import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

import { globalStyle } from '../../theme/theme';

import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({ headerLeft: () => (
      <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }>
        <Text>Menu</Text>
      </Pressable>
    ) })
  }, [])
  
  return (
    <View style={ globalStyle.container }>
      <PrimaryButton
        label="Products"
        onPress={ () => navigation.navigate('Products') }
      ></PrimaryButton>
      
      <PrimaryButton 
        label="Settings" 
        onPress={ () => navigation.navigate('Settings') }
      ></PrimaryButton>
    </View>
  )
}