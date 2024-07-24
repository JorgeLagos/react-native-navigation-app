import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { Icons } from '../../components/shared/Icons';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu></HamburgerMenu>
      <Text>Tab1Screen</Text>
      
      <Icons name='rocket-outline' size={25} color='#900000'></Icons>
    </View>
  )
}