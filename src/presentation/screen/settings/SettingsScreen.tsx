import { View, Text } from 'react-native';
import { globalStyle } from '../../theme/theme';

import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation, type NavigationProp } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  return (
    <View style={ globalStyle.container }>
      <Text style={{ marginBottom:10, fontSize: 20 }}>Settings Screen</Text>
      <PrimaryButton
        label="Regresar"
        onPress={ () => navigation.goBack() }
      ></PrimaryButton>

      <PrimaryButton
        label="Regresar al Home"
        onPress={ () => navigation.dispatch(StackActions.popToTop()) }
      ></PrimaryButton>
    </View>
  )
}